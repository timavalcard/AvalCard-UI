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
import { fetchAddBuyProductOrder } from "@/helpers/api/buyProduct/addOrder";
import { useRouter } from "next/navigation";
import AddressCard from './AddressCard';
import InputPrice from '@/components/ui/globals/InputPrice';



const schema = yup.object().shape({
    link: yup.string().required('لطفا لینک محصول را وارد کنید.'),
    /*currency: yup
        .string()
        .oneOf(['دلار', 'یورو', 'پوند'], 'نوع ارز نامعتبر است.')
        .required('لطفا نوع ارز را انتخاب کنید.'),*/
    amount: yup
        .number(' ')
        .typeError('لطفا مبلغ را به صورت عددی وارد کنید.')
        .required('لطفا مبلغ را وارد کنید.')
        .positive('مبلغ باید بیشتر از صفر باشد.')
        .max(10000000000, 'مبلغ نمی‌تواند بیشتر از ۱۰ میلیارد تومان باشد.'),
    submitDate: yup.string().required('لطفا مدت زمان تحویل را وارد کنید.'),
    weightUnit: yup
        .string(' ')
        .oneOf(['گرم', 'کیلوگرم', 'اونس', 'پوند'], 'واحد وزن نامعتبر است.')
        .required('لطفا واحد وزن را انتخاب کنید.'),
    des: yup.string().required(' '),
    addressId: yup.string().required('انتخاب و ساخت آدرس الزامی است.'),
    quantity: yup
        .number(' ')
        .typeError('لطفا تعداد را به صورت عددی وارد کنید.')
        .required('لطفا تعداد را وارد کنید.')
        .min(1, 'حداقل تعداد ۱ است.')
        .max(1000, 'حداکثر تعداد ۱۰۰۰ است.'),
    weight: yup.number('وزن باید عددی باشد!').typeError('لطفا وزن را به صورت عددی وارد کنید.').required('لطفا وزن را وارد کنید.')
});

export default function ClientContent({ product }) {
    const [rialAmount, setRialAmount] = useState(0);
    const [currencyCode, setCurrencyCode] = useState();
    const [addressId, setAddressId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [tenPercentValue, setTenPercentValue] = useState(0);
    const [finalRialAmount, setFinalRialAmount] = useState(0);
    const [feePercent, setFeePercent] = useState(0);
    const [feeAmount, setFeeAmount] = useState(0);
    const [exchangeRates, setExchangeRates] = useState({
        دلار: 0,
        یورو: 0,
        پوند: 0,
    });

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const rates = await getCurrencies();
                setExchangeRates(rates);
            } catch (error) {
                console.error("خطا در دریافت نرخ ارزها:", error);
            }
        };

        fetchCurrencies();
    }, []);



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
            setValue('currency', foundKey);
            setSelectedExchangeRate(exchangeRates[foundKey]?.rate);
            setSelectedCurrencyCode(exchangeRates[foundKey]?.code);
        }


    }, [exchangeRates]);


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
            weightUnit: "کیلوگرم",
            quantity: 1,
        },
    });

    const watchAmount = watch('amount');
    const watchCurrency = watch('currency');
    const quantity = watch('quantity');

    const watchWeight = watch('weight');
    const watchWeightUnit = watch('weightUnit');

    const calculateShippingCost = (weight, unit) => {
        if (!weight || !product.send_price || !selectedExchangeRate) return 0;

        let weightInKg = weight; // پیشفرض وزن بر حسب کیلوگرم

        switch (unit) {
            case "گرم":
                weightInKg = weight / 1000;
                break;
            case "پوند":
                weightInKg = weight * 0.453592; // 1 پوند = 0.453592 کیلوگرم
                break;
            case "اونس":
                weightInKg = weight * 0.0283495; // 1 اونس = 0.0283495 کیلوگرم
                break;
            case "کیلوگرم":
            default:
                weightInKg = weight;
                break;
        }

        const shippingCostInCurrency = weightInKg * product.send_price;
        const shippingCostInTomanRaw = (shippingCostInCurrency * selectedExchangeRate) * quantity;
        const shippingCostInToman = Math.ceil(shippingCostInTomanRaw / 1000) * 1000 || 0;

        return {
            shippingCostInCurrency,
            shippingCostInToman
        };
    }

    const { shippingCostInCurrency, shippingCostInToman } = calculateShippingCost(watchWeight, watchWeightUnit);

    useEffect(() => {
        if (watchAmount && watchCurrency) {
            const rate = exchangeRates[watchCurrency]?.rate;
            let rialAmount2 = (watchAmount * rate) * quantity;
            setRialAmount(rialAmount2);

            let finalAmount = rialAmount2 + (shippingCostInToman || 0);

            const fee = product.fee_percent;
            setFeePercent(fee);

            const feeValue = (finalAmount * fee) / 100;
            setFeeAmount(feeValue);
            finalAmount = finalAmount + feeValue;


            const ternPercent = (finalAmount * 10) / 100;
            setTenPercentValue(ternPercent);

            finalAmount = ternPercent + finalAmount;
            setFinalRialAmount(finalAmount);



            setCurrencyCode(exchangeRates[watchCurrency]?.code);
        }
    }, [watchAmount, watchCurrency, quantity, shippingCostInToman]);
    const router = useRouter();
    const onSubmit = async (data) => {
        setLoading(true)
        await fetchAddBuyProductOrder(data, currencyCode, rialAmount, shippingCostInToman, finalRialAmount, addressId, product.id, tenPercentValue, feeAmount, feePercent, router)
        setLoading(false)

    };




    return (

        <>

            <div className="grid grid-cols-1 gap-4">

                <div>
                    <Input
                        {...register('link')}
                        placeholder="لینک محصول"
                        error={errors.link}
                    />
                    <InputError
                        error={errors.link?.message}
                    />
                </div>

                {/*<div>
                    <Input
                        isSelect
                        {...register('currency')}
                        placeholder="نوع ارز"
                        error={errors.country}
                    >
                        <option value="دلار">دلار</option>
                        <option value="یورو">یورو</option>
                        <option value="پوند">پوند</option>
                    </Input>
                    <InputError
                        error={errors.country?.message}
                    />
                </div>*/}

                {/* <div>
                    <Input
                        {...register('amount')}
                        placeholder="مبلغ"
                        type="number"
                        min={0}
                        max={10000000000}
                        error={errors.amount}
                        icon={<div className='text-xs opacity-60 ml-3'>نوع ارز: {currencyKey}</div>}
                    />
                    <InputError
                        error={errors.amount?.message}
                    />
                </div> */}

                <InputPrice
clearErrors={clearErrors}
                    name={'amount'}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    watch={watch}
                    max={10000000000}
                    icon={<div className='text-xs opacity-60 ml-3'>نوع ارز: {currencyKey}</div>}
                />

                <div>
                    <Input
                        {...register('submitDate')}
                        error={errors.submitDate}
                        placeholder="مدت زمان تحویل"
                        value={product.time_to_send}
                    />
                    <InputError error={errors.submitDate?.message} />
                </div>


                <div>
                    <Input
                        isSelect
                        {...register('weightUnit')}
                        placeholder="واحد وزن"
                        error={errors.country}
                    >
                        <option value="کیلوگرم">کیلوگرم</option>
                        <option value="گرم">گرم</option>
                        <option value="اونس">اونس</option>
                        <option value="پوند">پوند</option>
                    </Input>
                    <InputError
                        error={errors.weightUnit?.message}
                    />
                </div>

                <div>
                    <Input
                        {...register('weight')}
                        error={errors.weight}
                        placeholder="وزن"
                        type="number"
                    />
                    <InputError error={errors.weight?.message} />
                </div>

                <div>
                    <AddressCard
                        error={errors.addressId?.message}
                        onAddressChange={(id) => {
                            setValue('addressId', id);
                            setAddressId(id)
                        }} />
                    <InputError
                        error={errors.addressId?.message}
                    />
                </div>

                <div>
                    <Input
                        {...register('des')}
                        placeholder="توضیحات (رنگ، اندازه، سایز و سایر شرایط)"
                        isTextarea
                        textAreaClasses
                        error={errors.des}
                        rows={4}
                    />
                    <InputError error={errors.des?.message} />
                </div>

                <div className='text-[#464646] text-sm'>
                    <p className='mb-2'>انتخاب تعداد</p>
                    <div className='grid grid-cols-4 xl:gap-12 gap-4 text-black '>

                        {/* دکمه کم کردن */}
                        <button
                            type="button"
                            className='py-2 border rounded-lg flex justify-center items-center'
                            onClick={() => {
                                const current = watch('quantity');
                                if (current > 1) {
                                    setValue('quantity', current - 1);
                                }
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#3664FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* نمایش تعداد */}
                        <div className='col-span-2 py-2 border rounded-lg flex justify-center items-center'>
                            {watch('quantity')}
                        </div>

                        {/* دکمه زیاد کردن */}
                        <button
                            type="button"
                            className='py-2 border rounded-lg flex justify-center items-center'
                            onClick={() => {
                                const current = watch('quantity');
                                if (current < 1000) {
                                    setValue('quantity', current + 1);
                                }
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M5 12H19" stroke="#3664FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>

                    {/* نمایش ارور ولیدیشن تعداد */}
                    <InputError error={errors.quantity?.message} />
                </div>

            </div>

            <div className="grid h-full relative">
                <div className=''>
                    <div className='sticky top-0 space-y-4'>
                        <div className="border rounded-2xl shadow p-6 space-y-3">

                            <div className='flex justify-between items-center mb-2'>
                                <p className="text-xs text-gray-500">مبلغ محصول به تومان:</p>
                                <h3 className="text-base font-bold">
                                    {(rialAmount).toLocaleString()} تومان
                                </h3>
                            </div>

                            {/*<div className='flex justify-between items-center mb-2'>
                                <p className="text-xs text-gray-500">هزینه ارسال:</p>
                                <h3 className="text-base font-bold">
                                    {shippingCostInToman ? (shippingCostInToman).toLocaleString() + " تومان " : 'وزن محصول را وارد کنید'}
                                </h3>
                            </div>
                            {feePercent > 0 && <>
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

                            {((feePercent > 0 || shippingCostInToman > 0) && !isNaN(feeAmount) && !isNaN(shippingCostInToman))  && <>
                                <div className='flex justify-between items-center mb-2'>
                                    <p className="text-xs text-gray-500">هزینه حمل و نقل و کارمزد :</p>
                                    <h3 className="text-base font-bold">{(feeAmount + shippingCostInToman ).toLocaleString()} تومان</h3>
                                </div>
                            </>}

                            <div className='flex justify-between items-center mb-2'>
                                <p className="text-xs text-gray-500">جمع کل پرداختی:</p>
                                <h3 className="text-base font-bold">
                                    {finalRialAmount.toLocaleString()} تومان
                                </h3>
                            </div>



                            <Button
                                onClick={handleSubmit(onSubmit)}
                                gradient={isValid ? 'blue' : 'gray'}
                                size='full'
                                loading={loading}
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
            </div>
        </>
    );
}
