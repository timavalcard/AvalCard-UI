"use client";

import { useEffect, useState } from "react";
import TitleWithBorder from "@/components/layout/TitleWithBorder";
import Input from "../../globals/Input";
import Button from "../../globals/Button";
import {applyCoupon} from "../../../../helpers/api/cart/applyCoupon";

const formatPrice = (price) => price.toLocaleString() + " تومان";

export default function DiscountedCode({ setCart, onRemoveDiscount, appliedCode, discountedCode }) {
    const [code, setCode] = useState("");
    const [codeIsValid, setCodeIsvalid] = useState(false);
    const [error, setError] = useState(null);

    const handleApply = async () => {
        if(!code) return;
        await applyCoupon(code,setError,setCart,setCodeIsvalid)
    };

    const handleRemove = () => {
        setCode("");
        setError("");

    };

    useEffect(() => {
        setError(null)
    }, [code])

    return (
        <div className="section mt-6">
            <TitleWithBorder>کد تخفیف</TitleWithBorder>
            {
                codeIsValid ? (
                    <div className="flex items-center justify-between p-3 bg-green-100 text-green-800 rounded-xl">
                        <span>کد تخفیف {code} اعمال شد. </span>
                        {/*<button onClick={handleRemove} className="text-red-500 hover:underline">حذف</button>*/}
                    </div>
                ) : (
                    <div className="flex gap-2 mt-2">
                        <div className="w-full">
                        <Input
                            error={error}
                            className="rounded-xl"
                            placeholder="کد تخفیف خود را وارد کنید"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        {error && (
                            <p className="text-red-500 text-xs mt-1">{error}</p>
                        )}
                        </div>
                        <Button className="rounded-xl !h-[3.025rem]" gradient="blue" onClick={handleApply}>
                            اعمال کد تخفیف
                        </Button>
                    </div>
                )
            }
        </div>
    );
}
