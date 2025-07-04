"use client"

import { useEffect, useRef, useState } from "react";
import InlineMenu from "../panel/inlineMenu/InlineMenu";
import Info from "./forms/Info";
import BankInfo from "./forms/BankInfo";
import Addresses from "./forms/Addresses";
import { useSearchParams } from "next/navigation";

const items = [
    {
        title: 'اطلاعات کاربری',
        id: 'info',
        icon: (
            <svg width="20" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.73438 9.28882L10.7344 12.2888L20.7344 2.28882M19.7344 10.2888V17.2888C19.7344 17.8193 19.5237 18.328 19.1486 18.703C18.7735 19.0781 18.2648 19.2888 17.7344 19.2888H3.73438C3.20394 19.2888 2.69523 19.0781 2.32016 18.703C1.94509 18.328 1.73438 17.8193 1.73438 17.2888V3.28882C1.73438 2.75839 1.94509 2.24968 2.32016 1.8746C2.69523 1.49953 3.20394 1.28882 3.73438 1.28882H14.7344" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    },
    {
        title: 'اطلاعات بانکی',
        id: 'bankInfo',
        icon: (
            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.73438 5.28882H11.7344M3.83964 1.28882H19.6291C20.7918 1.28882 21.7344 2.18425 21.7344 3.28882V15.2888C21.7344 16.3934 20.7918 17.2888 19.6291 17.2888H3.83964C2.67693 17.2888 1.73438 16.3934 1.73438 15.2888V3.28882C1.73438 2.18425 2.67693 1.28882 3.83964 1.28882ZM7.83964 9.28882H15.6291C16.7918 9.28882 17.7344 10.1842 17.7344 11.2888C17.7344 12.3934 16.7918 13.2888 15.6291 13.2888H7.83964C6.67693 13.2888 5.73438 12.3934 5.73438 11.2888C5.73438 10.1842 6.67693 9.28882 7.83964 9.28882Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
        )
    },
    {
        title: 'ادرس های حساب',
        id: 'addresses',
        icon: (
            <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.17843 14.776L3.92399 14.1096L3.91512 14.0997L3.906 14.09L3.17843 14.776ZM14.8216 14.776L14.094 14.09L14.0849 14.0997L14.076 14.1096L14.8216 14.776ZM9 21.2888L8.25444 21.9552L9 22.7893L9.74556 21.9552L9 21.2888ZM9 8.28882C8.44772 8.28882 8 8.73653 8 9.28882C8 9.8411 8.44772 10.2888 9 10.2888V8.28882ZM9.02 10.2888C9.57229 10.2888 10.02 9.8411 10.02 9.28882C10.02 8.73653 9.57229 8.28882 9.02 8.28882V10.2888ZM2 9.28882C2 5.42282 5.13401 2.28882 9 2.28882V0.288818C4.02944 0.288818 0 4.31826 0 9.28882H2ZM9 2.28882C12.866 2.28882 16 5.42282 16 9.28882H18C18 4.31826 13.9706 0.288818 9 0.288818V2.28882ZM3.906 14.09C2.72339 12.8358 2 11.1479 2 9.28882H0C0 11.678 0.932247 13.8515 2.45086 15.4621L3.906 14.09ZM16 9.28882C16 11.1479 15.2766 12.8358 14.094 14.09L15.5491 15.4621C17.0678 13.8515 18 11.678 18 9.28882H16ZM9.74556 21.9552L15.5671 15.4425L14.076 14.1096L8.25444 20.6224L9.74556 21.9552ZM9.74556 20.6224L3.92399 14.1096L2.43286 15.4425L8.25444 21.9552L9.74556 20.6224ZM9 10.2888H9.02V8.28882H9V10.2888ZM9 9.28882V11.2888C10.1046 11.2888 11 10.3934 11 9.28882H9ZM9 9.28882H7C7 10.3934 7.89543 11.2888 9 11.2888V9.28882ZM9 9.28882V7.28882C7.89543 7.28882 7 8.18425 7 9.28882H9ZM9 9.28882H11C11 8.18425 10.1046 7.28882 9 7.28882V9.28882Z" fill="currentColor" />
            </svg>
        )
    },
];
export default function EditInfo() {
    const [active, setActive] = useState(0);

    const refs = {
        info: useRef(null),
        bankInfo: useRef(null),
        addresses: useRef(null),
    };

    const searchParams = useSearchParams();
    const hash = searchParams.get('#') || ''; // چون useSearchParams فقط کوئری میگیره، هشتگ مستقیم نیست

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentHash = window.location.hash.replace('#', '');
            const index = items.findIndex(item => item.id === currentHash);

            if (index !== -1) {
                setActive(index);

                // اسکرول خیلی تمیز با تنظیم center
                setTimeout(() => {
                    refs[currentHash]?.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',  // دقیقا وسط صفحه قرار بگیره
                        inline: 'nearest',
                    });
                }, 100); // یک کوچولو دیلی برای اطمینان بعد از رندر
            }
        }
    }, []);

    return (
        <div className="mt-custom-4" id="settings">
            <InlineMenu
                items={items}
                itemClasses="!text-sm !font-extrabold"
                color="text-black"
                setActiveItem={setActive}
                activeDefault={active}
            />

            <div className={active === 0 ? 'FadeInAnimate' : 'hidden'} id="info" ref={refs.info}>
                <Info />
            </div>

            <div className={active === 1 ? 'FadeInAnimate' : 'hidden'} id="bankInfo" ref={refs.bankInfo}>
                <BankInfo />
            </div>

            <div className={active === 2 ? 'FadeInAnimate' : 'hidden'} id="addresses" ref={refs.addresses}>
                <Addresses />
            </div>
        </div>
    );
}