'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useState} from "react"
import Button from "@/components/ui/globals/Button";
import Input from "@/components/ui/globals/Input";
import fetchAddComment from "../../../../../helpers/api/addComment";

const schema = yup.object().shape({
    name: yup.string().required("لطفاً نام و نام خانوادگی را وارد کنید"),
    email: yup.string().email("ایمیل وارد شده معتبر نیست").required("لطفاً ایمیل خود را وارد کنید"),
    text: yup.string().required("لطفاً متن پیام خود را وارد کنید"),
});

export default function AddCommentForm({article_id}) {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });
    let [ShowFeedback,setShowFeedback]=useState(false);
    const onSubmit = async (data) => {
        setLoading(true)
        await fetchAddComment(data,article_id)
        setShowFeedback(true)
        reset();
        setLoading(false)
    };

    return (
        <>
            {ShowFeedback && (
                <div className="mt-4 rounded-2xl bg-green-100 border border-green-400 text-green-800 px-6 py-4 text-sm shadow-md transition-opacity duration-500">
                    <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                       نظر شما ثبت شد پس از بررسی تایید و نمایش داده می شود.
                    </p>
                </div>
            )}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-4 mt-5"
            >

                <div className="col-span-2 sm:col-span-1">
                    <Input
                        error={errors.name}
                        placeholder="نام و نام خانوادگی"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="col-span-2 sm:col-span-1">
                    <Input
                        placeholder="پست الکترونیکی"
                        error={errors.email}
                        type="email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="col-span-2">
                    <Input
                        isTextarea
                        placeholder="متن پیام شما"
                        height="!h-auto"
                        textAreaClasses
                        error={errors.text}
                        rows={6}
                        {...register("text")}
                    />
                    {errors.text && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.text.message}
                        </p>
                    )}
                </div>

                <Button gradient={"blue"} loading={loading} className="col-span-2">
                    ارسال دیدگاه
                </Button>
            </form>


        </>

    );
}
