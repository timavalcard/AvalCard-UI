import React, { useEffect, useState } from 'react';
import classes from './VerificationCodeInput.module.css'
const VerificationCodeInput = ({code,setCode, error}) => {
    const inputRefs = [];

    const handleChange = (e, index) => {

        const { value } = e.target;
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            console.log(newCode)
            if (index < 4 && value !== '') {
                inputRefs[index + 1].focus();
            }
        }
    };

    useEffect(() => {
        if (error) {
            inputRefs[0].focus()
        }
    }, [error])

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && code[index] === '' && index > 0) {
            inputRefs[index - 1].focus();
        }
    };

    const handlePaste = (e, index) => {
        const pastedValue = e.clipboardData.getData('text/plain');
        const regex = /^\d{6}$/; // الگوی 6 رقمی

        if (regex.test(pastedValue)) {
            const newCode = pastedValue.split('').slice(0, 6); // تقسیم مقدار پیست شده به رقم‌ها و انتخاب 6 رقم اول
            const newInputs = [...code];

            for (let i = index; i < index + 6 && i < 6; i++) {
                newInputs[i] = newCode[i - index];
            }
            console.log(newInputs)
            setCode(newInputs);
        }
    };


    return (
        <div className={classes.input_box} style={{direction:"ltr"}}>
            {code.map((digit, index) => (
                <input
                    key={index}
                    autoFocus={index===0}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder={'-'}
                    className={`h-[3.125rem] w-[3.125rem] focus:outline-greenLight transition border border-transparent rounded-[10px] text-dark placeholder-muted ${error && '!border-red-500 focus:outline-red-500 is-invalid'} ${classes} ${error && 'is-invalid'}`}
                    maxLength="1"
                    onPaste={(e) => handlePaste(e, index)}
                    defaultValue={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(input) => {
                        inputRefs[index] = input;
                    }}
                />
            ))}

        </div>
    );
};

export default VerificationCodeInput;
