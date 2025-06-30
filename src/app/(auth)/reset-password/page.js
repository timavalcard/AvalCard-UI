import styles from '@/components/ui/auth/auth.module.css'

import ClientContent from './ClientContent'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'فراموشی کلمه عبور'
} 

export default function Login(){
    const token = cookies().get("token")?.value;

    // اگر توکن وجود نداشت، ریدایرکت کن
    if (token) {
        redirect("/panel");
    }
    return(
        <>
        <div className={`${styles.boxLogin}`}>
            <ClientContent />
        </div>
        </>
    )
}