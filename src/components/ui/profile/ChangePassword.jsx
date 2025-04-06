"use client"

import InputPassword from "@/components/ui/globals/InputPassword";

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from "../globals/Button";

export default function ChangePassword() {

    const schema = yup.object().shape({
        beforePassword: yup
            .string()
            .required('وارد کردن رمز عبور الزامی است'),
        password: yup
            .string()
            .required('وارد کردن رمز عبور الزامی است')
            .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
        rePassword: yup
            .string()
            .required('وارد کردن تکرار رمز عبور الزامی است')
            .oneOf([yup.ref('password'), null], 'رمز عبور با تکرار آن مطابقت ندارد')
            .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    });


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-custom-2 text-base text-muted-0 font-medium">
        تغییر پسورد
        </div>
        <div className="grid grid-cols-2 gap-y-4 gap-x-5 mt-4">
                <InputPassword
                    error={errors.beforePassword?.message}
                    name='beforePassword'
                    register={register}
                    placeholder="رمز عبور قبلی" />
            <div className="">
            </div>

            <InputPassword
                error={errors.password?.message}
                name='password'
                register={register}
                placeholder="رمز عبور جدید" />

            <InputPassword
                error={errors.rePassword?.message}
                name='rePassword'
                register={register}
                placeholder="تکرار رمز عبور جدید" />
        </div>

        <Button className={'mt-custom-3 mx-auto'} size="xl">
            تایید
        </Button>
        </form>

    );
}