import styles from '@/components/ui/auth/auth.module.css'

import ClientContent from './ClientContent'
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


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