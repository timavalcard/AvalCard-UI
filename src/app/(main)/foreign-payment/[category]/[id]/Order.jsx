'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/globals/Input';
import InputError from '@/components/ui/globals/InputError';
import Button from '@/components/ui/globals/Button';
import { getCurrencies } from '@/helpers/api/getCurrencies';
import PriceDollar from '@/components/ui/globals/PriceDollar';

export default function Order({ product }) {
    const [exchangeRates, setExchangeRates] = useState({});
    const [currencyKey, setCurrencyKey] = useState(null);
    const [currencyCode, setCurrencyCode] = useState(null);
    const [rialAmount, setRialAmount] = useState(0);
    const [currencyIsUserSelect, setCurrencyIsUserSelect] = useState(false);
    const [selectedExchangeRate, setSelectedExchangeRate] = useState(null);

    const { register, handleSubmit, watch, setValue, clearErrors, formState: { errors } } = useForm();

    // Fetch exchange rates when the component is mounted
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const rates = await getCurrencies();
                setExchangeRates(rates);
            } catch (err) {
                console.error("خطا در دریافت نرخ ارز:", err);
            }
        };
        fetchCurrencies();
    }, []);

    // Handle product-specific behavior when currency is predefined or user-selected
    useEffect(() => {
        if (!exchangeRates || !product?.currency) return;

        if (product.currency === 'user_select') {
            setCurrencyIsUserSelect(true);
            return;
        }

        const findCurrencyKeyByCode = (code) => {
            return Object.keys(exchangeRates).find(key => exchangeRates[key]?.code == code);
        };

        const foundKey = findCurrencyKeyByCode(product.currency);
        if (foundKey) {
            setCurrencyKey(foundKey);
            setCurrencyCode(exchangeRates[foundKey]?.code);
            const rate = exchangeRates[foundKey]?.rate;
            const baseAmount = product.currency_price * rate;
            setRialAmount(baseAmount);
        }
    }, [exchangeRates, product]);

    const watchAmount = watch('price');
    const watchCurrency = watch('currency');

    // Recalculate rialAmount whenever the user changes the currency or amount
    useEffect(() => {
        if (watchCurrency && watchAmount) {
            const rate = exchangeRates[watchCurrency]?.rate;
            if (rate) {
                const amountInToman = watchAmount * rate;
                setRialAmount(amountInToman);
                setSelectedExchangeRate(rate);
            }
        }
    }, [watchAmount, watchCurrency, exchangeRates]);

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Data submitted: ", data);
    };

    return (
        <div className="space-y-4">
            {/* Fields for user to select price and currency */}
            {currencyIsUserSelect && (
                <>
                    <div>
                        <Input
                            placeholder="انتخاب ارز"
                            {...register('currency')}
                            isSelect
                        >
                            <option hidden>نوع ارز را انتخاب کنید</option>
                            {Object.keys(exchangeRates).map((key) => (
                                <option key={key} value={key}>
                                    {key?.replaceAll("_", " ")}
                                </option>
                            ))}
                        </Input>

                        <InputError error={errors.currency?.message} />
                    </div>
                    {/* <div>
                        <Input
                            {...register('price')}
                            placeholder="مبلغ"
                            error={errors.price}
                        />
                        <InputError error={errors.price?.message} />
                    </div> */}

                    <InputPrice
clearErrors={clearErrors}
                name={'price'}
                errors={errors}
                register={register}
                setValue={setValue}
                watch={watch}
            />


                </>
            )}

            {/* For products that already have currency and price defined */}
            {!currencyIsUserSelect && (
                <div className="border rounded-2xl shadow p-6 space-y-3">
                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-xs text-gray-500">مبلغ به {currencyKey}:</p>
                        <h3 className="text-base font-bold">
                            {product.currency_price?.toLocaleString()} {currencyKey}
                        </h3>
                    </div>

                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-xs text-gray-500">معادل تومانی:</p>
                        <h3 className="text-base font-bold">{rialAmount.toLocaleString()} تومان</h3>
                    </div>
                </div>
            )}

            {/* Showing exchange rate for selected currency */}


            {/* Display final rialAmount and submit button */}
            <div className="mt-5">
                <div className="border rounded-2xl shadow p-6 space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xs text-gray-500">مبلغ نهایی به تومان:</p>
                        <h3 className="text-base font-bold">
                            {rialAmount.toLocaleString()} تومان
                        </h3>
                    </div>
                </div>
            </div>

            {/* Display currency exchange rate in the PriceDollar component */}
            {watchCurrency && selectedExchangeRate && (
                <PriceDollar
                    currency={watchCurrency}
                    dollar={`${selectedExchangeRate.toLocaleString('fa-IR')} تومان`}
                />
            )}
            {exchangeRates[currencyKey]?.rate && (
                <PriceDollar
                    currency={currencyKey}
                    dollar={`${exchangeRates[currencyKey]?.rate.toLocaleString('fa-IR')} تومان`}
                />
            )}
        </div>
    );
}
