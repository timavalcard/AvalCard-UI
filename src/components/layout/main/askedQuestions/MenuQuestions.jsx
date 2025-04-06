"use client"

import { useState } from "react";

const items = [
    {
        title: 'ثبت نام',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9604 21.3202C15.7704 21.3202 15.5804 21.2502 15.4304 21.1002L13.9104 19.5802C13.6204 19.2902 13.6204 18.8102 13.9104 18.5202C14.2004 18.2302 14.6804 18.2302 14.9704 18.5202L15.9604 19.5102L18.4704 17.0002C18.7604 16.7102 19.2404 16.7102 19.5304 17.0002C19.8204 17.2902 19.8204 17.7702 19.5304 18.0602L16.4904 21.1002C16.3404 21.2502 16.1504 21.3202 15.9604 21.3202Z" fill="#00CC99" />
                <path d="M12.1602 11.62C12.1302 11.62 12.1102 11.62 12.0802 11.62C12.0302 11.61 11.9602 11.61 11.9002 11.62C9.00019 11.53 6.8102 9.25 6.8102 6.44C6.8002 5.06 7.34019 3.76 8.32019 2.78C9.30019 1.8 10.6002 1.25 11.9902 1.25C14.8502 1.25 17.1802 3.58 17.1802 6.44C17.1802 9.25 14.9902 11.52 12.1902 11.62C12.1802 11.62 12.1702 11.62 12.1602 11.62ZM11.9902 2.75C11.0002 2.75 10.0802 3.14 9.3802 3.83C8.6902 4.53 8.3102 5.45 8.3102 6.43C8.3102 8.43 9.87019 10.05 11.8602 10.11C11.9202 10.1 12.0502 10.1 12.1802 10.11C14.1502 10.02 15.6802 8.41 15.6802 6.43C15.6802 4.41 14.0202 2.75 11.9902 2.75Z" fill="currentColor" />
                <path d="M11.9902 22.5602C9.95016 22.5602 8.02016 22.0302 6.56016 21.0502C5.17016 20.1202 4.41016 18.8502 4.41016 17.4802C4.41016 16.1102 5.18016 14.8502 6.56016 13.9302C9.55016 11.9302 14.4102 11.9302 17.4002 13.9302C17.7402 14.1602 17.8402 14.6302 17.6102 14.9702C17.3802 15.3202 16.9102 15.4102 16.5702 15.1802C14.0802 13.5202 9.88016 13.5202 7.39016 15.1802C6.43016 15.8202 5.91016 16.6302 5.91016 17.4802C5.91016 18.3302 6.43016 19.1602 7.39016 19.8002C8.60016 20.6102 10.2302 21.0502 11.9802 21.0502C12.3902 21.0502 12.7302 21.3902 12.7302 21.8002C12.7302 22.2102 12.4002 22.5602 11.9902 22.5602Z" fill="currentColor" />
            </svg>

        )

    },
    {
        title: 'ارتباط',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path opacity="0.4" d="M7 8H17" stroke="#00CC99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path opacity="0.4" d="M7 13H13" stroke="#00CC99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        title: 'خدمات',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4198C12.63 22.1898 11.36 22.1898 10.58 21.4198L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 9.15979C7 8.22979 7.76 7.46973 8.69 7.46973C9.62 7.46973 10.38 8.22979 10.38 9.15979C10.38 11.0398 7.71 11.2398 7.12 13.0298C7 13.3998 7.31 13.7698 7.7 13.7698H10.38" stroke="#00CC99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.0398 13.7599V8.04991C16.0398 7.78991 15.8698 7.55985 15.6198 7.48985C15.3698 7.41985 15.0998 7.51985 14.9598 7.73985C14.2398 8.89985 13.4598 10.2199 12.7798 11.3799C12.6698 11.5699 12.6698 11.8199 12.7798 12.0099C12.8898 12.1999 13.0998 12.3198 13.3298 12.3198H16.9998" stroke="#00CC99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        title: 'پیشنهادی',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z" stroke="#00CC99" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.43994 17.5L4.42993 18.49L6.55994 16.52" stroke="#00CC99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.5 10.5H15.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        title: 'همه',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 12C6.5 13.3807 5.38071 14.5 4 14.5C2.61929 14.5 1.5 13.3807 1.5 12C1.5 10.6193 2.61929 9.5 4 9.5C5.38071 9.5 6.5 10.6193 6.5 12ZM2.97389 12C2.97389 12.5667 3.4333 13.0261 4 13.0261C4.5667 13.0261 5.02611 12.5667 5.02611 12C5.02611 11.4333 4.5667 10.9739 4 10.9739C3.4333 10.9739 2.97389 11.4333 2.97389 12Z" fill="currentColor" />
                <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12ZM10.9739 12C10.9739 12.5667 11.4333 13.0261 12 13.0261C12.5667 13.0261 13.0261 12.5667 13.0261 12C13.0261 11.4333 12.5667 10.9739 12 10.9739C11.4333 10.9739 10.9739 11.4333 10.9739 12Z" fill="#00CC99" />
                <path d="M22.5 12C22.5 13.3807 21.3807 14.5 20 14.5C18.6193 14.5 17.5 13.3807 17.5 12C17.5 10.6193 18.6193 9.5 20 9.5C21.3807 9.5 22.5 10.6193 22.5 12ZM18.9739 12C18.9739 12.5667 19.4333 13.0261 20 13.0261C20.5667 13.0261 21.0261 12.5667 21.0261 12C21.0261 11.4333 20.5667 10.9739 20 10.9739C19.4333 10.9739 18.9739 11.4333 18.9739 12Z" fill="currentColor" />
            </svg>
        )
    }
]

export default function MenuQuestions({activeIndex, setActiveIndex}) {

    return (
        <>
        <div className="md:flex hidden gap-6 justify-center">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`w-[5.75rem] h-[5.75rem] grid items-center justify-center rounded-2xl text-sm cursor-pointer transition-all ${activeIndex === index ? "bg-blue-custom text-white" : "text-black"
                        }`}
                    onClick={() => setActiveIndex(index)}
                >
                    <div className="">
                        <div className="flex justify-center">{item.icon}</div>
                        <div className="mt-2">{item.title}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className="md:hidden flex gap-6 justify-center">
            {items.slice(1,4).map((item, index) => (
                <div
                    key={index}
                    className={`w-[5.75rem] h-[5.75rem] grid items-center justify-center rounded-2xl text-sm cursor-pointer transition-all ${activeIndex === index ? "bg-blue-custom text-white" : "text-black"
                        }`}
                    onClick={() => setActiveIndex(index)}
                >
                    <div className="">
                        <div className="flex justify-center">{item.icon}</div>
                        <div className="mt-2">{item.title}</div>
                    </div>
                </div>
            ))}
        </div>
        
        </>
    );
}