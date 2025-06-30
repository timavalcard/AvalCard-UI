'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/globals/Input';
import InputError from '@/components/ui/globals/InputError';
import Button from '@/components/ui/globals/Button';
import { getCurrencies } from "@/helpers/api/getCurrencies";
import PriceDollar from "../../../../../components/ui/globals/PriceDollar";
import InputPrice from '@/components/ui/globals/InputPrice';

// تنظیمات schema برای اعتبارسنجی
const schema = yup.object().shape({
    amount: yup
        .number('لطفا مبلغ را به صورت عددی وارد کنید.')
        .required('لطفا مبلغ را وارد کنید.')
        .positive('مبلغ باید بیشتر از صفر باشد.'),
    weightUnit: yup
        .string()
        .oneOf(['گرم', 'کیلوگرم', 'اونس', 'پوند'], 'واحد وزن نامعتبر است.')
        .required('لطفا واحد وزن را انتخاب کنید.'),
    weight: yup
        .number('وزن باید عددی باشد!')
        .required('لطفا وزن را وارد کنید.'),
});

const Order = ({ product }) => {
    const [rialAmount, setRialAmount] = useState(0);
    const [finalRialAmount, setFinalRialAmount] = useState(0);
    const [exchangeRates, setExchangeRates] = useState({});
    const [loading, setLoading] = useState(false);

    // دریافت نرخ ارز
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const rates = await getCurrencies();
                setExchangeRates(rates);
            } catch (error) {
                console.error('خطا در دریافت نرخ ارزها:', error);
            }
        };
        fetchCurrencies();
    }, []);

    // محاسبه هزینه ارسال
    const calculateShippingCost = (weight, unit) => {
        if (!weight || !exchangeRates) return 0;

        let weightInKg = weight;
        switch (unit) {
            case 'گرم':
                weightInKg = weight / 1000;
                break;
            case 'پوند':
                weightInKg = weight * 0.453592;
                break;
            case 'اونس':
                weightInKg = weight * 0.0283495;
                break;
            default:
                weightInKg = weight;
                break;
        }

        // محاسبه هزینه ارسال با نرخ ارز دلار
        const shippingCostInCurrency = weightInKg * 5000; // فرضی برای قیمت ارسال
        const shippingCostInToman = Math.ceil(shippingCostInCurrency * exchangeRates['دلار']?.rate * 1000) / 1000;
        return shippingCostInToman;
    };

    // دریافت داده‌ها از فرم
    const { register, handleSubmit, setValue, watch, clearErrors, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const watchAmount = watch('amount');
    const watchWeight = watch('weight');
    const watchWeightUnit = watch('weightUnit');

    useEffect(() => {
        if (watchAmount && exchangeRates['دلار']) {
            const rate = exchangeRates['دلار']?.rate;
            const rialAmount2 = watchAmount * rate;
            setRialAmount(rialAmount2);

            let shippingCost = calculateShippingCost(watchWeight, watchWeightUnit);
            let finalAmount = rialAmount2 + shippingCost;
            setFinalRialAmount(finalAmount);
        }
    }, [watchAmount, watchWeight, watchWeightUnit, exchangeRates]);

    // ارسال سفارش
    const onSubmit = async (data) => {
        setLoading(true);
        console.log('ارسال سفارش با داده‌ها:', data);
        setLoading(false);
    };

    const [currencyKey, setCurrencyKey] = useState(null);
    const [selectedExchangeRate, setSelectedExchangeRate] = useState(null);
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState(null);

    useEffect(() => {

        if (!exchangeRates || !product?.currency) return;

        const findCurrencyKeyByCode = (code) => {

            return Object.keys(exchangeRates).find(key => exchangeRates[key]?.code == code);
        };

        const foundKey = findCurrencyKeyByCode(product.currency);
        if (foundKey) {
            setCurrencyKey(foundKey);
            setSelectedExchangeRate(exchangeRates[foundKey]?.rate);
            setSelectedCurrencyCode(exchangeRates[foundKey]?.code);
        }


    }, [exchangeRates]);


    return (
        <div className="grid grid-cols-1 gap-4">
            {/* <div>
                <Input
                    {...register('amount')}
                    placeholder="مبلغ"
                    type="number"
                    min={0}
                    error={errors.amount}
                />
                <InputError error={errors.amount?.message} />
            </div> */}

            <InputPrice
clearErrors={clearErrors}
                name={'amount'}
                errors={errors}
                register={register}
                setValue={setValue}
                watch={watch}
            />

            <div>
                <Input
                    isSelect
                    {...register('weightUnit')}
                    placeholder="واحد وزن"
                    error={errors.weightUnit}
                >
                    <option value="کیلوگرم">کیلوگرم</option>
                    <option value="گرم">گرم</option>
                    <option value="اونس">اونس</option>
                    <option value="پوند">پوند</option>
                </Input>
                <InputError error={errors.weightUnit?.message} />
            </div>

            <div>
                <Input
                    {...register('weight')}
                    placeholder="وزن"
                    type="number"
                    error={errors.weight}
                />
                <InputError error={errors.weight?.message} />
            </div>

            {/* نمایش قیمت‌ها */}
            <div>
                <div className="border rounded-2xl shadow p-6 space-y-3">
                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-xs text-gray-500">مبلغ محصول به تومان:</p>
                        <h3 className="text-base font-bold">
                            {rialAmount.toLocaleString()} تومان
                        </h3>
                    </div>

                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-xs text-gray-500">هزینه ارسال:</p>
                        <h3 className="text-base font-bold">{calculateShippingCost(watchWeight, watchWeightUnit).toLocaleString()} تومان</h3>
                    </div>

                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-xs text-gray-500">جمع کل پرداختی:</p>
                        <h3 className="text-base font-bold">{finalRialAmount.toLocaleString()} تومان</h3>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                {currencyKey && exchangeRates[currencyKey]?.rate && <PriceDollar currency={currencyKey} dollar={`${exchangeRates[currencyKey]?.rate.toLocaleString("fa-IR")}  تومان `} />}
            </div>

        </div>
    );
};

export default Order;
