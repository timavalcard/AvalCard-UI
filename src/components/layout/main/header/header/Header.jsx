"use client"

import { menuMain } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import Support from "./Support";
import Authentication from "./Authentication";
import UserIcon from "./UserIcon";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

export default function Header() {

    const [hidden, setHidden] = useState(true);

    return (
        <div className="bg-blue-light-custom  relative z-20">
            <div className="container">
                <div className="md:flex space-y-6 md:space-y-0 justify-between py-5 relative z-10">

                    <div className="flex gap-6 items-center md:justify-start justify-between">
                        <Link href={'/'} className="ml-2">
                            <Image src={'/images/logo-main.svg'} width={200} height={49} />
                        </Link>
                        <div className="gap-6 items-center hidden md:flex">

                            {
                                menuMain.map(item =>
                                    <Link href={item.href} className="flex gap-2 text-gray-custom font-semibold items-center">
                                        <div>
                                            {item.svg}
                                        </div>
                                        <div>
                                            {item.value}
                                        </div>
                                    </Link>
                                )
                            }

                        </div>

                        <div className="md:hidden cursor-pointer" onClick={() => setHidden(false)}>
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="23" fill="white" fill-opacity="0.5" />
                                <path d="M15 16.25H25" stroke="#4286F1" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M15 22.25H32" stroke="black" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M22 28.25L32 28.25" stroke="#4286F1" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </div>

                    </div>

                    <div className="flex gap-4">
                        <Search />
                        <Support />
                        <div className="md:block hidden w-full">
                            <Authentication />
                        </div>
                        <div className="md:hidden">
                            <UserIcon />
                        </div>
                    </div>
                </div>
            </div>
            <MenuMobile setHidden={setHidden} hidden={hidden} />
        </div>
    );
}