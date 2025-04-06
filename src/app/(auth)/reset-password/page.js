import styles from '@/components/ui/auth/auth.module.css'

import ClientContent from './ClientContent'



export default function Login(){

    return(
        <>
        <div className={`${styles.boxLogin}`}>
            <ClientContent />
        </div>
        </>
    )
}