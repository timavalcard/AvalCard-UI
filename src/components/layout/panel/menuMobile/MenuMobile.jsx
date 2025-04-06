import { useState } from 'react';
import styles from './MenuMobile.module.css';
import { FaAlignRight, FaEllipsis, FaHeadset, FaHouseUser, FaPhone } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Link from 'next/link';
import { useResponsive } from '@/context/ResponsiveProvider';

export default function MenuMobile ({showSidebar, setShowSidebar}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <div className='md:hidden'>
            <button className={` font-bold ${styles.menu__button} ${isOpen && styles.hidden}`} onClick={toggleMenu}>
                <div>
                    <FaAlignRight />
                </div>
                <div className='mr-2'>
                    منو
                </div>
            </button>

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
