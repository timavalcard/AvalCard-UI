import GiftCardByItem from "@/components/layout/main/GiftCardByItem";
import { HiOutlineCurrencyDollar, HiOutlineTicket } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineMonetizationOn } from "react-icons/md";

export default function Services() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
            <GiftCardByItem
            href="/gift-card"
                icon={
                    <HiOutlineTicket size={24} />
                }
                title={'انواع گیفت کارت'} />
            <GiftCardByItem
            href="/foreign-payment"
                icon={<CiGlobe size={24} />}
                title={'پرداخت در وب‌سایت‌های خارجی'} />
            <GiftCardByItem
            href="/currency-income"
                icon={<HiOutlineCurrencyDollar size={24} />}
                title={'نقد کردن درامد دلاری'} />
            <GiftCardByItem
                icon={
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" rx="10" fill="#F7F8FA" />
                        <path d="M32 25.5601H42" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M34.22 22H39.78C41.56 22 42 22.44 42 24.2V28.31C42 30.07 41.56 30.51 39.78 30.51H34.22C32.44 30.51 32 30.07 32 28.31V24.2C32 22.44 32.44 22 34.22 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 37.0601H32" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.22 33.5H29.78C31.56 33.5 32 33.94 32 35.7V39.81C32 41.57 31.56 42.01 29.78 42.01H24.22C22.44 42.01 22 41.57 22 39.81V35.7C22 33.94 22.44 33.5 24.22 33.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M42 35C42 38.87 38.87 42 35 42L36.05 40.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 29C22 25.13 25.13 22 29 22L27.95 23.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                }
                href="/buy-deliver-iran"
                title={'خرید کالا از وب سایت‌های خارجی'} />
        </div>
    )
}