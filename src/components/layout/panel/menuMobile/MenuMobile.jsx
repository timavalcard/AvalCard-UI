import { useState } from 'react';
import styles from './MenuMobile.module.css';
import { FaAlignRight, FaEllipsis, FaHeadset, FaHouseUser, FaPhone } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchContent from '../../main/header/header/SearchContent';

export default function MenuMobile({ showSidebar, setShowSidebar }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const toggleMenu = () => setIsOpen(prev => !prev);
    

    const [hidden, setHidden] = useState(true);

    return (
        <div className='lg:hidden'>
            <div className={` font-bold ${styles.menu__button} ${isOpen && styles.hidden}`} >
                <div onClick={() => setShowSidebar(!showSidebar)} className='py-2 text-blue-custom'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <Link href={'/panel'} className={pathname === '/panel' ? 'py-2 bg-blue-custom px-7 rounded-full text-white' : 'text-blue-custom'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 17.1195L16 17.1195M10.849 3.3535L3.84901 8.13223C3.31672 8.49561 3 9.08754 3 9.71897V19.0598C3 20.1313 3.89543 21 5 21H19C20.1046 21 21 20.1313 21 19.0598V9.71897C21 9.08754 20.6833 8.49561 20.151 8.13223L13.151 3.3535C12.4606 2.88217 11.5394 2.88217 10.849 3.3535Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </Link>
                <div className={pathname.startsWith('/panel/search') ? 'py-2 bg-blue-custom px-7 rounded-full text-white cursor-pointer' : 'text-blue-custom cursor-pointer'} onClick={() => setHidden(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0004 21.0004L19.5 19.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <Link href={'/panel/tickets'} className={pathname.startsWith('/panel/tickets') ? 'py-2 bg-blue-custom px-7 rounded-full text-white' : 'text-blue-custom'}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 15V10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10V15M17.5 15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H15C14.558 17.5 14.134 17.3244 13.8215 17.0118C13.5089 16.6993 13.3333 16.2754 13.3333 15.8333V13.3333C13.3333 12.8913 13.5089 12.4674 13.8215 12.1548C14.134 11.8423 14.558 11.6667 15 11.6667H17.5V15.8333ZM2.5 15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H5C5.44203 17.5 5.86595 17.3244 6.17851 17.0118C6.49107 16.6993 6.66667 16.2754 6.66667 15.8333V13.3333C6.66667 12.8913 6.49107 12.4674 6.17851 12.1548C5.86595 11.8423 5.44203 11.6667 5 11.6667H2.5V15.8333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Link>
            </div>

            <SearchContent baseUrl='/panel/search' hidden={hidden} setHidden={setHidden} />

            <section className={`${!isOpen && styles.hidden} ${styles.menu__body}`}>
                <div>

                </div>
                <div className={styles.menu__header}>
                    <label>
                        <div></div>
                    </label>
                    <p>
                        منوی سریع
                    </p>
                    <button title="Close" onClick={toggleMenu}>
                        <FaXmark />
                    </button>
                </div>
                <nav className={styles.menu__links}>
                    <Link href="/">پیگیری سفارشات</Link>
                    <Link href="/">خرید کالا</Link>
                    <Link href="/">گیفت کارت ها</Link>
                    <button href="/" className=' mx-3 cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
                        <FaEllipsis />
                    </button>
                </nav>
                <div className={styles.menu__contact}>
                    <Link href="tel:09214808245" className='bg-gray-100 text-green-light border border-green-light'>
                        <div className={styles.svgBox}>
                            <FaPhone size={21} />
                        </div>
                        <span>0921-480-8245</span>
                    </Link>

                    <Link href="/" className='bg-gray-100 text-green-light border border-green-light'>
                        <div className={styles.svgBox}>
                            <FaHeadset size={20} />
                        </div>
                        <span>پشتیبانی انلاین</span>
                    </Link>

                    <Link href="/profile" className='bg-gray-100 text-green-light border border-green-light'>
                        <div className={styles.svgBox}>
                            <FaHouseUser size={20} />
                        </div>
                        <span>مدیریت حساب</span>
                    </Link>
                </div>
            </section>

            {isOpen && <div className={styles.menu__overlay} onClick={toggleMenu}></div>}
        </div>
    );
};
