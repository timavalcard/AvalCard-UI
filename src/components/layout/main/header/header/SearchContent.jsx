"use client"

import Input from "@/components/ui/globals/Input";
import SearchHistoryItem from "./SearchHistoryItem";
import ReSearchsItem from "./ReSearchsItem";
import { createPortal } from "react-dom";
import Overlay from "@/components/layout/Overlay";
import { useEffect, useState } from "react";

export default function SearchContent({ hidden, setHidden, baseUrl='/search' }) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <>
            <form action={baseUrl} className={`fixed grid gap-6 md:w-full w-[calc(100%-8px)] max-w-2xl bg-white z-50 rounded-xl transition-all duration-300 shadow-xl md:left-0 left-1 md:right-0 right-1 mx-auto p-6 ${!hidden ? 'top-16' : '-top-full'}`}>

                <Input
                    labelClassName="!text-black"
                    placeholder="جستجو کنید..."
                    name="q"
                    icon={
                        <button className="flex items-center" type="submit">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.625 16.25C12.56 16.25 15.75 13.06 15.75 9.125C15.75 5.18997 12.56 2 8.625 2C4.68997 2 1.5 5.18997 1.5 9.125C1.5 13.06 4.68997 16.25 8.625 16.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 17L15 15.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                    }
                />

                {/*<div className="grid gap-6">
                    <SearchHistoryItem />
                    <SearchHistoryItem />
                </div>*/}

                <div>
                    <div className="font-semibold text-xs">
                        جستجو های پرطرفدار
                    </div>
                    <div className="mt-4 flex gap-4 items-center flex-wrap">
                        <ReSearchsItem url={`${baseUrl}?q=هوش مصنوعی`} q={"هوش مصنوعی"} />
                        <ReSearchsItem url={`${baseUrl}?q=پلی استیشن`} q={"پلی استیشن"} />
                        <ReSearchsItem url={`${baseUrl}?q=آمازون`} q={"آمازون"} />
                    </div>
                </div>

            </form>

            {!hidden && <Overlay setClose={setHidden} />}
        </>
        , document.body)

} 