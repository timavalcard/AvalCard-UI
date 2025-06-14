"use client";

import Form from "./Form";
import Alert from "@/components/ui/globals/alert/Alert";
import Review from "./Review";
import {useEffect,useState} from  "react";
import { useDispatch, useSelector } from "react-redux";



export default function ClientContent() {
    const auth = useSelector(state => state.auth);
    const [result,setResult]= useState(false);

    useEffect(()=>{
        if(auth.user){
            setResult(auth.user.authorize_status)
        }

    },[auth.user])
    return (
        <div className="md:pr-9">
            {
                !result &&
                <>
                    <ContentSection />
                </>
            }

            {
                result === 'decline' &&
                <>
                    <div className="mb-5 mt-5">
                        <Alert className="!text-lg" allowClose={true} type={'warning'} message={auth.user.authorize_decline_reason} />
                    </div>
                    <ContentSection />
                </>
            }
            {
                result === 'accept' &&
                <>
                    <div className="mb-5 mt-5">
                        <Alert className="!text-lg"  type={'success'} message={"حساب شما با موفقیت احراز هویت شده است."} />
                    </div>

                </>
            }
            {
                result === 'pending' &&
                <>
                    <Review />
                </>
            }
        </div>
    );
}

function ContentSection() {
    return (
        <>
            <div className="text-lg font-semibold mt-7 mb-5">
                احراز هویت کاربر
            </div>

            <div className="text-blue-custom text-lg font-semibold">
                به نکات زیر توجه کنید:
            </div>

            <ol className="list-decimal pr-4 pt-5 text-sm text-[#464646]">
                <li>نام و نام خانودگی خود را دقیقا مطابق با کارت ملی درج نمایید.</li>
                <li>در صورت عدم دسترسی به کارت ملی میتوانید از یکی از مدارک شناسایی جایگزین (کارت ملی قدیمی – شناسنامه جدید – گواهینامه جدید – کارت پایان خدمت جدید – پاسپورت) استفاده نمایید.</li>
                <li>کاربران زیر ۱۸ سال امکان احرازهویت ندارند.</li>
                <li>تصویر ارسالی باید از اصل مدرک شناسایی اخذ شود و دارای وضوح بالا و قاب بندی مناسب باشد. (تصاویر ادیت شده و اسکرین شات مورد پذیرش نیست)</li>
                <li>یک عکس سلفی به همراه در دست گرفتن کارت ملی به شکلی که کارت ملی واضح باشد آپلود کنید.</li>
            </ol>

            <Form />
        </>
    )
}
