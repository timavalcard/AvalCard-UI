import Image from 'next/image'
import styles from './loginSignup.module.css'
import Link from 'next/link';

export default function LoginSignup() {

    return (
        <>
            <div className={`${styles.boxLogo} mx-auto mb-10`}>
                <div className={`grid justify-center items-center mb-10`}>
                <Link href="/">
                    <img src={'/images/logo-main.png'} height={49} alt='اول کارت | احراز هویت' className="h-[48px] -mt-3 w-[215px]  object-cover" />
                </Link>
                </div>
                <div>
                    <h1 className={`text-blue-custom text-[1.5rem] font-bold`}>ورود و ثبت نام در اول کارت</h1>
                </div>
            </div>
        </>
    )
}