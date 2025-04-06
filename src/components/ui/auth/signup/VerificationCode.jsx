// import { useState } from 'react';

"use client"

import { useEffect, useState } from "react";
import styles from '../auth.module.css'
import ImgFirstCard from '@/components/layout/auth/ImgFirstCard'
import ButtonAuth from '@/components/ui/globals/ButtonAuth'
import VerificationCodeInput from '@/components/ui/globals/VerificationCodeInput'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { register as registerAction } from "../../../../helpers/actions/authActions";

export default function VerificationCode({ step, pre,email,password }) {
    const dispatch = useDispatch();
    const [code, setCode] = useState(['', '', '', '', '']);
    const [codeErrors, setCodeErrors] = useState(false);
    const router = useRouter();

    const validationSchema = yup.object().shape({});

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const validate = () => {
        if (!code.includes("")) {
            setCodeErrors(false);
            return false;
        } else {
            setCodeErrors(true);
            return true;
        }
    };

    const onSubmit = (data) => {
        dispatch(registerAction(email, password, code.join(''), () => {
            router.push('/panel');
        }));
    };

    const [timeLeft, setTimeLeft] = useState(119);
    const [resendVisible, setResendVisible] = useState(false);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setResendVisible(true);
        }
    }, [timeLeft]);

    const handleResend = () => {
        setTimeLeft(119);
        setResendVisible(false);
    };

    useEffect(() => {
        handleResend();
        setCodeErrors(false)
    }, [step]);

    useEffect(() => {
        if (!code.includes("")) {
            handleSubmit(onSubmit)();
        }
    }, [code]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12">
                <div className="col-span-5 grid">
                    <div className={`${styles.boxLoginSignup}`}>
                        <div className={`${styles.loginSignup}`}>
                            <div className='flex items-center'>
                                <svg width="13" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8332 7.49349L1.1665 7.49349M12.8332 7.49349L6.99984 1.66016M12.8332 7.49349L6.99984 13.3268" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='mr-2 text-very-bold cursor-pointer' onClick={pre}>باز گشت به ثبت نام</p>
                            </div>
                            <div className='mt-8'>
                                <p className='text-very-bold'>کد تایید پیامک شده را وارد کنید:</p>
                            </div>
                            <div className='mt-4'>
                                <VerificationCodeInput error={codeErrors} setCode={setCode} code={code} />
                            </div>
                            <div className='flex justify-between mt-4'>
                                <div className='flex items-center cursor-pointer' onClick={pre}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.89723 1.65125C10.066 1.48247 10.2664 1.34859 10.4869 1.25725C10.7074 1.16591 10.9438 1.1189 11.1824 1.1189C11.4211 1.1189 11.6575 1.16591 11.878 1.25725C12.0985 1.34859 12.2989 1.48247 12.4677 1.65125C12.6364 1.82002 12.7703 2.02039 12.8616 2.24091C12.953 2.46142 13 2.69777 13 2.93646C13 3.17514 12.953 3.41149 12.8616 3.63201C12.7703 3.85252 12.6364 4.05289 12.4677 4.22166L3.57869 13.1191H1V10.5403L9.89723 1.65125Z" stroke="#3664FF" stroke-linejoin="round" />
                                        <path d="M11 9.1189L11.0934 9.37124C11.377 10.1377 11.9812 10.7419 12.7477 11.0255L13 11.1189L12.7477 11.2123C11.9812 11.4959 11.377 12.1001 11.0934 12.8666L11 13.1189L10.9066 12.8666C10.623 12.1001 10.0188 11.4959 9.25234 11.2123L9 11.1189L9.25234 11.0255C10.0188 10.7419 10.623 10.1377 10.9066 9.37124L11 9.1189Z" stroke="#3664FF" stroke-linejoin="round" />
                                    </svg>
                                    <p className='text-little-bold text-greenLight mr-[0.3125rem]'>ویرایش شماره موبایل</p>
                                </div>
                                <div className='flex items-center'>
                                    {resendVisible ? (
                                        <button className="bg-greenLight text-white rounded-[10px] !px-2 text-xs w-100 !py-1"
                                            onClick={handleResend}>
                                            ارسال مجدد
                                        </button>
                                    ) : (
                                        <>
                                            <div>
                                                <svg width="18" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.90381 7.15239L10.2705 5.78573M14.6043 8.11906C14.6043 11.801 11.6196 14.7857 7.93766 14.7857C4.25576 14.7857 1.271 11.801 1.271 8.11906C1.271 4.43716 4.25576 1.45239 7.93766 1.45239C11.6196 1.45239 14.6043 4.43716 14.6043 8.11906ZM6.60433 8.11906C6.60433 8.47268 6.74481 8.81182 6.99485 9.06187C7.2449 9.31192 7.58404 9.45239 7.93766 9.45239C8.29128 9.45239 8.63042 9.31192 8.88047 9.06187C9.13052 8.81182 9.271 8.47268 9.271 8.11906C9.271 7.76544 9.13052 7.4263 8.88047 7.17625C8.63042 6.9262 8.29128 6.78573 7.93766 6.78573C7.58404 6.78573 7.2449 6.9262 6.99485 7.17625C6.74481 7.4263 6.60433 7.76544 6.60433 8.11906Z" stroke="#3664FF" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p className='text-little-bold text-greenLight mr-[0.2125rem]'>{timeLeft} ثانیه باقی مانده</p>
                                        </>
                                    )}
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-5 items-start'>
                                <div className="mt-[1px]">
                                    <svg width="11" height="15" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="5.25619" cy="11" rx="4.74398" ry="5" fill="#EFC83F" />
                                    </svg>
                                </div>

                                <div className='mr-1'>
                                    <p className='text-very-bold text-muted-dark leading-[1.8]'>برای استفاده از اول کارت شماره تلفن همراه وارد شده باید به نام
                                        خود شما باشد.
                                    </p>
                                </div>
                            </div>
                            <ButtonAuth text='تایید'
                                classes='bg-blue-custom py-3 text-[#FFFFFF] Largest-text-little-bold mt-5' />
                        </div>
                    </div>
                </div>
                <div className="col-span-7">
                    <ImgFirstCard classes={``} />
                </div>
            </div>
        </form>
    )
}