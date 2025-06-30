'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMemo, useState,useEffect } from 'react';
import Input from '@/components/ui/globals/Input';
import CityInput from '@/components/ui/globals/CityInput';
import ProvinceInput from '@/components/ui/globals/ProvinceInput';
import Button from '@/components/ui/globals/Button';
import UploadFile from '@/components/ui/globals/UploadFile/UploadFile';
import { sendAuthorizeRequest } from "../../../helpers/api/sendAuthorize";
import { useDispatch, useSelector } from "react-redux";

// ولیدیشن
const schema = yup.object({
    firstName: yup.string().required('نام الزامی است'),
    lastName: yup.string().required('نام خانوادگی الزامی است'),
    nationalCode: yup.string().required('کد ملی الزامی است').length(10, 'کد ملی باید ۱۰ رقم باشد'),
    mobile: yup.string().required('شماره موبایل الزامی است').matches(/^09\d{9}$/, 'شماره موبایل نامعتبر است'),
    birthDay: yup.string().required('روز تولد الزامی است'),
    birthMonth: yup.string().required('ماه تولد الزامی است'),
    birthYear: yup.string().required('سال تولد الزامی است'),
    province: yup.string().required('استان الزامی است'),
    city: yup.string().required('شهر الزامی است'),
    postalCode: yup.string().required('کد پستی الزامی است').length(10, 'کد پستی باید ۱۰ رقم باشد'),
    phone: yup
        .string()
        .matches(/^0[0-9]{2,3}-?[0-9]{7,8}$/, "شماره ثابت نامعتبر است")
        .required("شماره ثابت الزامی است"),
    address: yup.string().required('آدرس محل سکونت الزامی است'),
    nationalcard: yup.mixed().required(''),
    selfiePhoto: yup.mixed().required(''),
}).required();

export default function Form() {
    const auth = useSelector(state => state.auth);
    const { register, handleSubmit,
        watch, trigger,
        setValue, formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data) => {
        setIsLoading(true)
        await sendAuthorizeRequest(data, data.selfiePhoto, data.nationalcard, dispatch)
        setIsLoading(false)
    };

    // سال‌های مجاز (90 سال قبل تا 17 سال قبل)
    const years = useMemo(() => {
        const currentYear = 1407;
        const result = [];
        for (let year = currentYear - 17; year >= currentYear - 90; year--) {
            result.push(year);
        }
        return result;
    }, []);

    const province = watch('province', '')
    useEffect(() => {
        if (auth?.user?.authorize_data) {
            const data = auth.user.authorize_data;

            setValue('firstName', data.name || '');
            setValue('lastName', data.last_name || '');
            setValue('nationalCode', data.national_code || '');
            setValue('mobile', data.phone || '');
            setValue('birthYear', data.year || '');
            setValue('birthMonth', data.month || '');
            setValue('birthDay', data.day || '');
            setValue('city', data.city || '');
            setValue('province', data.state || '');
            setValue('postalCode', data.postal_code || '');
            setValue('phone', data.static_phone || '');
            setValue('address', data.address || '');
            // برای nationalcard و selfiePhoto، باید جداگانه handle بشه چون فایل هستند
        }
    }, [auth?.user, setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-10">
            <div className='grid md:grid-cols-2 grid-cols-1  gap-4 md:col-span-8'>
                <Input showError placeholder="نام" {...register('firstName')} error={errors.firstName?.message} />
                <Input showError placeholder="نام خانوادگی" {...register('lastName')} error={errors.lastName?.message} />

                <Input showError placeholder="کد ملی" {...register('nationalCode')} error={errors.nationalCode?.message} />
                <Input showError placeholder="شماره موبایل (مطابق با کد ملی)" {...register('mobile')} error={errors.mobile?.message} />

                <div className="md:col-span-2 grid grid-cols-3 gap-2">

                    <Input showError isSelect placeholder="سال" {...register('birthYear')} error={errors.birthYear?.message}>
                        <option value="">سال</option>
                        {years.sort().reverse().map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </Input>
                    <Input showError isSelect placeholder="ماه" {...register('birthMonth')} error={errors.birthMonth?.message}>
                        <option value="">ماه</option>
                        {[...Array(12)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </Input>

                    <Input showError isSelect placeholder="روز" {...register('birthDay')} error={errors.birthDay?.message}>
                        <option value="">روز</option>
                        {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </Input>
                </div>

                <ProvinceInput errors={errors} setValue={setValue} register={register} />
                <CityInput errors={errors} province={province} setValue={setValue} register={register} />

                <Input showError placeholder="کد پستی" {...register('postalCode')} error={errors.postalCode?.message} />
                <Input showError placeholder="شماره تلفن ثابت" {...register('phone')} error={errors.phone?.message} />

                <div className="md:col-span-2">
                    <Input showError
                        placeholder="آدرس محل سکونت"
                        {...register('address')}
                        error={errors.address?.message}
                        isTextarea
                        textAreaClasses
                        rows="4"

                    />
                </div>
            </div>
            <div className='md:col-span-4 space-y-4'>
                <UploadFile
                    name={'nationalcard'}
                    errors={errors}
                    setValue={setValue}
                    trigger={trigger}
                    text={"آپلود عکس کارت ملی"}
                />
                <UploadFile
                    name={'selfiePhoto'}
                    errors={errors}
                    setValue={setValue}
                    trigger={trigger}
                    text={"آپلود عکس سلفی به همراه کارت ملی"}
                />
            </div>
            <div className='md:col-span-12 md:text-right text-center'>

                <Button loading={isLoading} gradient={'blue'} type='submit' size='lg'>
                    ثبت و ارسال
                </Button>
            </div>
        </form>
    );
}
