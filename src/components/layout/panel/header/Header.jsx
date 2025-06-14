import Link from 'next/link'
import styles from './Header.module.css'
import ProfileBox from '@/components/layout/profileBox/ProfileBox'
import CartBox from '@/components/layout/cartBox/CartBox'
import IconButton from '@/components/ui/globals/IconButton'
import Image from 'next/image'

export default function Header() {

    return (
        <>
            <header className={`lg:flex justify-between w-full hidden`}>
                <form action={'/panel/search'} className={`md:flex justify-between items-center hidden pr-4 py-3 ${styles.inpBox}`}>
                    <div className={`flex items-center justify-center ${styles.inpBoxContent}`}>
                        <button className="flex items-center" type="submit">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.625 16.25C12.56 16.25 15.75 13.06 15.75 9.125C15.75 5.18997 12.56 2 8.625 2C4.68997 2 1.5 5.18997 1.5 9.125C1.5 13.06 4.68997 16.25 8.625 16.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.5 17L15 15.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <input className={`mr-2 !w-full`} type="text" name='q' id={'search'} placeholder={' '} />
                        <label htmlFor="search">
                            جستجو در
                            <span className={'text-blue-custom'}> اول کارت </span>
                        </label>
                    </div>
                </form>
                <div className={`flex md:justify-end justify-between w-full md:w-auto`}>
                    <ProfileBox />
                    <Link href={'/panel/wallet'} className={`ml-4 flex justify-between text-xs items-center !text-white rounded-2lg bg-green-light hover:bg-blue-700 px-3 py-3 gap-4`}>
                        <div className="flex gap-1 items-center w-100 flex-nowrap ">
                            <div>
                                <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.53279 4.51143L3.37645 4.0365H3.37645L3.53279 4.51143ZM10.8661 2.09739L11.0225 2.57232V2.57232L10.8661 2.09739ZM11.6211 8.92018C11.345 8.92018 11.1211 9.14404 11.1211 9.42018C11.1211 9.69632 11.345 9.92018 11.6211 9.92018V8.92018ZM11.6278 9.92018C11.9039 9.92018 12.1278 9.69632 12.1278 9.42018C12.1278 9.14404 11.9039 8.92018 11.6278 8.92018V9.92018ZM13.2878 13.5288H3.95443V14.5288H13.2878V13.5288ZM3.12109 12.7121V8.10343H2.12109V12.7121H3.12109ZM3.12109 8.10343V6.1283H2.12109V8.10343H3.12109ZM3.95443 13.5288C3.48827 13.5288 3.12109 13.1573 3.12109 12.7121H2.12109C2.12109 13.7213 2.94782 14.5288 3.95443 14.5288V13.5288ZM3.95443 4.31155C2.94782 4.31155 2.12109 5.11906 2.12109 6.1283H3.12109C3.12109 5.68311 3.48827 5.31155 3.95443 5.31155V4.31155ZM13.2878 14.5288C14.2944 14.5288 15.1211 13.7213 15.1211 12.7121H14.1211C14.1211 13.1573 13.7539 13.5288 13.2878 13.5288V14.5288ZM15.1211 6.1283C15.1211 5.11906 14.2944 4.31155 13.2878 4.31155V5.31155C13.7539 5.31155 14.1211 5.68311 14.1211 6.1283H15.1211ZM12.1211 3.34657V4.54254H13.1211V3.34657H12.1211ZM3.12109 8.10343V5.76061H2.12109V8.10343H3.12109ZM3.68913 4.98636L11.0225 2.57232L10.7098 1.62246L3.37645 4.0365L3.68913 4.98636ZM3.12109 5.76061C3.12109 5.41309 3.34655 5.09913 3.68913 4.98636L3.37645 4.0365C2.63011 4.28219 2.12109 4.97459 2.12109 5.76061H3.12109ZM13.1211 3.34657C13.1211 2.09848 11.8881 1.23456 10.7098 1.62246L11.0225 2.57232C11.5709 2.39179 12.1211 2.79714 12.1211 3.34657H13.1211ZM11.6211 9.92018H11.6278V8.92018H11.6211V9.92018ZM11.4544 9.42018C11.4544 9.31996 11.535 9.24937 11.6211 9.24937V10.2494C12.0754 10.2494 12.4544 9.88401 12.4544 9.42018H11.4544ZM11.6211 9.24937C11.7072 9.24937 11.7878 9.31996 11.7878 9.42018H10.7878C10.7878 9.88401 11.1668 10.2494 11.6211 10.2494V9.24937ZM11.7878 9.42018C11.7878 9.5204 11.7072 9.59099 11.6211 9.59099V8.59099C11.1668 8.59099 10.7878 8.95635 10.7878 9.42018H11.7878ZM11.6211 9.59099C11.535 9.59099 11.4544 9.5204 11.4544 9.42018H12.4544C12.4544 8.95635 12.0754 8.59099 11.6211 8.59099V9.59099ZM15.1211 12.7121V6.1283H14.1211V12.7121H15.1211ZM13.2878 4.31155H3.95443V5.31155H13.2878V4.31155Z" fill="white" />
                                </svg>
                            </div>
                        </div>

                    </Link>
                    <CartBox />
                </div>
            </header>

            <div className='lg:hidden flex justify-between'>
                <Link href={'/panel'} className>
                <img src={'/images/logo-main.png'} height={49} alt='اول کارت' className="h-[48px] -mt-3 w-[200px]  object-cover" />
                </Link>

                <div className='flex gap-4 items-center'>
                    <Link href={'/panel/cart'}>
                        <IconButton border>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 8H21" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </IconButton>
                    </Link>
                    <Link href={'/panel/wallet'} className={` flex justify-center  text-xs items-center !text-white rounded-2lg bg-green-light hover:bg-blue-700  gap-4 w-12 min-w-12 h-[3.125rem]`}>
                        <div className="flex gap-1 items-center w-100 flex-nowrap ">
                            <div>
                                <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.53279 4.51143L3.37645 4.0365H3.37645L3.53279 4.51143ZM10.8661 2.09739L11.0225 2.57232V2.57232L10.8661 2.09739ZM11.6211 8.92018C11.345 8.92018 11.1211 9.14404 11.1211 9.42018C11.1211 9.69632 11.345 9.92018 11.6211 9.92018V8.92018ZM11.6278 9.92018C11.9039 9.92018 12.1278 9.69632 12.1278 9.42018C12.1278 9.14404 11.9039 8.92018 11.6278 8.92018V9.92018ZM13.2878 13.5288H3.95443V14.5288H13.2878V13.5288ZM3.12109 12.7121V8.10343H2.12109V12.7121H3.12109ZM3.12109 8.10343V6.1283H2.12109V8.10343H3.12109ZM3.95443 13.5288C3.48827 13.5288 3.12109 13.1573 3.12109 12.7121H2.12109C2.12109 13.7213 2.94782 14.5288 3.95443 14.5288V13.5288ZM3.95443 4.31155C2.94782 4.31155 2.12109 5.11906 2.12109 6.1283H3.12109C3.12109 5.68311 3.48827 5.31155 3.95443 5.31155V4.31155ZM13.2878 14.5288C14.2944 14.5288 15.1211 13.7213 15.1211 12.7121H14.1211C14.1211 13.1573 13.7539 13.5288 13.2878 13.5288V14.5288ZM15.1211 6.1283C15.1211 5.11906 14.2944 4.31155 13.2878 4.31155V5.31155C13.7539 5.31155 14.1211 5.68311 14.1211 6.1283H15.1211ZM12.1211 3.34657V4.54254H13.1211V3.34657H12.1211ZM3.12109 8.10343V5.76061H2.12109V8.10343H3.12109ZM3.68913 4.98636L11.0225 2.57232L10.7098 1.62246L3.37645 4.0365L3.68913 4.98636ZM3.12109 5.76061C3.12109 5.41309 3.34655 5.09913 3.68913 4.98636L3.37645 4.0365C2.63011 4.28219 2.12109 4.97459 2.12109 5.76061H3.12109ZM13.1211 3.34657C13.1211 2.09848 11.8881 1.23456 10.7098 1.62246L11.0225 2.57232C11.5709 2.39179 12.1211 2.79714 12.1211 3.34657H13.1211ZM11.6211 9.92018H11.6278V8.92018H11.6211V9.92018ZM11.4544 9.42018C11.4544 9.31996 11.535 9.24937 11.6211 9.24937V10.2494C12.0754 10.2494 12.4544 9.88401 12.4544 9.42018H11.4544ZM11.6211 9.24937C11.7072 9.24937 11.7878 9.31996 11.7878 9.42018H10.7878C10.7878 9.88401 11.1668 10.2494 11.6211 10.2494V9.24937ZM11.7878 9.42018C11.7878 9.5204 11.7072 9.59099 11.6211 9.59099V8.59099C11.1668 8.59099 10.7878 8.95635 10.7878 9.42018H11.7878ZM11.6211 9.59099C11.535 9.59099 11.4544 9.5204 11.4544 9.42018H12.4544C12.4544 8.95635 12.0754 8.59099 11.6211 8.59099V9.59099ZM15.1211 12.7121V6.1283H14.1211V12.7121H15.1211ZM13.2878 4.31155H3.95443V5.31155H13.2878V4.31155Z" fill="white" />
                                </svg>
                            </div>
                        </div>

                    </Link>
                    <ProfileBox />
                </div>
            </div>
        </>
    )
}