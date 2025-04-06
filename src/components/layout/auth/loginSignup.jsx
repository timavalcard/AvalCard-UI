import styles from './loginSignup.module.css'
export default function LoginSignup() {

    return (
        <>
            <div className={`${styles.boxLogo} mx-auto mb-10`}>
                <div className={`grid justify-center items-center mb-2`}>
                    <img width={81} height={81} src="/images/logo.svg" alt="" />
                </div>
                <div>
                    <h1 className={`text-blue-custom text-[1.5rem] font-bold`}>ورود و ثبت نام در اول کارت</h1>
                </div>
            </div>
        </>
    )
}