'use client';

import { useEffect, useCallback, useRef } from 'react';
import Input from './Input';
import InputError from './InputError';
import { toEnglishDigits } from '@/utils/toEnglishDigits';
import { formatAmount } from '@/utils/formatAmount';

export default function InputPrice({
  setValue,
  watch,
  name,
  errors,
  placeholder = 'مبلغ',
  register,
  max,
  clearErrors,
  ...rest
}) {
  const rawValue = watch(name, '');
  const formattedValue = watch(`${name}Formatted`, '');
  const inputRef = useRef(null);

  const handleAmountChange = useCallback(
    (e) => {
      const input = e?.target?.value ?? rawValue;

      // فقط اعداد انگلیسی مجاز است
      let raw = toEnglishDigits(input).replace(/,/g, '').replace(/\D/g, '');

      // جلو‌گیری از مقادیر منفی
      // if (!raw || Number(raw) < 0) {
      //   raw = '0';
      // }

      // اعمال سقف مقدار
      if (max && Number(raw) > max) {
        raw = String(max);
      }

      // به‌روزرسانی مقادیر
      setValue(name, raw);
      setValue(`${name}Formatted`, formatAmount(raw));
      
      // if (Number(raw) === 0 && inputRef.current) {
      //   inputRef.current.select();
      // }

      if(clearErrors) clearErrors(name);
    },
    [rawValue, setValue, name, max]
  );

  useEffect(() => {
    handleAmountChange();
  }, [rawValue, handleAmountChange]);

  return (
    <div className="space-y-1">
      <Input
        {...register(`${name}Formatted`)}
        ref={inputRef}
        placeholder={placeholder}
        value={formattedValue}
        onChange={handleAmountChange}
        error={errors?.[name]?.message}
        showEror
        {...rest}
      />
      <InputError error={errors?.[name]?.message} />
    </div>
  );
}
