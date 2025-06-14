"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../globals/Button";
import Input from "../../globals/Input";
import { addFormEntrance } from "../../../../helpers/api/addFormEntrance";
import { useState } from "react"

const schema = yup.object().shape({
    fullname: yup.string().required("نام و نام خانوادگی الزامی است"),
    emailOrPhone: yup.string().required("شماره همراه یا ایمیل الزامی است"),
    message: yup.string().required("متن پیغام الزامی است"),
});

export default function GetFreeSupportForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });
    let [ShowFeedback, setShowFeedback] = useState(false);
    const HideFeedback = () => {
        setShowFeedback(false)
    }
    const onSubmit = async (data) => {

        await addFormEntrance(data, setShowFeedback)
        reset();
    };

    return (
        <>
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
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6 mt-6">
                <input type="hidden" {...register("form_id")} value="1" />
                <Input
                    boxClasses="!shadow-none border-0"
                    className="!bg-[#DEDFEA40] border-0 !shadow-none"
                    labelClassName="!text-black !mr-1.5"
                    placeholder="نام و نام خانوادگی"
                    iconRight={
                        <svg width="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5901 22.5C20.5901 18.63 16.7402 15.5 12.0002 15.5C7.26015 15.5 3.41016 18.63 3.41016 22.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    error={errors.fullname}
                    {...register("fullname")}
                />

                <Input
                    boxClasses="!shadow-none"
                    className="!bg-[#DEDFEA40] border-0 !shadow-none"
                    labelClassName="!text-black !mr-1.5"
                    type="text"
                    placeholder="شماره همراه یا ایمیل"
                    iconRight={
                        <svg width="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
                            <path d="M18.5 9.5C18.5 8.9 18.03 7.98 17.33 7.23C16.69 6.54 15.84 6 15 6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 9.5C22 5.63 18.87 2.5 15 2.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    error={errors.emailOrPhone}
                    {...register("emailOrPhone")}
                />

                <div className="md:col-span-2">
                    <Input
                        boxClasses="!shadow-none"
                        iconRight={
                            <svg width="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2603 4.09924L5.05034 12.7892C4.74034 13.1192 4.44034 13.7692 4.38034 14.2192L4.01034 17.4592C3.88034 18.6292 4.72034 19.4292 5.88034 19.2292L9.10034 18.6792C9.55034 18.5992 10.1803 18.2692 10.4903 17.9292L18.7003 9.23924C20.1203 7.73924 20.7603 6.02924 18.5503 3.93924C16.3503 1.86924 14.6803 2.59924 13.2603 4.09924Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.8896 5.55078C12.3196 8.31078 14.5596 10.4208 17.3396 10.7008" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 22.5H21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        className="!bg-[#DEDFEA40] border-0 !shadow-none"
                        isTextarea={true}
                        placeholder="متن پیغام"
                        rows={4}
                        height="!h-auto"
                        labelClassName="!top-6 !text-black !mr-2"
                        iconRightClassName="!top-3"
                        error={errors.message}
                        {...register("message")}
                    />
                </div>

                <div className="flex justify-center md:col-span-2 mt-2">
                    <Button type="submit" color="blue" size="auto" flex roundedFull>
                        <div>ثبت درخواست</div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white" />
                                <path d="M13.2599 16.2799C13.0699 16.2799 12.8799 16.2099 12.7299 16.0599L9.19992 12.5299C8.90992 12.2399 8.90992 11.7599 9.19992 11.4699L12.7299 7.93991C13.0199 7.64991 13.4999 7.64991 13.7899 7.93991C14.0799 8.22991 14.0799 8.70991 13.7899 8.99991L10.7899 11.9999L13.7899 14.9999C14.0799 15.2899 14.0799 15.7699 13.7899 16.0599C13.6499 16.2099 13.4599 16.2799 13.2599 16.2799Z" fill="white" />
                            </svg>
                        </div>
                    </Button>
                </div>
            </form>

        </>
    );
}
