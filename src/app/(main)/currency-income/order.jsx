'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/globals/Input';
import InputError from '@/components/ui/globals/InputError';
import PriceDollar from '@/components/ui/globals/PriceDollar';
import { getCurrencies } from '@/helpers/api/getCurrencies';
import InputPrice from '@/components/ui/globals/InputPrice';

export default function Order() {
    const [exchangeRates, setExchangeRates] = useState({});
    const { register, watch, setValue, clearErrors, formState: { errors } } = useForm({
        defaultValues: {
            currency: 'دلار',
            amount: '',
        },
    });

    const watchCurrency = watch('currency');
    const watchAmount = watch('amount');

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const rates = await getCurrencies();
                setExchangeRates(rates);
            } catch (err) {
                console.error('خطا در دریافت نرخ ارزها:', err);
            }
        };
        fetchRates();
    }, []);

    const selectedRate = exchangeRates[watchCurrency]?.rate;
    const finalPrice =
        watchAmount && selectedRate
            ? (Number(watchAmount) * Number(selectedRate)).toLocaleString()
            : null;
    const [currencyKey, setCurrencyKey] = useState("دلار");
    const [selectedExchangeRate, setSelectedExchangeRate] = useState(null);
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState(null);

    useEffect(() => {

        if (!exchangeRates) return;

        const findCurrencyKeyByCode = (code) => {

            return Object.keys(exchangeRates).find(key => key == code);
        };

        const foundKey = findCurrencyKeyByCode(watchCurrency);
        if(foundKey){
            setCurrencyKey(foundKey);
            setSelectedExchangeRate(exchangeRates[foundKey]?.rate);
            setSelectedCurrencyCode(exchangeRates[foundKey]?.code);
        }


    }, [watchCurrency]);
    return (
        <div className="space-y-6 mt-5">
            {/* ردیف اول: نوع ارز و مبلغ */}
            <div className="grid grid-cols-2 gap-4">
                {/* انتخاب نوع ارز */}
                <div>
                    <Input
                        isSelect
                        {...register('currency')}
                        placeholder="نوع ارز"
                    >
                        <option value="دلار">دلار آمریکا</option>
                        <option value="دلار_کانادا">دلار کانادا</option>
                        <option value="دلار_هنگ_کنگ">دلار هنگ کنگ</option>
                        <option value="دلار_استرالیا">دلار استرالیا</option>
                        <option value="پوند">پوند</option>
                        <option value="یورو">یورو</option>
                        <option value="درهم_امارات">درهم امارات</option>
                        <option value="رئال_برزیل">رئال برزیل</option>
                        <option value="ین_ژاپن">ین ژاپن</option>
                        <option value="یوان_چین">یوان چین</option>
                        <option value="لیر_ترکیه">لیر ترکیه</option>
                        <option value="روپیه_هند">روپیه هند</option>
                        <option value="دینار_کویت">دینار کویت</option>
                        <option value="پزوی_آرژانتین">پزوی آرژانتین</option>
                        <option value="هریونیا_اوکراین">هریونیا اوکراین</option>
                        <option value="پزوی_مکزیک">پزوی مکزیک</option>
                    </Input>
                    <InputError error={errors.currency?.message} />
                </div>

                {/* مبلغ */}
                <InputPrice
                    clearErrors={clearErrors}
                    name={'amount'}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    watch={watch}
                />
                {/* قیمت نهایی */}
                {finalPrice && (
                    <div className="border rounded-2xl shadow p-6 space-y-3">
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-xs text-gray-500">قیمت نهایی به تومان:</p>
                            <h3 className="text-base font-bold">
                                {finalPrice} تومان
                            </h3>
                        </div>
                    </div>
                )}

                {/* نرخ ارز */}
                {exchangeRates[currencyKey]?.rate && (
                    <PriceDollar
                        currency={currencyKey}
                        dollar={`${exchangeRates[currencyKey]?.rate.toLocaleString("fa-IR")}  تومان `}
                    />
                )}
            </div>


        </div>

    );
}
