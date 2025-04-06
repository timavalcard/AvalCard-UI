"use client"

import { useState } from "react";

export default function Question({ ques, answer, number }) {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-between p-3.5 cursor-pointer !pb-0" onClick={() => setShow(!show)}>
                <div className="flex items-center md:text-lg text-sm gap-4">
                    <div className="w-10 h-10 flex justify-center items-center rounded-2xl bg-[linear-gradient(180deg,_#3F5AEF_22.4%,_#0F2CCA_100%)] text-white font-semibold">
                        {number < 10 && '0'}{number}
                    </div>
                    <div className="">
                        {ques}
                    </div>
                </div>

                <div>
                    <svg className={`md:size-7 size-5 transition-all duration-300 ${show ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.5 2.5L17.25 12.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.25 7.7124V13.7499H22.2875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <div className={`pr-16 pl-10 text-sm opacity-70 overflow-hidden transition-all duration-500 h-full leading-6 ${show ? 'max-h-96' : 'max-h-px'}`}>
                {answer}
            </div>
        </div>
    );
}