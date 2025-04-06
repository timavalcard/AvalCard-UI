"use client"

import { useState } from "react";

const items = [
    {
        title: "سفارش ها",
        icon: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.41024 6.94205H10.4102M3.83129 3.60872H16.9892C17.9581 3.60872 18.7436 4.35491 18.7436 5.27539V15.2754C18.7436 16.1959 17.9581 16.9421 16.9892 16.9421H3.83129C2.86237 16.9421 2.0769 16.1959 2.0769 15.2754V5.27539C2.0769 4.35491 2.86237 3.60872 3.83129 3.60872ZM7.16462 10.2754H13.6559C14.6248 10.2754 15.4102 11.0216 15.4102 11.9421C15.4102 12.8625 14.6248 13.6087 13.6559 13.6087H7.16462C6.1957 13.6087 5.41024 12.8625 5.41024 11.9421C5.41024 11.0216 6.1957 10.2754 7.16462 10.2754Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>       
    },
    {
        title: "فاکتورهای من",
        icon: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7454 3.60873H15.412C15.8541 3.60873 16.278 3.78432 16.5905 4.09688C16.9031 4.40945 17.0787 4.83337 17.0787 5.2754V16.9421C17.0787 17.3841 16.9031 17.808 16.5905 18.1206C16.278 18.4331 15.8541 18.6087 15.412 18.6087H5.41203C4.97 18.6087 4.54608 18.4331 4.23352 18.1206C3.92096 17.808 3.74536 17.3841 3.74536 16.9421V5.2754C3.74536 4.83337 3.92096 4.40945 4.23352 4.09688C4.54608 3.78432 4.97 3.60873 5.41203 3.60873H7.07869M7.91203 11.9421L9.57869 13.6087L12.912 10.2754M7.91203 1.94206H12.912C13.3723 1.94206 13.7454 2.31516 13.7454 2.7754V4.44206C13.7454 4.9023 13.3723 5.2754 12.912 5.2754H7.91203C7.45179 5.2754 7.07869 4.9023 7.07869 4.44206V2.7754C7.07869 2.31516 7.45179 1.94206 7.91203 1.94206Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        title: "پرداخت از طریق سایت",
        icon: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7455 1.94206L9.57886 11.1087M18.7455 1.94206L12.9122 18.6087L9.57886 11.1087M18.7455 1.94206L2.07886 7.7754L9.57886 11.1087" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
]


export default function Tabs() {

    const [active, setActive] = useState(0);

    return (
        <div className="custom-shadow-xs rounded-[10px] flex justify-around h-[86px] items-center mt-custom-4">
            {
                items.map((item, index) =>
                    <div className={`flex items-center align-middle gap-[10px] cursor-pointer rounded-[20px] h-[2.82rem] px-10 transition-all ${index === active ? 'bg-greenLight text-white' : 'text-muted-2' } `}
                    
                    onClick={() => setActive(index)}
                    >
                        <div>
                        {item.icon}
                        </div>
                        <div>
                            {item.title}
                        </div>
                    </div>
                )
            }
        </div>
    );
}