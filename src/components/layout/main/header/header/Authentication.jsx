"use client"

import Button from "@/components/ui/globals/Button";
import { useSelector } from "react-redux";

export default function Authentication({full}) {
    const auth = useSelector(state => state.auth);
    console.log("Auth State:", auth);
    return (
        <div>
            {!auth.user && <Button size={full ? 'full' : 'md'} href="/login" color="blue" className={'font-semibold !text-sm'} flex >
                <div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0802 9.08003V15.92C21.0802 17.04 20.4802 18.08 19.5102 18.65L13.5702 22.08C12.6002 22.64 11.4002 22.64 10.4202 22.08L4.48016 18.65C3.51016 18.09 2.91016 17.05 2.91016 15.92V9.08003C2.91016 7.96003 3.51016 6.91999 4.48016 6.34999L10.4202 2.92C11.3902 2.36 12.5902 2.36 13.5702 2.92L19.5102 6.34999C20.4802 6.91999 21.0802 7.95003 21.0802 9.08003Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.9999 11.5C13.2867 11.5 14.3299 10.4568 14.3299 9.16998C14.3299 7.88316 13.2867 6.84003 11.9999 6.84003C10.7131 6.84003 9.66992 7.88316 9.66992 9.16998C9.66992 10.4568 10.7131 11.5 11.9999 11.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 17.16C16 15.36 14.21 13.9 12 13.9C9.79 13.9 8 15.36 8 17.16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    ورود / ثبت نام
                </div>
            </Button>}
            {auth.user && <Button size={full ? 'full' : 'md'} href="/panel" color="blue" className={'font-semibold !text-sm'} flex >
                <div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0802 9.08003V15.92C21.0802 17.04 20.4802 18.08 19.5102 18.65L13.5702 22.08C12.6002 22.64 11.4002 22.64 10.4202 22.08L4.48016 18.65C3.51016 18.09 2.91016 17.05 2.91016 15.92V9.08003C2.91016 7.96003 3.51016 6.91999 4.48016 6.34999L10.4202 2.92C11.3902 2.36 12.5902 2.36 13.5702 2.92L19.5102 6.34999C20.4802 6.91999 21.0802 7.95003 21.0802 9.08003Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.9999 11.5C13.2867 11.5 14.3299 10.4568 14.3299 9.16998C14.3299 7.88316 13.2867 6.84003 11.9999 6.84003C10.7131 6.84003 9.66992 7.88316 9.66992 9.16998C9.66992 10.4568 10.7131 11.5 11.9999 11.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 17.16C16 15.36 14.21 13.9 12 13.9C9.79 13.9 8 15.36 8 17.16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                   حساب کاربری
                </div>
            </Button>}
        </div >
    );
}