"use client";

import { useEffect, useState } from "react";
import TitleWithBorder from "@/components/layout/TitleWithBorder";
import Input from "../globals/Input";
import Button from "../globals/Button";
import {applyCouponOnOrder} from "../../../helpers/api/applyCouponOnOrder";

const formatPrice = (price) => price.toLocaleString() + " تومان";

export default function DiscountedCodeOnOrder({ coupon,coupon_discount,setOrder,order_id }) {
    const [code, setCode] = useState("");
    const [codeIsValid, setCodeIsvalid] = useState(false);
    const [error, setError] = useState(null);

    const handleApply = async () => {
        if(!code) return;
        await applyCouponOnOrder(code,order_id,setError,setOrder,setCodeIsvalid)
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
                coupon_discount ? (
                    <div className="flex items-center justify-between p-3 bg-green-100 text-green-800 rounded-xl">
                        <span>کد تخفیف {coupon} اعمال شده است. </span>
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
