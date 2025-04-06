"use client"

import Input from "@/components/ui/globals/Input";
import SearchHistoryItem from "./SearchHistoryItem";
import ReSearchsItem from "./ReSearchsItem";
import { createPortal } from "react-dom";
import Overlay from "@/components/layout/Overlay";
import Image from "next/image";
import Authentication from "./Authentication";
import { menuMainMobile } from "@/constants/data";
import Link from "next/link";
import { useState } from "react";


const Item = ({ svg, value, children, className, href = false }) => {
    const [open, setOpen] = useState(false)
    const content = (
        <>
            <div className={`flex gap-2 text-[#55636F] transition-all items-center text-sm hover:text-blue-custom font-semibold ${className}`} onClick={() => setOpen(!open)}>
                <div>
                    {svg}
                </div>
                <div>
                    {value}
                </div>
                {
                    children &&
                    <div>
                        <svg width="13" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}>
                            <path d="M12.4238 6.59631L6.71192 1.40367L1.00001 6.59631" stroke="currentColor" stroke-width="2.07706" />
                        </svg>
                    </div>
                }
            </div>
            {
                children && open &&
                <div className="bg-[#F5F6F8] rounded-lg py-4 px-6 space-y-3 text-xs text-[#55636F] mt-3">
                    {
                        children.map(item => (
                            <Link href={item.href} className="block">
                                {item.value}
                            </Link>
                        ))
                    }
                </div>
            }
        </>
    )
    return (
        !href ?
            <div className="cursor-pointer">
                {content}
            </div>
            :
            <Link href={href} className="block">
                {content}
            </Link>

    );
}

export default function MenuMobile({ hidden, setHidden }) {
    return createPortal(
        <>
            <div className={`fixed grid h-screen !items-start top-0 w-64 bg-white z-50 transition-all px-6 py-8 ${!hidden ? 'right-0' : '-right-full'}`}>
                <div className="space-y-6">

                    <Image
                        src={'/images/logo-main.svg'}
                        width={153}
                        height={41}
                    />

                    <Authentication full />


                    <div className="mt-2.5 space-y-6">
                        {
                            menuMainMobile.map(item =>

                                <Item value={item.value} svg={item.svg} href={item.href} children={item.children} />
                            )
                        }
                    </div>
                </div>


                <div className="!mt-auto">
                    <Item className=" !text-blue-custom font-bold !text-base" svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="12" fill="#3664FF" fill-opacity="0.3" />
                        <g clip-path="url(#clip0_610_1397)">
                            <path d="M24.3845 13.5098C19.8218 13.2807 16.0312 17.1785 16.0312 22V24.25V27.75C16.0312 29.1863 17.0934 30.3452 18.4144 30.458C18.5218 32.4192 20.0263 34 21.8906 34H22.3658C22.58 34.3016 22.9158 34.5 23.2969 34.5H24.7031C25.3491 34.5 25.875 33.9395 25.875 33.25C25.875 32.5605 25.3491 32 24.7031 32H23.2969C22.9158 32 22.58 32.1984 22.3658 32.5H21.8906C20.8005 32.5 19.9482 31.6259 19.8279 30.5H20.9531C21.3414 30.5 21.6562 30.1642 21.6562 29.75V24.25C21.6562 23.8358 21.3414 23.5001 20.9531 23.5H17.4375V22C17.4375 18.0126 20.5357 14.8179 24.3177 15.0078C27.8401 15.1845 30.5625 18.43 30.5625 22.2188V23.5H27.0469C26.6586 23.5001 26.3438 23.8358 26.3438 24.25V29.75C26.3438 30.1642 26.6586 30.5 27.0469 30.5H29.3906C30.8061 30.5 31.9688 29.2599 31.9688 27.75V24.25V22.2188C31.9688 17.6615 28.6781 13.7251 24.3845 13.5098L24.3845 13.5098ZM17.4375 25H20.25V29H18.6094C17.954 29 17.4375 28.4491 17.4375 27.75V25ZM27.75 25H30.5625V27.75C30.5625 28.4491 30.046 29 29.3906 29H27.75V25Z" fill="#3F5AEF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_610_1397">
                                <rect width="22.5" height="24" fill="white" transform="translate(12.75 12)" />
                            </clipPath>
                        </defs>
                    </svg>
                    } value={'0۹۱۳-۵۸۷-۹۸۸۷'} href="tel:0۹۱۳۵۸۷۹۸۸۷" />
                </div>

            </div>

            {!hidden && <Overlay setClose={setHidden} />}
        </>
        , document.body)

} 