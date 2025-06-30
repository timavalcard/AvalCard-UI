"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useState} from "react"
import Section from "@/components/layout/main/Section";
import Input from "../../globals/Input";
import Button from "../../globals/Button";
import InputError from "../../globals/InputError";
import {addFormEntrance} from "../../../../helpers/api/addFormEntrance";

const schema = yup.object().shape({
    name: yup.string().required("نام و نام خانوادگی الزامی است"),
    form_id: yup.string().required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    unit: yup.string().required("واحد مربوطه را انتخاب کنید"),
    phone: yup
    .string()
    .required("شماره تماس الزامی است")
    .matches(/^09\d{9}$/, "شماره تلفن باید با 09 شروع شده و 11 رقم باشد"),
    message: yup.string().required("متن پیام الزامی است"),
});

export default function Form() {

    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });
    let [ShowFeedback,setShowFeedback]=useState(false);
    const HideFeedback=()=>{
        setShowFeedback(false)
    }
    const onSubmit = async (data) => {
        setLoading(true)
        await addFormEntrance(data,setShowFeedback)
        reset();
        setLoading(false)
    };

    return (
        <div className="text-[#202020]">
            <h2 className="text-2xl font-bold mb-4">فرم تماس</h2>
            <p className="mb-4 text-sm">
                کاربران گرامی، برای پیگیری یا سوال درباره سفارش خود، فرم زیر را تکمیل کنید.
            </p>

            {ShowFeedback && (
                <div className="mt-4 rounded-2xl bg-green-100 border border-green-400 text-green-800 px-6 py-4 text-sm shadow-md transition-opacity duration-500">
                    <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        با تشکر از پیام شما، به زودی با شما تماس می‌گیریم.
                    </p>
                </div>
            )}


            <form onSubmit={handleSubmit(onSubmit)} className="gap-4 mt-7 grid grid-cols-2">
                <input type="hidden" {...register("form_id")} value="1"/>
                <div>
                    <Input
                        {...register("name")}
                        placeholder="نام و نام خانوادگی"
                        error={errors.name}
                    />
                    <InputError error={errors.name?.message} />
                </div>

                <div>
                    <Input
                        {...register("email")}
                        placeholder="پست الکترونیکی"
                        error={errors.email}
                    />
                    <InputError error={errors.email?.message} />
                </div>

                <div>

                    <Input
                        isSelect
                        placeholder="واحد مربوطه"
                        error={errors.unit}
                        {...register("unit")}>
                        <option value="" disabled hidden selected>واحد مربوطه را انتخاب کنید</option>
                        <option value="پشتیبانی">پشتیبانی</option>
                        <option value="فروش">فروش</option>
                    </Input>
                    <InputError error={errors.unit?.message} />
                </div>

                <div>
                    <Input
                        {...register("phone")}
                        placeholder="شماره تماس"
                        error={errors.phone}
                    />
                    <InputError error={errors.phone?.message} />
                </div>

                <div className="col-span-2">
                    <Input
                        isTextarea
                        textAreaClasses
                        {...register("message")}
                        rows={4}
                        placeholder="متن پیام شما"
                        error={errors.message}
                    />
                    <InputError error={errors.message?.message} />
                </div>

                <div className="flex justify-end col-span-2">
                <Button type='submit' gradient={'blue'} size="lg"
                loading={loading}
                >
                ثبت و ارسال پیام
                </Button>
                </div>

            </form>
        </div>
    );
}