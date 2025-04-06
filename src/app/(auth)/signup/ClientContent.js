"use client"

import SignupForm from '@/components/ui/auth/signup/SignupForm'
import VerificationCode from '@/components/ui/auth/signup/VerificationCode'

import { useState } from 'react'

export default function ClientContent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        <SignupForm setEmail={setEmail} setPassword={setPassword} next={next}/>
        </div>
        <div className={step !== 2 ? 'hidden' : ''}>
        <VerificationCode email={email} password={password} pre={pre} step={step} />
        </div>
        </>
    );
}