import GiftCardByItem from "@/components/layout/main/GiftCardByItem";
import TitleWithIcon from "../../globals/TitleWithIcon";

export default function ServicesGiftBy() {
    return (
        <div className="mt-28">

            <div className="w-12 h-12 rounded-full flex justify-center items-center mx-auto cursor-pointer -mb-3 bg-white shadow-[0px_29px_54px_0px_#0000005E]">
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.731934 0.847656L6.44384 6.0403L12.1558 0.847656" stroke="black" stroke-width="2.07706" />
                </svg>
            </div>

            <div className="md:bg-[url('/images/bg-circle.svg')] bg-[url('/images/bg-circle-sm.svg')] py-12 bg-cover bg-center-top">
                <div className="container">
                    <div>
                        <TitleWithIcon iconColor="#00CC99" more moreHref="/" title={'خدمات گیفتی بای'} className="text-white" />
                        <div className="mt-3 mr-6 text-white opacity-80">
                            خدماتی که میتوانید با خیال راحت از آن استفاده کنید
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
                        <GiftCardByItem
                            icon={
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="64" height="64" rx="10" fill="#F7F8FA" />
                                    <path d="M39.5 32.5C39.5 31.12 40.62 30 42 30V29C42 25 41 24 37 24H27C23 24 22 25 22 29V29.5C23.38 29.5 24.5 30.62 24.5 32C24.5 33.38 23.38 34.5 22 34.5V35C22 39 23 40 27 40H37C41 40 42 39 42 35C40.62 35 39.5 33.88 39.5 32.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30 24L30 40" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5" />
                                </svg>

                            }
                            title={'انواع گیفت کارت'} />
                        <GiftCardByItem
                            icon={
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="64" height="64" rx="10" fill="#F7F8FA" />
                                    <path d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28.0001 23H29.0001C27.0501 28.84 27.0501 35.16 29.0001 41H28.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M35 23C36.95 28.84 36.95 35.16 35 41" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23 36V35C28.84 36.95 35.16 36.95 41 35V36" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23 29C28.84 27.05 35.16 27.05 41 29" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            }
                            title={'خرید از سایت های خارجی'} />
                        <GiftCardByItem
                            icon={
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="64" height="64" rx="10" fill="#F7F8FA" />
                                    <path d="M28.6719 34.3298C28.6719 35.6198 29.6619 36.6598 30.8919 36.6598H33.4019C34.4719 36.6598 35.3419 35.7498 35.3419 34.6298C35.3419 33.4098 34.8119 32.9798 34.0219 32.6998L29.9919 31.2998C29.2019 31.0198 28.6719 30.5898 28.6719 29.3698C28.6719 28.2498 29.5419 27.3398 30.6119 27.3398H33.1219C34.3519 27.3398 35.3419 28.3798 35.3419 29.6698" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M32 26V38" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            }
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
                            title={'انواع گیفت کارت'} />
                    </div>

                </div>
            </div>
        </div>
    );
}