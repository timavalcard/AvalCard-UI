"use client"

import ConfirmPassword from '@/components/ui/auth/confirmPassword/confirmPassword';
import ForgetPassword from '@/components/ui/auth/forgetPassword/forgetPassword';
import SignupForm from '@/components/ui/auth/signup/SignupForm'
import VerificationCode from '@/components/ui/auth/signup/VerificationCode'

import { useState } from 'react'

export default function ClientContent() {

    const [step, setStep] = useState(1);

    const next = () => {
        setStep(pre => pre+1)
    }

    const pre = () => {
        setStep(pre => pre-1)
    }

    return(
        <>
        <div className={step !== 1 ? 'hidden' : ''}>
        <ForgetPassword next={next}/>
        </div>
        <div className={step !== 2 ? 'hidden' : ''}>
        <ConfirmPassword pre={pre} step={step} />
        </div>
        </>
    );
}