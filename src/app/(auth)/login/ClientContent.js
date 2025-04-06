"use client"

import LoginForm from '@/components/ui/auth/LoginForm';
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
        <div className={step !== 1 && 'hidden'}>
        <LoginForm next={next}/>
        </div>
        <div className={step !== 2 && 'hidden'}>
        <VerificationCode pre={pre} step={step}/>
        </div>
        </>
    );
}