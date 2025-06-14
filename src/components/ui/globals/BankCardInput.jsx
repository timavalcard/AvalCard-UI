'use client';

import { useEffect, useRef, useState } from 'react';
import Input from './Input';

export default function BankCardInput({ value = '', onChange, error }) {

  console.log(value, 'carddddd', value && value.length === 16);

  const inputsRef = useRef([]);
  const [values, setValues] = useState(['', '', '', '']);

  useEffect(() => {
    if (value && value.length === 16) {
      setValues([
        value.slice(0, 4),
        value.slice(4, 8),
        value.slice(8, 12),
        value.slice(12, 16),
      ]);
    }
  }, [value]);

  const handleChange = (e, index) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    const newValues = [...values];
    newValues[index] = raw;
    setValues(newValues);

    const joined = newValues.join('');
    onChange(joined);

    if (raw.length === 4 && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && values[index] === '' && index > 0) {
      const prevInput = inputsRef.current[index - 1];
      prevInput.focus();
      setTimeout(() => {
        prevInput.setSelectionRange(prevInput.value.length, prevInput.value.length);
      }, 0);
    }
  };

  // <input
  //   key={index}
  //   type="text"
  //   maxLength="4"
  //   ref={(el) => (inputsRef.current[index] = el)}
  //   value={values[index]}
  //   onChange={(e) => handleChange(e, index)}
  //   onKeyDown={(e) => handleKeyDown(e, index)}
  //   className={`w-full text-center font border ${error ? 'border-red-500 focus:border-2' : 'border-gray-300 focus:border-blue-custom'}  rounded-md p-2 focus:outline-none `}
  //   inputMode="numeric"
  //   pattern="\d*"
  // />
  return (
    <div className="w-full mx-auto text-right">
      <div className="flex gap-2 pb-1" dir="ltr">
        {Array.from({ length: 4 }).map((_, index) => (
          <Input
            key={index}
            type="text"
            maxLength="4"
            ref={(el) => (inputsRef.current[index] = el)}
            value={values[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`!rounded-md text-center !text-base`}
            inputMode="numeric"
            pattern="\d*"
            error={error}
          />
        ))}
      </div>
    </div>
  );
}
