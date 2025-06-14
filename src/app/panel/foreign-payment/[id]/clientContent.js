'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/globals/Input';
import InputError from '@/components/ui/globals/InputError';
import PriceDollar from '@/components/ui/globals/PriceDollar';
import Button from '@/components/ui/globals/Button';
import { getCurrencies } from "@/helpers/api/getCurrencies";
import { fetchAddCurrencyIncomeOrder } from "@/helpers/api/currencyIncome/addOrder";
import { useRouter } from "next/navigation";
import { fetchAddInterPaymentOrder } from "../../../../helpers/api/interPayment/addOrder";
import InputPrice from '@/components/ui/globals/InputPrice';





export default function ClientContent({ product }) {
    const [loading, setLoading] = useState(false)
    const staticFields = {
        price: yup
            .string()
            .required('مبلغ الزامی است'),
        isAvailableAtNight: yup
            .string()
            .oneOf(['بله', 'خیر'], 'لطفاً یکی از گزینه‌ها را انتخاب کنید')
            .required('پاسخ به این سوال الزامی است'),
        additionalNotes: yup
            .string()
            .max(500, 'توضیحات بیشتر از ۵۰۰ کاراکتر مجاز نیست'),
    };

    // حالا داینامیک برای user_info
    const dynamicFields = {};

    product.user_info?.forEach(field => {
        switch (field.type) {
            case 'email':
                dynamicFields[field.label] = yup
                    .string()
                    .email('ایمیل معتبر نیست')
                    .required(`${field.label} الزامی است`);
                break;
            case 'password':
                dynamicFields[field.label] = yup
                    .string()
                    .min(4, `${field.label} حداقل باید 4 کاراکتر باشد`)
                    .required(`${field.label} الزامی است`);
                break;
            case 'date':
                dynamicFields[field.label] = yup
                    .date()
                    .typeError(`${field.label} معتبر نیست`)
                    .required(`${field.label} الزامی است`);
                break;
            case 'time':
                dynamicFields[field.label] = yup
                    .string()
                    .required(`${field.label} الزامی است`);
                break;
            default:
                dynamicFields[field.label] = yup
                    .string()
                    .required(`${field.label} الزامی است`);
                break;
        }
    });

    // حالا اسکیمای نهایی
    const schema = yup.object().shape({
        ...dynamicFields,
        ...staticFields,
    });






    const [rialAmount, setRialAmount] = useState(0);
    const [currencyCode, setCurrencyCode] = useState();
    const [currencyPrice, setCurrencyPrice] = useState(0);
    const [currencyIsUserSelect, setCurrencyIsUserSelect] = useState(false);
    const [currencyKey, setCurrencyKey] = useState(null);
    const [selectedExchangeRate, setSelectedExchangeRate] = useState(null);
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState(null);
    const [feePercent, setFeePercent] = useState(0);
    const [feeAmount, setFeeAmount] = useState(0);
    const [finalRialAmount, setFinalRialAmount] = useState(0);
    const [tenPercentValue, setTenPercentValue] = useState(0);

    const [exchangeRates, setExchangeRates] = useState({
        دلار: 0,
        یورو: 0,
        پوند: 0,
    });

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const rates = await getCurrencies();
                console.log(rates)
                setExchangeRates(rates);
            } catch (error) {
                console.error("خطا در دریافت نرخ ارزها:", error);
            }
        };

        fetchCurrencies();
    }, []);



    useEffect(() => {

        if (!exchangeRates || !product?.currency) return;
        if (product.currency === "user_select") {
            setCurrencyCode("137203")
            setCurrencyKey("دلار")
            setCurrencyIsUserSelect(true)
            return
        }

        const findCurrencyKeyByCode = (code) => {

            return Object.keys(exchangeRates).find(key => exchangeRates[key]?.code == code);
        };

        const foundKey = findCurrencyKeyByCode(product.currency);
        if (foundKey) {
            setCurrencyKey(foundKey);
            setValue('currency', foundKey);
            setValue('price', product.currency_price);
            setCurrencyPrice(product.currency_price)
            setRialAmount(product.currency_price * exchangeRates[foundKey]?.rate);
            setSelectedExchangeRate(exchangeRates[foundKey]?.rate);
            setSelectedCurrencyCode(exchangeRates[foundKey]?.code);
        }


    }, [exchangeRates, product]);



    const {
        register,
        handleSubmit,
        watch,
        setValue,
        clearErrors,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            currency: currencyKey,
        },
    });

    const watchAmount = watch('price');
    const watchCurrency = watch('currency');



    useEffect(() => {
        if (watchCurrency) {

            setCurrencyCode(exchangeRates[watchCurrency]?.code);
            setCurrencyKey(watchCurrency);
        }
        if (watchAmount && watchCurrency) {
            const rate = exchangeRates[watchCurrency]?.rate;
            const amountInToman = watchAmount * rate;

            setRialAmount(amountInToman);

            const fee = product.fee_percent;
            setFeePercent(fee);

            const feeValue = (amountInToman * fee) / 100;
            setFeeAmount(feeValue);



            let finalAmount = amountInToman + feeValue;

            const ternPercent = (finalAmount * 10) / 100;
            setTenPercentValue(ternPercent);

            finalAmount = ternPercent + finalAmount;
            setFinalRialAmount(finalAmount);


            setCurrencyCode(exchangeRates[watchCurrency]?.code);
            setCurrencyKey(watchCurrency);
        }
    }, [watchAmount, watchCurrency]);
    const router = useRouter();
    const onSubmit = async (data) => {
        setLoading(true)
        await fetchAddInterPaymentOrder(data, currencyCode, product.id, router)
        setLoading(false)

    };

    return (

        <>

            <div className="grid grid-cols-1 gap-4">

                {product.user_info?.map((field, index) => (
                    <div key={index}>
                        <Input
                            {...register(field.label)}
                            placeholder={field.label}
                            type={field.type} // اینجا نوع اینپوت مثل email, password, date و ... تعیین میشه
                            error={errors?.[field.label]}
                        />
                        <InputError
                            error={errors?.[field.label]?.message}
                        />
                    </div>
                ))}

                {!currencyIsUserSelect &&
                    <InputPrice
clearErrors={clearErrors}
                        name={'price'}
                        errors={errors}
                        register={register}
                        disabled={!!product?.currency_price}
                        icon={<div className='text-xs opacity-60 ml-3'>نوع ارز: {currencyKey}</div>}
                        setValue={setValue}
                        watch={watch}
                    />
                }
                {/* <div>
                    <Input
                        {...register('price')}
                        placeholder="مبلغ"
                        error={errors.price}
                        disabled={!!product?.currency_price}
                        icon={<div className='text-xs opacity-60 ml-3'>نوع ارز: {currencyKey}</div>}
                        />
                    <InputError
                        error={errors.price?.message}
                    />
                </div> */}

                {currencyIsUserSelect &&
                    <>
                        <InputPrice
clearErrors={clearErrors}
                            name={'price'}
                            errors={errors}
                            register={register}
                            setValue={setValue}
                            watch={watch}
                        />
                        <div>
                            <Input
                                placeholder="انتخاب ارز"
                                {...register('currency')}
                                isSelect
                            >
                                <option hidden>نوع ارز را انتخاب کنید</option>
                                {Object.keys(exchangeRates).map((key) => (
                                    <option key={key} value={key} selected={currencyKey === key}>
                                        {key?.replaceAll("_", " ")}
                                    </option>
                                ))}
                            </Input>


                            <InputError
                                error={errors.currency?.message}
                            />
                        </div>
                    </>
                }




                <div className='text-[#464646] text-sm'>
                    <p className='mb-2'>آیا در ساعات نامتعارف (1 بامداد الی 7 صبح) قادر به پاسخ به تماس تلفنی هستید؟</p>
                    <div className='grid grid-cols-2 gap-10 text-black'>
                        <label className={`border py-3 text-center rounded-lg cursor-pointer ${watch('isAvailableAtNight') === 'بله' ? 'border-blue-custom' : ''}`}>
                            <input
                                type="radio"
                                value="بله"
                                {...register('isAvailableAtNight')}
                                className="hidden"
                            />
                            بله
                        </label>
                        <label className={`border py-3 text-center rounded-lg cursor-pointer ${watch('isAvailableAtNight') === 'خیر' ? 'border-blue-custom' : ''}`}>
                            <input
                                type="radio"
                                value="خیر"
                                {...register('isAvailableAtNight')}
                                className="hidden"
                            />
                            خیر
                        </label>
                    </div>
                    <InputError error={errors.isAvailableAtNight?.message} />
                </div>


                <div>
                    <Input
                        {...register('additionalNotes')}
                        placeholder="توضیحات بیشتر (اختیاری)"
                        isTextarea
                        textAreaClasses
                        error={errors.additionalNotes}
                        rows={4}
                    />
                    <InputError error={errors.additionalNotes?.message} />
                </div>

            </div>

            <div className="">
                <div className='!sticky top-2 space-y-4'>
                    <div className="border rounded-2xl shadow p-6 space-y-3">
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-xs text-gray-500">مبلغ پرداختی به {watchCurrency?.replaceAll("_", " ")}:</p>
                            <h3 className="text-base font-bold">
                                {watchAmount ? Number(watchAmount).toLocaleString() : '۰'} {watchCurrency?.replaceAll("_", " ")}
                            </h3>
                        </div>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-xs text-gray-500">مبلغ : </p>
                            <h3 className="text-base font-bold">
                                {rialAmount.toLocaleString()} تومان
                            </h3>
                        </div>
                        {/*{feePercent > 0 && <>
                            <div className='flex justify-between items-center mb-2'>
                                <p className="text-xs text-gray-500">مبلغ کارمزد:</p>
                                <h3 className="text-base font-bold">{feeAmount.toLocaleString()} تومان</h3>
                            </div>
                        </>}
                        {tenPercentValue > 0 && <>
                            <div className='flex justify-between items-center mb-2'>
                                <p className="text-xs text-gray-500">مالیات و ارزش افزوده:</p>
                                <h3 className="text-base font-bold">{tenPercentValue.toLocaleString()} تومان</h3>
                            </div>
                        </>}*/}

                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-xs text-gray-500">مبلغ نهایی پرداختی به تومان:</p>
                            <h3 className="text-base font-bold">
                                {finalRialAmount.toLocaleString()} تومان
                            </h3>
                        </div>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            gradient={isValid ? 'blue' : 'gray'}
                            loading={loading}
                            size='full'
                        >
                            ثبت سفارش
                        </Button>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        مبالغ نهایی که شامل هزینه تبدیل ارز، کارمزد و موارد دیگر است محاسبه شده و به شکل خالص برای شما پرداخت می‌گردد.
                    </p>
                    <div className="mt-5">
                        {exchangeRates[currencyKey]?.rate && <PriceDollar currency={currencyKey} dollar={`${exchangeRates[currencyKey]?.rate.toLocaleString("fa-IR")}  تومان `} />}
                    </div>
                </div>
            </div>
        </>
    );
}
