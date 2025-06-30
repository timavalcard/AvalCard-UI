"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/ui/globals/Input";
import Button from "@/components/ui/globals/Button";

const schema = yup.object().shape({
    fullName: yup.string().required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    unit: yup.string().required("واحد مربوطه الزامی است"),
    phone: yup
        .string()
        .required("شماره تماس الزامی است")
        .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست. با 09 شروع شده و 11 رقم باشد."),
    message: yup.string().required("متن پیام الزامی است"),
});

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log("فرم ارسال شد:", data);
    };

    return (
        <div className="xl:col-span-8 md:col-span-7 md:pt-4 order-2 md:order-1">
            <h2 className="text-xl font-bold mb-2">فرم مشاوره رایگان</h2>
            <p className="text-sm text-[#202020] mb-8">
                درباره هر کدام از خدمات ما مشاوره نیاز دارید؟! فرم زیر را پر کنید.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:pl-20">
                <Input
                    placeholder="نام و نام خانوادگی"
                    showError
                    {...register("fullName")}
                    error={errors.fullName?.message}
                />
                
                <Input
                    placeholder="واحد مربوطه"
                    {...register("unit")}
                    error={errors.unit?.message}
                    isSelect
                    showError
                >
                    <option value="" hidden>واحد مربوطه را انتخاب کنید</option>
                    <option value="marketing">بازاریابی</option>
                    <option value="support">پشتیبانی</option>
                    <option value="sales">فروش</option>
                </Input>

                <Input
                    placeholder="پست الکترونیکی"
                    {...register("email")}
                    showError
                    error={errors.email?.message}
                />


                <Input
                    placeholder="شماره تماس"
                    showError
                    {...register("phone")}
                    error={errors.phone?.message}
                />

                <div className="md:col-span-2">
                    <Input
                        placeholder="متن پیام شما"
                        rows="4"
                        isTextarea
                        textAreaClasses
                        showError
                        error={errors.message?.message}
                        {...register("message")}
                    />
                </div>

                <div className="md:col-span-2 flex justify-end">
                    <Button gradient={'blue'} size="lg" type="submit">ثبت و ارسال پیام</Button>
                </div>
            </form>
        </div>
    );
}
