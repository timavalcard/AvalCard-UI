"use client"

import IconButton from "@/components/ui/globals/IconButton";
import Input from "@/components/ui/globals/Input";
import { useState } from "react";
import SearchContent from "./SearchContent";

export default function Search() {

    const [hidden, setHidden] = useState(true);

    return (
        <div className="w-full">
            <IconButton border className={'hidden md:flex'} onClick={() => setHidden(!hidden)}>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.625 16.25C12.56 16.25 15.75 13.06 15.75 9.125C15.75 5.18997 12.56 2 8.625 2C4.68997 2 1.5 5.18997 1.5 9.125C1.5 13.06 4.68997 16.25 8.625 16.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.5 17L15 15.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </IconButton>

            <SearchContent hidden={hidden} setHidden={setHidden} />

            <form action={'/search'} className="md:hidden w-full">
                <Input
                    name="q"
                    labelClassName="!text-[#00000080]"
                    boxClasses="!shadow-none"
                    placeholder="جستجو گیفت کارت، مقالات، خدمات "
                    className="border"
                    icon={
                        <button className="flex items-center" type="submit">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.625 16.25C12.56 16.25 15.75 13.06 15.75 9.125C15.75 5.18997 12.56 2 8.625 2C4.68997 2 1.5 5.18997 1.5 9.125C1.5 13.06 4.68997 16.25 8.625 16.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 17L15 15.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                    }
                />
            </form>

        </div>
    );
}