'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/globals/Input';
import InputError from '@/components/ui/globals/InputError';
import PriceDollar from '@/components/ui/globals/PriceDollar';
import Button from '@/components/ui/globals/Button';
import {getCurrencies} from "../../../helpers/api/getCurrencies";
import {fetchAddCurrencyIncomeOrder} from "../../../helpers/api/currencyIncome/addOrder";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@/components/ui/globals/alert/Alert";
import Link from "next/link"
import {getCurrencyIncomeFee} from "../../../helpers/api/currencyIncome/getCurrencyIncomefee";
import BankCard from "./BankCard";
import InputPrice from '@/components/ui/globals/InputPrice';



const schema = yup.object().shape({
    country: yup.string().required('کشور مبدا الزامی است'),
    amount: yup
        .number(' ')
        .typeError('مبلغ باید عدد باشد')
        .positive('مبلغ باید بیشتر از صفر باشد')
        .required('مبلغ الزامی است'),
    currency: yup.string().required('انتخاب نوع ارز الزامی است'),
    accountHolder: yup.string().required('نام صاحب حساب الزامی است'),
    serviceDescription: yup.string().required('توضیح خدمات الزامی است'),
    receiveMethod: yup.string().required('روش دریافت الزامی است'),
    bankId: yup.string().required("حساب بانکی اجباری است"),
    additionalNotes: yup.string(),
    whatsapp: yup.string(),
});

export default function ClientContent() {
    const auth = useSelector(state => state.auth);
    const [rialAmount, setRialAmount] = useState(0);
    const [currencyCode, setCurrencyCode] = useState();
    const [authorizeStatus,setAuthorizeStatus]= useState(false);
    const [currencyIncomeFee, setCurrencyIncomeFee] = useState([])
    const [feePercent, setFeePercent] = useState(0);
    const [feeAmount, setFeeAmount] = useState(0);
    const [finalRialAmount, setFinalRialAmount] = useState(0);
    const [bankId, setBankId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [exchangeRates, setExchangeRates] = useState({
        دلار: 0,
        یورو: 0,
        پوند: 0,
    });
    useEffect(()=>{
        if(auth.user){
            setAuthorizeStatus(auth.user.authorize_status)
        }

    },[auth.user])
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
        const fetchCurrencyFee = async () => {
            try {
                const fees = await getCurrencyIncomeFee();
                setCurrencyIncomeFee(fees);
            } catch (error) {
                console.error("خطا در دریافت نرخ ارزها:", error);
            }
        };

        fetchCurrencyFee();
    }, []);

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
            currency: 'دلار',
        },
    });

    const watchAmount = watch('amount');
    const watchCurrency = watch('currency');

    useEffect(() => {
        if (watchAmount && watchCurrency) {
            const rate = exchangeRates[watchCurrency]?.rate;
            setRialAmount(watchAmount * rate);
            setCurrencyCode(exchangeRates[watchCurrency]?.code);
        }
    }, [watchAmount, watchCurrency]);
    const router = useRouter();

    const onSubmit = async (data) => {
        if( authorizeStatus != "accept"){
            return;
        }
        setLoading(true)
        const newData = {
            ...data,
            fee_percent: feePercent,
            fee_amount: feeAmount,
            final_rial_amount: finalRialAmount,
        };
        await fetchAddCurrencyIncomeOrder(newData,currencyCode,bankId,router)
        setLoading(false)

    };


    const getFeePercent = (amountInToman) => {
        const baseFee = currencyIncomeFee.base_fee || 0;
        const thresholds = currencyIncomeFee.thresholds || [];

        let fee = baseFee;
        for (const threshold of thresholds) {
            if (amountInToman >= threshold.amount) {
                fee = threshold.fee;
            }
        }
        return fee;
    };

    useEffect(() => {
        if (watchAmount && watchCurrency && exchangeRates[watchCurrency]?.rate) {
            const rate = exchangeRates[watchCurrency].rate;
            const amountInToman = watchAmount * rate;

            setRialAmount(amountInToman);

            const fee = getFeePercent(amountInToman);
            setFeePercent(fee);

            const feeValue = (amountInToman * fee) / 100;
            setFeeAmount(feeValue);

            const finalAmount = amountInToman - feeValue;
            setFinalRialAmount(finalAmount);
        }
    }, [watchAmount, watchCurrency, exchangeRates, currencyIncomeFee]);



    const [currencyKey, setCurrencyKey] = useState(null);
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

        <>

            <div className="grid grid-cols-1 gap-4">
                {authorizeStatus !=="accept" &&
                <div className="mb-5">
                    <Alert className="!text-lg" allowClose={true} type={'warning'}>
                        برای استفاده از سرویس نقد کردن درامد ابتدا باید احراز هویت کنید.
                        <Link className="text-blue-custom" href="/panel/auth">
                            رفتن به صفحه احراز هویت
                        </Link>
                    </Alert>
                </div>
                }
                <div>
                    <Input
                        {...register('country')}
                        placeholder="کشور مبدا واریز"
                        error={errors.country}
                    />
                    <InputError
                        error={errors.country?.message}
                    />
                </div>

                <div>
                    <Input
                        isSelect
                        {...register('currency')}
                        placeholder="نوع ارز"
                        error={errors.country}
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
                    <InputError
                        error={errors.country?.message}
                    />
                </div>

                {/* <div>
                    <Input
                        {...register('amount')}
                        placeholder="مبلغ"
                        type="number"
                        max={10000000000}
                        error={errors.amount}
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
            />




                <div>
                    <Input
                        {...register('accountHolder')}
                        error={errors.accountHolder}
                        placeholder="نام شخص صاحب حساب"
                    />
                    <InputError error={errors.accountHolder?.message} />
                </div>


                <div>
                    <Input
                        {...register('serviceDescription')}
                        error={errors.serviceDescription}
                        placeholder="بابت ارائه چه خدماتی این مبلغ برای شما واریز می‌گردد؟"
                    />
                    <InputError error={errors.serviceDescription?.message} />
                </div>


                <div>
                    <Input
                        isSelect
                        {...register('receiveMethod')}
                        placeholder="انتخاب روش دریافت"
                        error={errors.receiveMethod}
                    >
                        {/*<option value="paypal">پی‌پال</option>*/}
                        <option value="wise">حساب بانکی</option>
                        {/*<option value="webmoney">وب‌مانی</option>
                        <option value="crypto">ارز دیجیتال</option>*/}
                    </Input>
                    <InputError
                        error={errors.receiveMethod?.message}
                    />
                </div>

                <div>
                    <BankCard onBankChange={(id) => {
                        setValue('bankId', id);
                        setBankId(id)
                    }} />
                    {errors.bankId && (
                        <p className="text-red-500 text-xs mt-1">{errors.bankId.message}</p>
                    )}
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

                <div>
                    <Input
                        {...register('whatsapp')}
                        placeholder="شماره تماس واتساپ درصورت خارج از کشور بودن (اختیاری)"

                        error={errors.whatsapp}

                    />
                    <InputError error={errors.whatsapp?.message} />
                </div>
            </div>

            <div className="">
                <div className='!sticky top-2 space-y-4'>
                <div className="border rounded-2xl shadow p-6 space-y-3">
                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-xs text-gray-500">
                            مبلغ دریافتی به {watchCurrency?.replaceAll("_", " ")}:
                        </p>
                        <h3 className="text-base font-bold">
                            {watchAmount ? Number(watchAmount).toLocaleString() : '۰'} {watchCurrency?.replaceAll("_", " ")}
                        </h3>
                    </div>
                    <div className='flex justify-between items-center mb-2 truncate'>
                        <p className="text-xs text-gray-500 ">مبلغ دریافتی به تومان:</p>
                        <h3 className="text-base font-bold truncate">
                            {rialAmount.toLocaleString()} تومان
                        </h3>
                    </div>

                    {feePercent > 0 && <>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-xs text-gray-500">درصد کارمزد:</p>
                            <h3 className="text-base font-bold">{feePercent}٪</h3>
                        </div>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-xs text-gray-500">مبلغ کارمزد:</p>
                            <h3 className="text-base font-bold truncate">{feeAmount.toLocaleString()} تومان</h3>
                        </div>
                    </>}

                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-xs text-gray-500">مبلغ نهایی دریافتی:</p>
                        <h3 className="text-base font-bold truncate">{finalRialAmount.toLocaleString()} تومان</h3>
                    </div>


                    <Button
                        onClick={handleSubmit(onSubmit)}
                        loading={loading}
                        gradient={isValid && authorizeStatus === "accept" ? 'blue' : 'gray'}
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
