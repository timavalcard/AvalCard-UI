import ProfileBox from '@/components/layout/profileBox/ProfileBox'
import CartBox from '@/components/layout/cartBox/CartBox'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className="container pb-12">
            <div className="flex justify-between py-6  relative z-50">
                <div className='flex gap-7 items-center'>
                    <Link href={'/'} className='flex items-center gap-1'>
                        <div>
                            <Image width={50} height={50} src="/images/Logo.webp" alt="Logo" />
                        </div>
                        <div>
                            اول کارت
                        </div>
                    </Link>
                    <Link href={'/'}>
                        لیست خدمات
                    </Link>
                    <Link href={'/'}>
                        صفحه اصلی
                    </Link>
                    <Link href={'/'}>
                        پشتیبانی آنلاین
                    </Link>
                </div>
                <div className="flex ">
                    <ProfileBox />
                    <CartBox />
                </div>
            </div>

            <div className='w-full text-center flex justify-center px-5'>
                <svg className='w-full' height="3" viewBox="0 0 1160 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.12" x1="0.75" y1="1.71875" x2="1159.25" y2="1.71885" stroke="#1A2531" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 5" />
                </svg>
            </div>
        </div>
    );
}