"use client"

import InputPassword from "@/components/ui/globals/InputPassword";

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from "../globals/Button";
import InputError from "../globals/InputError";
import { fetchUpdatePassword } from "../../../helpers/api/updateProfile/updatePassword";
import { useState } from "react"
import FeedBack from "../globals/FeedBack";
export default function ChangePassword() {
    const [loading, setLoading] = useState(false)
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
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    let [ShowFeedback, setShowFeedback] = useState(false);
    let [passwordInCorrect, setPasswordInCorrect] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true)
        setShowFeedback(false)
        await fetchUpdatePassword(data, setPasswordInCorrect, setShowFeedback);
        setLoading(false)
        reset()
    };

    return (
        <>
            {ShowFeedback && <FeedBack text={"رمز عبور شما با موفقیت به روز شد"} />}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-custom-2 text-base text-muted-0 font-medium">
                    تغییر پسورد
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-5 mt-4">
                    <div>
                        <InputPassword
                            error={errors.beforePassword?.message}
                            name='beforePassword'
                            register={register}
                            placeholder="رمز عبور قبلی" />
                        <InputError error={errors.beforePassword?.message} />
                        {passwordInCorrect && <InputError error={"رمز عبور قبلی اشتباه است"} />}
                    </div>

                    <div className="md:block hidden">
                    </div>

                    <div>
                        <InputPassword
                            error={errors.password?.message}
                            name='password'
                            register={register}
                            placeholder="رمز عبور جدید" />
                        <InputError error={errors.password?.message} />
                    </div>

                    <div>
                        <InputPassword
                            error={errors.rePassword?.message}
                            name='rePassword'
                            register={register}
                            placeholder="تکرار رمز عبور جدید" />
                        <InputError error={errors.rePassword?.message} />
                    </div>
                </div>

                <Button className={'mt-custom-3 mx-auto'} size="2xl" loading={loading}>
                    تایید
                </Button>
            </form>
        </>


    );
}