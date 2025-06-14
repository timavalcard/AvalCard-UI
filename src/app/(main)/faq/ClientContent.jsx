
"use client"

import TitleBlue from '@/components/ui/globals/TitleBlue';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const categories = [
    {
        title: 'ثبت نام و ورود',
        ques: [
            ...Array(5).fill({
                question: 'شرایط ساخت اکانت پی‌پال به چه صورت است؟',
                answer: 'در ایران‌پی، امکان افتتاح اکانت پی‌پال پرسونال و پی‌پال بیزنسی با استفاده از پاسپورت ایران طی مدت ۳ الی ۵ روز کاری از کشورهای اروپایی (استونی، نروژ، فنلاند، سوئیس، دانمارک و گرجستان) وجود دارد.',
            }),
        ],
    },
    {
        title: 'حساب‌های بین المللی',
        ques: [
            ...Array(5).fill({
                question: 'شرایط ساخت اکانت پی‌پال به چه صورت است؟',
                answer: 'در ایران‌پی، امکان افتتاح اکانت پی‌پال پرسونال و پی‌پال بیزنسی با استفاده از پاسپورت ایران طی مدت ۳ الی ۵ روز کاری از کشورهای اروپایی (استونی، نروژ، فنلاند، سوئیس، دانمارک و گرجستان) وجود دارد.',
            }),
        ]
    },
    {
        title: 'نقد کردن درآمد',
        ques: [
            ...Array(5).fill({
                question: 'شرایط ساخت اکانت پی‌پال به چه صورت است؟',
                answer: 'در ایران‌پی، امکان افتتاح اکانت پی‌پال پرسونال و پی‌پال بیزنسی با استفاده از پاسپورت ایران طی مدت ۳ الی ۵ روز کاری از کشورهای اروپایی (استونی، نروژ، فنلاند، سوئیس، دانمارک و گرجستان) وجود دارد.',
            }),
        ]
    },
    {
        title: 'احراز هویت',
        ques: [
            ...Array(5).fill({
                question: 'شرایط ساخت اکانت پی‌پال به چه صورت است؟',
                answer: 'در ایران‌پی، امکان افتتاح اکانت پی‌پال پرسونال و پی‌پال بیزنسی با استفاده از پاسپورت ایران طی مدت ۳ الی ۵ روز کاری از کشورهای اروپایی (استونی، نروژ، فنلاند، سوئیس، دانمارک و گرجستان) وجود دارد.',
            }),
        ]
    },
    {
        title: 'عمومی',
        ques: [
            ...Array(5).fill({
                question: 'شرایط ساخت اکانت پی‌پال به چه صورت است؟',
                answer: 'در ایران‌پی، امکان افتتاح اکانت پی‌پال پرسونال و پی‌پال بیزنسی با استفاده از پاسپورت ایران طی مدت ۳ الی ۵ روز کاری از کشورهای اروپایی (استونی، نروژ، فنلاند، سوئیس، دانمارک و گرجستان) وجود دارد.',
            }),
        ]
    },
];

export default function ClientContent() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <>
            <div className="md:col-span-3 space-y-3 mt-8">
                {categories.map((cat, key) => (
                    <button
                        key={cat.title}
                        onClick={() => setActiveCategory(key)}
                        className={`w-full border rounded-lg py-3.5 text-base ${activeCategory === key
                            ? 'border-blue-500 text-blue-custom'
                            : 'border-[#BFBFBF] text-[#464646] hover:bg-gray-100'
                            }`}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            <div className={`md:col-span-9 ${activeCategory !== false && 'FadeInAnimate'}`} key={activeCategory}>

                <h2 className="text-xl font-semibold text-[#464646] mb-6">
                    {categories[activeCategory]['title']}
                </h2>

                {categories[activeCategory]['ques'].map((q, idx) => (
                    <div
                        key={idx}
                        className="border-b border-[#BFBFBF] bg-white"
                    >
                        <button
                            className="w-full flex justify-between items-center p-4 pr-0"
                            onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
                        >
                            <span className="text-base font-bold">{q.question}</span>
                            {openIndex === idx ? (
                                <FaAngleUp className="w-4 h-4" />
                            ) : (
                                <FaAngleDown className="w-4 h-4" />
                            )}
                        </button>

                        <div className={`${openIndex === idx && q.answer ? 'p-4 max-h-96' : 'max-h-0'} transition-all duration-300 overflow-hidden pt-0 text-sm leading-7 `}>
                            {q.answer}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
