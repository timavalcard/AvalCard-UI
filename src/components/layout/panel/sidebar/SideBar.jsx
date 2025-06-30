"use client"

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './SideBar.module.css';

import { FaAngleDown, FaXmark } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import Image from 'next/image';
import MenuMobile from '../menuMobile/MenuMobile';
import { useResponsive } from '@/context/ResponsiveProvider';
import { fetchCategoriesWithProducts } from "../../../../helpers/api/categories-with-products"
import { useSelector } from 'react-redux';


function SidebarLink({ href,count, label, icon, children = false, collapsed, classes, onCloseSidebar }) {

    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const isActive = pathname === href;
    const baseClasses = `flex ${collapsed ? 'lg:justify-center' : 'justify-between px-3.5'} transition-all items-center overflow-hidden rounded-[20px] py-4`;
    const activeClasses = isActive ? 'bg-blue-custom-gradient !text-white' : 'text-[#464646]';
    const linkClasses = `${baseClasses} ${activeClasses} ${classes}`;



    const Content = () => {
        return (
            <>
                <div className="flex items-center gap-2">
                    <div>{icon}</div>
                    <div className={`text-base font-medium text-nowrap ${collapsed && 'lg:hidden'}`}>
                        {label}
                    </div>
                    {count > 0 && !collapsed && (
                        <span style={{display:"inline-block",textAlign:"center",lineHeight:"23px"}} className="ml-2 min-w-[20px] h-[20px] px-1 text-[12px] rounded-full bg-[#3664FF] text-white flex items-center justify-center">
                        {count}
                    </span>
                    )}
                </div>
                {children && (
                    <div className={`${collapsed && 'lg:hidden'} transition-all duration-500 rotate-0 ${isOpen && 'rotate-180'}`}>
                        <FaAngleDown />
                    </div>
                )}
            </>
        );
    }


    return (
        children ?
            <div>
                <div className={`cursor-pointer ${linkClasses}`} onClick={() => setIsOpen(!isOpen)}>
                    <Content />
                </div>

                <div className={`max-h-[.1px] ${(isOpen && !collapsed) && '!max-h-56  py-1'} transition-all duration-300 text-sm overflow-hidden pr-11 grid gap-1.5`} onClick={() => setIsOpen(false)}>
                    {
                        children.map(item =>
                            <Link href={item.href} onClick={onCloseSidebar}>
                                {item.title}
                            </Link>
                        )
                    }
                </div>

            </div>
            :
            <>
                <Link href={href} className={linkClasses} onClick={onCloseSidebar}>
                    <Content />
                </Link>
            </>
    );
}

export default function Sidebar() {
    const [giftCategories, setGiftCategories] = useState([]);
    const [buyProductCategories, setBuyProductCategories] = useState([]);
    const [interPaymentCategories, setInterPaymentCategories] = useState([]);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        const getData = async () => {
            const result = await fetchCategoriesWithProducts("gift_cart");
            setGiftCategories(result || []);

        };
        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const result = await fetchCategoriesWithProducts("buy_product");
            setBuyProductCategories(result || []);

        };
        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const result = await fetchCategoriesWithProducts("inter_payment");
            setInterPaymentCategories(result || []);

        };
        getData();
    }, []);




    const [collapsed, setCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);


    const onCloseSidebar = () => {
        setShowSidebar(false)
    }

    useEffect(() => {
        if (showSidebar) {
            setCollapsed(false)
        }
    }, [showSidebar])




    return (
        <>
            <div className={`${styles.sidebar} ${collapsed ? 'max-w-[120px]' : "max-w-[340px]"} w-full transition-all duration-300 xl:px-6 px-3 pt-8 pb-[35px] h-max translate-x-0 ${!showSidebar && styles.hidden}`}>

                <div className={`justify-between items-center ${!collapsed && 'lg:pl-3.5'} flex`}>
                    <Link href={'/panel'} className={`${collapsed ? 'lg:hidden' : 'flex'} items-center`} onClick={onCloseSidebar}>
                        <div>
                        <Image width={50} height={50} src="/images/logo-sm.png" alt="اول کارت" className='object-cover h-[70px] w-[70px]' />
                        </div>

                        <div className="mr-2">
                            <h2 className="font-bold text-green-light Large-text-very-bold">اول کارت</h2>
                            <p className="text-[#7E7E7E] text-[0.625rem] mt-1 text-nowrap">اتصال به شبکه پرداخت جهانی</p>
                        </div>
                    </Link>

                    <div onClick={() => setCollapsed(!collapsed)} className={`cursor-pointer transition-all h-[50px] hidden lg:flex items-center justify-center text-[#464646] ${collapsed && 'mx-auto'}`}>
                        <svg className="d-none d-lg-block style_sideBarButton__VXG_y style_open__Tz3CV" width="21" height="21" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19.5 2A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15zM10 4H6a2 2 0 0 0-2 2h0v12a2 2 0 0 0 2 2h0 4a2 2 0 0 0 2-2h0V6a2 2 0 0 0-2-2h0z"></path>
                        </svg>
                    </div>

                    <div onClick={() => setShowSidebar(!showSidebar)} className={`cursor-pointer transition-all lg:hidden text-[#464646] `}>
                        <FaXmark size={20} />
                    </div>

                </div>
                <hr className="my-4" />
                <div>
                    <p className={`font-color-title-sidebar mb-1 font-normal ${collapsed && 'lg:text-center'} `}>منوی اصلی</p>

                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel"
                        label="داشبورد"
                        icon={
                            <svg width="22" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7086 15.9853H3.41695C2.26636 15.9853 1.33362 15.0526 1.33362 13.902V3.4853C1.33362 2.3347 2.26636 1.40196 3.41695 1.40196H20.0836C21.2342 1.40196 22.167 2.3347 22.167 3.4853V6.6103H1.33362M14.8753 15.9853L19.6471 11.2134C20.2224 10.6381 21.1552 10.6381 21.7305 11.2134C22.3058 11.7887 22.3058 12.7215 21.7305 13.2968L16.9586 18.0686H14.8753V15.9853Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        collapsed={collapsed}
                        classes={`lg:flex hidden`}
                    />

                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel/buy-deliver-iran/"
                        label="خرید کالا و تحویل در ایران"
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75058 3.98353L7.907 4.97122V4.97122L7.75058 3.98353ZM8.69381 3.59283L9.28161 4.40184V4.40184L8.69381 3.59283ZM3.77083 6.14358L2.78314 5.98715L3.77083 6.14358ZM5.58846 4.32594L5.43204 3.33825L5.58846 4.32594ZM3.03771 9.24892L2.2287 8.66113H2.2287L3.03771 9.24892ZM3.42841 8.30569L4.4161 8.46211L3.42841 8.30569ZM1.75099 13.5904L0.941981 14.1782H0.941981L1.75099 13.5904ZM1.75099 11.0199L2.56 11.6077L1.75099 11.0199ZM3.42841 16.3046L4.4161 16.1482L3.42841 16.3046ZM3.03771 15.3614L3.84672 14.7736H3.84672L3.03771 15.3614ZM5.58846 20.2844L5.74488 19.2967L5.58846 20.2844ZM3.77083 18.4667L2.78314 18.6232L3.77083 18.4667ZM8.69381 21.0175L9.28161 20.2085L8.69381 21.0175ZM7.75058 20.6268L7.59416 21.6145L7.75058 20.6268ZM13.0353 22.3042L13.6231 23.1132L13.0353 22.3042ZM10.4648 22.3042L9.87699 23.1132L10.4648 22.3042ZM15.7495 20.6268L15.9059 21.6145L15.7495 20.6268ZM14.8063 21.0175L14.2185 20.2085L14.8063 21.0175ZM19.7293 18.4667L18.7416 18.3103L19.7293 18.4667ZM17.9116 20.2844L17.7552 19.2967L17.9116 20.2844ZM20.4624 15.3614L19.6534 14.7736L20.4624 15.3614ZM20.0717 16.3046L21.0594 16.461L20.0717 16.3046ZM21.7491 11.0199L22.5581 10.4321V10.4321L21.7491 11.0199ZM21.7491 13.5904L22.5581 14.1782L21.7491 13.5904ZM20.0717 8.30569L21.0594 8.14927L20.0717 8.30569ZM20.4624 9.24892L19.6534 9.83672V9.83672L20.4624 9.24892ZM17.9116 4.32594L18.068 3.33825L17.9116 4.32594ZM19.7293 6.14357L18.7416 6.3L19.7293 6.14357ZM14.8063 3.59283L14.2185 4.40184V4.40184L14.8063 3.59283ZM15.7495 3.98353L15.5931 4.97122L15.7495 3.98353ZM13.0353 2.3061L13.6231 1.4971V1.4971L13.0353 2.3061ZM10.4648 2.3061L9.87698 1.4971V1.4971L10.4648 2.3061ZM9.33215 11.598C8.94162 11.2075 8.30846 11.2075 7.91793 11.598C7.52741 11.9886 7.52741 12.6217 7.91793 13.0123L9.33215 11.598ZM10.7084 14.3885L10.0013 15.0956C10.3918 15.4861 11.025 15.4861 11.4155 15.0956L10.7084 14.3885ZM15.5821 10.9289C15.9727 10.5384 15.9727 9.90524 15.5821 9.51472C15.1916 9.12419 14.5585 9.12419 14.1679 9.51472L15.5821 10.9289ZM12.4475 3.11511L14.2185 4.40184L15.3941 2.78382L13.6231 1.4971L12.4475 3.11511ZM15.5931 4.97122L17.7552 5.31363L18.068 3.33825L15.9059 2.99584L15.5931 4.97122ZM18.7416 6.3L19.084 8.46211L21.0594 8.14927L20.7169 5.98715L18.7416 6.3ZM19.6534 9.83672L20.9401 11.6077L22.5581 10.4321L21.2714 8.66113L19.6534 9.83672ZM20.9401 13.0026L19.6534 14.7736L21.2714 15.9492L22.5581 14.1782L20.9401 13.0026ZM19.084 16.1482L18.7416 18.3103L20.7169 18.6232L21.0594 16.461L19.084 16.1482ZM17.7552 19.2967L15.5931 19.6391L15.9059 21.6145L18.068 21.2721L17.7552 19.2967ZM14.2185 20.2085L12.4475 21.4952L13.6231 23.1132L15.3941 21.8265L14.2185 20.2085ZM11.0526 21.4952L9.28161 20.2085L8.10601 21.8265L9.87699 23.1132L11.0526 21.4952ZM7.907 19.6391L5.74488 19.2967L5.43204 21.2721L7.59416 21.6145L7.907 19.6391ZM4.75852 18.3103L4.4161 16.1482L2.44072 16.461L2.78314 18.6232L4.75852 18.3103ZM3.84672 14.7736L2.56 13.0026L0.941981 14.1782L2.2287 15.9492L3.84672 14.7736ZM2.56 11.6077L3.84672 9.83672L2.2287 8.66113L0.94198 10.4321L2.56 11.6077ZM4.4161 8.46211L4.75852 6.3L2.78314 5.98715L2.44072 8.14927L4.4161 8.46211ZM5.74488 5.31363L7.907 4.97122L7.59416 2.99584L5.43204 3.33825L5.74488 5.31363ZM9.28161 4.40184L11.0526 3.11511L9.87698 1.4971L8.10601 2.78382L9.28161 4.40184ZM7.907 4.97122C8.40371 4.89255 8.87475 4.69744 9.28161 4.40184L8.10601 2.78382C7.95451 2.89389 7.77911 2.96654 7.59416 2.99584L7.907 4.97122ZM4.75852 6.3C4.83893 5.79226 5.23714 5.39404 5.74488 5.31363L5.43204 3.33825C4.06849 3.5542 2.99908 4.62361 2.78314 5.98715L4.75852 6.3ZM3.84672 9.83672C4.14233 9.42987 4.33744 8.95883 4.4161 8.46211L2.44072 8.14927C2.41143 8.33423 2.33878 8.50963 2.2287 8.66113L3.84672 9.83672ZM2.56 13.0026C2.25783 12.5867 2.25783 12.0236 2.56 11.6077L0.94198 10.4321C0.130505 11.549 0.130505 13.0613 0.941981 14.1782L2.56 13.0026ZM4.4161 16.1482C4.33744 15.6515 4.14233 15.1804 3.84672 14.7736L2.2287 15.9492C2.33878 16.1007 2.41143 16.2761 2.44072 16.461L4.4161 16.1482ZM5.74488 19.2967C5.23714 19.2163 4.83893 18.8181 4.75852 18.3103L2.78314 18.6232C2.99908 19.9867 4.06849 21.0561 5.43204 21.2721L5.74488 19.2967ZM9.28161 20.2085C8.87475 19.9129 8.40371 19.7178 7.907 19.6391L7.59416 21.6145C7.77912 21.6438 7.95452 21.7164 8.10601 21.8265L9.28161 20.2085ZM12.4475 21.4952C12.0316 21.7974 11.4685 21.7974 11.0526 21.4952L9.87699 23.1132C10.9939 23.9247 12.5062 23.9247 13.6231 23.1132L12.4475 21.4952ZM15.5931 19.6391C15.0964 19.7178 14.6253 19.9129 14.2185 20.2085L15.3941 21.8265C15.5456 21.7164 15.721 21.6438 15.9059 21.6145L15.5931 19.6391ZM18.7416 18.3103C18.6612 18.8181 18.2629 19.2163 17.7552 19.2967L18.068 21.2721C19.4316 21.0561 20.501 19.9867 20.7169 18.6232L18.7416 18.3103ZM19.6534 14.7736C19.3578 15.1804 19.1626 15.6515 19.084 16.1482L21.0594 16.461C21.0887 16.2761 21.1613 16.1007 21.2714 15.9492L19.6534 14.7736ZM20.9401 11.6077C21.2423 12.0236 21.2423 12.5867 20.9401 13.0026L22.5581 14.1782C23.3696 13.0613 23.3696 11.549 22.5581 10.4321L20.9401 11.6077ZM19.084 8.46211C19.1626 8.95882 19.3578 9.42986 19.6534 9.83672L21.2714 8.66113C21.1613 8.50963 21.0887 8.33423 21.0594 8.14927L19.084 8.46211ZM17.7552 5.31363C18.2629 5.39404 18.6612 5.79226 18.7416 6.3L20.7169 5.98715C20.501 4.62361 19.4316 3.5542 18.068 3.33825L17.7552 5.31363ZM14.2185 4.40184C14.6253 4.69744 15.0964 4.89255 15.5931 4.97122L15.9059 2.99584C15.721 2.96654 15.5456 2.89389 15.3941 2.78382L14.2185 4.40184ZM13.6231 1.4971C12.5062 0.68562 10.9939 0.68562 9.87698 1.4971L11.0526 3.11511C11.4685 2.81295 12.0316 2.81295 12.4475 3.11511L13.6231 1.4971ZM7.91793 13.0123L10.0013 15.0956L11.4155 13.6814L9.33215 11.598L7.91793 13.0123ZM11.4155 15.0956L15.5821 10.9289L14.1679 9.51472L10.0013 13.6814L11.4155 15.0956Z" fill="currentColor" />
                            </svg>

                        }
                        collapsed={collapsed}
                        children={[
                            {
                                title: 'تمام محصولات',
                                href: '/panel/buy-deliver-iran'
                            },
                            ...buyProductCategories.map(category => ({
                                title: category.title,
                                href: `/panel/buy-deliver-iran/#gift-card-box-${category.id}`
                            }))
                        ]}
                    // classes={`lg:flex hidden`}
                    />

                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel/gift-cards"
                        label="گیفت کارت ها"
                        icon={
                            <svg width="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33337 16.249H22.1667M6.54171 8.95732L9.66671 5.83232M13.8334 5.83232L16.9584 8.95732M3.41671 20.4156H20.0834C21.234 20.4156 22.1667 19.4829 22.1667 18.3323V7.91565C22.1667 6.76506 21.234 5.83232 20.0834 5.83232H3.41671C2.26611 5.83232 1.33337 6.76506 1.33337 7.91565V18.3323C1.33337 19.4829 2.26611 20.4156 3.41671 20.4156Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        collapsed={collapsed}
                        children={[
                            {
                                title: 'تمام محصولات',
                                href: '/panel/gift-cards'
                            },
                            ...giftCategories.map(category => ({
                                title: category.title,
                                href: `/panel/gift-cards/#gift-card-box-${category.id}`
                            }))
                        ]}
                    // classes={`lg:flex hidden`}
                    />

                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel/currency-income"
                        label="نقد کردن درامد های ارزی"
                        icon={
                            <svg width="22" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 1.03012H3.41671C2.26611 1.03012 1.33337 2.14941 1.33337 3.53012V13.5301M7.58337 18.5301H20.0834C21.234 18.5301 22.1667 17.4108 22.1667 16.0301V8.53012C22.1667 7.14941 21.234 6.03012 20.0834 6.03012H7.58337C6.43278 6.03012 5.50004 7.14941 5.50004 8.53012V16.0301C5.50004 17.4108 6.43278 18.5301 7.58337 18.5301ZM15.9167 12.2801C15.9167 13.6608 14.984 14.7801 13.8334 14.7801C12.6828 14.7801 11.75 13.6608 11.75 12.2801C11.75 10.8994 12.6828 9.78012 13.8334 9.78012C14.984 9.78012 15.9167 10.8994 15.9167 12.2801Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        collapsed={collapsed}
                        children={[
                            {
                                title: 'ثبت سفارش',
                                href: '/panel/currency-income'
                            },
                            {
                                title: 'سفارش ها',
                                href: '/panel/currency-income/orders'
                            }
                        ]}
                    />

                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel/foreign-payment"
                        label="پرداخت در سایت های خارجی"
                        icon={
                            <svg width="22" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.6265 6.74824V3.10241C21.6265 1.95181 20.6958 1.01907 19.5476 1.01907H3.95553C2.80736 1.01907 1.87659 1.95181 1.87659 3.10241V15.6024C1.87659 16.753 2.80736 17.6857 3.95553 17.6857H19.5476C20.6958 17.6857 21.6265 16.753 21.6265 15.6024V11.9566M22.7099 11.9566H18.0323C16.5971 11.9566 15.4336 10.7906 15.4336 9.35241C15.4336 7.91417 16.5971 6.74824 18.0323 6.74824H22.7099V11.9566Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        }
                        collapsed={collapsed}
                        children={[
                            {
                                title: 'تمام محصولات',
                                href: '/panel/foreign-payment'
                            },
                            ...interPaymentCategories.map(category => ({
                                title: category.title,
                                href: `/panel/foreign-payment/#foreign-card-box-${category.id}`
                            }))
                        ]}
                    />
                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel/orders"
                        label="سفارش ها"
                        icon={
                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 12H8M16 16H8M16 8H8M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        }
                        collapsed={collapsed}
                    />
                </div>

                <hr className="lg:my-4 my-2" />

                <div>
                    <p className={`font-color-title-sidebar mb-1 font-normal ${collapsed && 'lg:text-center'} `}>راهنمایی</p>
                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel/tickets"
                        label="تیکت و پشتیبانی"
                        count={auth.user  ? auth.user.unchecked_tickets : 0}
                        icon={
                            <svg width="19" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16785 12.6698V9.54476C1.16785 7.33462 2.04582 5.21501 3.60862 3.6522C5.17143 2.0894 7.29104 1.21143 9.50118 1.21143C11.7113 1.21143 13.8309 2.0894 15.3937 3.6522C16.9565 5.21501 17.8345 7.33462 17.8345 9.54476V12.6698M1.16785 12.6698C1.16785 12.1172 1.38734 11.5873 1.77804 11.1966C2.16874 10.8059 2.69865 10.5864 3.25118 10.5864H4.29285C4.84538 10.5864 5.37528 10.8059 5.76599 11.1966C6.15669 11.5873 6.37618 12.1172 6.37618 12.6698V15.7948C6.37618 16.3473 6.15669 16.8772 5.76599 17.2679C5.37528 17.6586 4.84538 17.8781 4.29285 17.8781H3.25118C2.69865 17.8781 2.16874 17.6586 1.77804 17.2679C1.38734 16.8772 1.16785 16.3473 1.16785 15.7948V12.6698ZM17.8345 12.6698C17.8345 12.1172 17.615 11.5873 17.2243 11.1966C16.8336 10.8059 16.3037 10.5864 15.7512 10.5864H14.7095C14.157 10.5864 13.6271 10.8059 13.2364 11.1966C12.8457 11.5873 12.6262 12.1172 12.6262 12.6698V15.7948C12.6262 16.3473 12.8457 16.8772 13.2364 17.2679C13.6271 17.6586 14.157 17.8781 14.7095 17.8781H15.7512M17.8345 12.6698V15.7948C17.8345 16.3473 17.615 16.8772 17.2243 17.2679C16.8336 17.6586 16.3037 17.8781 15.7512 17.8781M15.7512 17.8781C15.7512 19.6041 12.9533 21.0031 9.50118 21.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        children={[
                            {
                                title: 'تیکت ها',
                                href: '/panel/tickets/'
                            },
                            {
                                title: 'ثبت تیکت جدید',
                                href: '/panel/tickets/add'
                            }
                        ]}
                        collapsed={collapsed}

                    />
                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="/panel/logout"
                        label="خروج از حساب کاربری"
                        icon={
                            <svg width="21" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.37622 20.4713H3.20955C2.65702 20.4713 2.12712 20.2518 1.73641 19.8611C1.34571 19.4704 1.12622 18.9405 1.12622 18.3879V3.80459C1.12622 3.25205 1.34571 2.72215 1.73641 2.33145C2.12712 1.94075 2.65702 1.72125 3.20955 1.72125H7.37622M14.6679 16.3046L19.8762 11.0963M19.8762 11.0963L14.6679 5.88792M19.8762 11.0963H7.37622" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        collapsed={collapsed}
                        classes={'text-custom-red-2 hover:text-custom-red-3'}
                    />
                </div>
                <hr className="lg:my-6 my-2" />

                <div className='lg:mt-0 mt-3'>
                    <p className={`font-color-title-sidebar mb-1 font-normal ${collapsed && 'text-center justify-center'} flex`}>
                        پشتیبانی
                        {!collapsed && ' تلفنی '}
                    </p>
                    <SidebarLink
                        onCloseSidebar={onCloseSidebar}
                        href="tel:09300952804"
                        label="0930-095-2804"
                        icon={
                            <svg width="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91536 1.76184H6.91663C7.76852 1.76184 8.53458 2.28049 8.85096 3.07144L9.95923 5.84213C10.2899 6.66882 9.97174 7.6133 9.20825 8.0714C8.39869 8.55713 8.08543 9.59247 8.6153 10.3739C9.4781 11.6462 10.5751 12.7432 11.8475 13.606C12.6288 14.1359 13.6642 13.8226 14.1499 13.0131C14.608 12.2496 15.5525 11.9314 16.3792 12.2621L19.1499 13.3704C19.9408 13.6867 20.4595 14.4528 20.4595 15.3047V18.306C20.4595 18.891 20.2271 19.4521 19.8134 19.8658C19.3997 20.2794 18.8386 20.5118 18.2536 20.5118C13.9513 20.2504 9.89347 18.4234 6.84568 15.3756C3.7979 12.3278 1.97092 8.27001 1.70947 3.96772C1.70947 3.38269 1.94188 2.82161 2.35556 2.40793C2.76924 1.99425 3.33032 1.76184 3.91536 1.76184Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        collapsed={collapsed}
                    // classes={`lg:flex hidden`}
                    />
                    <div>
                        {!collapsed && <p className="font-color-title-sidebar lg:text-center ">پاسخگوی تلفنی 9 صبح الی 9 شب</p>}
                    </div>
                </div>
            </div>

            <MenuMobile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        </>
    );
}
