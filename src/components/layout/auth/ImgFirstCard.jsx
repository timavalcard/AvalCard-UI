import ButtonAuth from '@/components/ui/globals/ButtonAuth'
import styles from './ImgFirstCard.module.css'

export default function ImgFirstCard({classes}) {

    return (
        <div className={`${styles.boxImg} grid justify-center ${classes}`}>
            <div>
                <img className='h-[35vh]' src="./loginSignup/cashMoney.svg" alt="" />
                <div className='mt-4 text-center'>
                    <p className='text-[1.25rem] font-extrabold text-[#FFFFFF]'>اولین و شیرین ترین عیدی امسالتو از</p>
                    <p className='text-[2.25rem] font-black text-[#FBFF00]'>اول کارت</p>
                    <p className='text-[2rem] font-bold text-[#FFFFFF]'>بگیر!!</p>
                    <p className='text-[1rem] font-bold text-[#F3F3F3] mt-[0.75rem]'>با ثبت نام در اول کارت برنده جایزه 5 ملیون ریالی شوید!</p>
                    <ButtonAuth text='جزئیات بیشتر'
                        classes={`bg-[#FFFFFF] hover:bg-blue-custom transition-all hover:text-white py-3 text-[#464646] !w-[200px] mt-10 font-bold text-base`}
                    />
                </div>
            </div>
            <img className={`${styles.imgDots}`} src="./loginSignup/dots.svg" alt="" />
            <img className={`${styles.imgDotsBottom}`} src="./loginSignup/dots.svg" alt="" />
            <div className={` ${styles.boxContactUs}`}>
                <div className={`${styles.contactUs}`}>
                    <div>
                        <div className='grid justify-center'>
                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.6665 13.0608V9.93581C1.6665 7.72567 2.54448 5.60606 4.10728 4.04325C5.67008 2.48045 7.7897 1.60248 9.99984 1.60248C12.21 1.60248 14.3296 2.48045 15.8924 4.04325C17.4552 5.60606 18.3332 7.72567 18.3332 9.93581V13.0608M1.6665 13.0608C1.6665 12.5083 1.886 11.9784 2.2767 11.5877C2.6674 11.197 3.1973 10.9775 3.74984 10.9775H4.7915C5.34404 10.9775 5.87394 11.197 6.26464 11.5877C6.65534 11.9784 6.87484 12.5083 6.87484 13.0608V16.1858C6.87484 16.7383 6.65534 17.2682 6.26464 17.6589C5.87394 18.0497 5.34404 18.2691 4.7915 18.2691H3.74984C3.1973 18.2691 2.6674 18.0497 2.2767 17.6589C1.886 17.2682 1.6665 16.7383 1.6665 16.1858V13.0608ZM18.3332 13.0608C18.3332 12.5083 18.1137 11.9784 17.723 11.5877C17.3323 11.197 16.8024 10.9775 16.2498 10.9775H15.2082C14.6556 10.9775 14.1257 11.197 13.735 11.5877C13.3443 11.9784 13.1248 12.5083 13.1248 13.0608V16.1858C13.1248 16.7383 13.3443 17.2682 13.735 17.6589C14.1257 18.0497 14.6556 18.2691 15.2082 18.2691H16.2498M18.3332 13.0608V16.1858C18.3332 16.7383 18.1137 17.2682 17.723 17.6589C17.3323 18.0497 16.8024 18.2691 16.2498 18.2691M16.2498 18.2691C16.2498 19.9952 13.4519 21.3941 9.99984 21.3941" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className={`text-[#FFFFFF] font-black text-[0.625rem] text-center`}>پشتیبانی انلاین</p>
                    </div>
                </div>
            </div>
        </div>
    )
}