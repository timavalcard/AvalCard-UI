import TitleWithBlue from "@/components/layout/TitleWithBlue";
import ServiceItem from "@/components/layout/main/ServiceItem";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: 'احــراز هـویت',
        des: 'شروعی امن با احراز سریع هویت',
        svg: 1
    },
    {
        title: 'ثــبت ســفارش',
        des: 'ثبت سفارش سریع و بی‌دردسر',
        svg: 2
    },
    {
        title: 'بررسی کارشناسان',
        des: 'ارزیابی دقیق توسط تیم متخصص',
        svg: 3
    },
    {
        title: 'واریز درامد شما',
        des: 'تسویه سریع، بدون تأخیر اضافی',
        svg: (<svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.5L9.30586 17.7191C9.6842 18.1447 10.3411 18.1689 10.7497 17.7723L27 2" stroke="white" stroke-width="4" stroke-linecap="round" />
        </svg>
        )
    },
]

export default function CashingOut() {
    return (
        <div className="pt-5">
            <TitleWithBlue>
                نقد کردن درامد ارزی با <strong className="text-blue-custom">
                    اول کارت
                </strong>
            </TitleWithBlue>

            <div className="md:flex grid items-center bg-blue-light p-10 md:mt-12 mt-10 gap-1">
                {
                    services.map((item, index) =>
                        <>
                            <ServiceItem bgSvg={`${services.length === index + 1 ? 'bg-green-custom' : 'bg-blue-custom'}  text-white text-2xl`} {...item} />
                            <div className="hidden md:block">
                                {
                                    services.length !== index + 1 &&
                                    <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928936L0.292892 7.2929ZM42 8L42 7L39.95 7L39.95 8L39.95 9L42 9L42 8ZM35.85 8L35.85 7L31.75 7L31.75 8L31.75 9L35.85 9L35.85 8ZM27.65 8L27.65 7L23.55 7L23.55 8L23.55 9L27.65 9L27.65 8ZM19.45 8L19.45 7L15.35 7L15.35 8L15.35 9L19.45 9L19.45 8ZM11.25 8L11.25 7L7.15 7L7.15 8L7.15 9L11.25 9L11.25 8ZM3.05 8L3.05 7L1 7L1 8L1 9L3.05 9L3.05 8Z" fill="black" />
                                    </svg>
                                }

                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}