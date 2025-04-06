import Link from 'next/link'
import styles from './Header.module.css'
import ProfileBox from '@/components/layout/profileBox/ProfileBox'
import CartBox from '@/components/layout/cartBox/CartBox'

export default function Header() {

    return (
        <header className={`flex justify-between w-full`}>
            <div className={`flex justify-between items-center px-4 py-3 ${styles.inpBox}`}>
                <div className={`flex items-center justify-center ${styles.inpBoxContent}`}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.58329 17.9412C13.9555 17.9412 17.5 14.3968 17.5 10.0245C17.5 5.65225 13.9555 2.10784 9.58329 2.10784C5.21104 2.10784 1.66663 5.65225 1.66663 10.0245C1.66663 14.3968 5.21104 17.9412 9.58329 17.9412Z"
                            stroke="#464646" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 18.7745L16.6666 17.1078" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input className={`mr-2`} type="text" id={'search'} placeholder={' '}/>
                    <label htmlFor="search">
                        جستجو در
                        <span className={'text-blue-custom'}> اول کارت </span>
                    </label>
                </div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.163086" y1="4.29536" x2="16.8373" y2="4.29536" stroke="#464646" stroke-width="1.5" />
                    <line x1="0.163086" y1="13.0871" x2="16.8374" y2="13.087" stroke="#464646" stroke-width="1.5" />
                    <circle cx="6.83325" cy="12.8371" r="2.75" fill="white" stroke="#464646" />
                    <circle cx="11.3333" cy="4.04536" r="2.75" fill="white" stroke="#464646" />
                </svg>

            </div>
            <div className={`flex`}>
                <ProfileBox />
                <CartBox />
            </div>
        </header>
    )
}