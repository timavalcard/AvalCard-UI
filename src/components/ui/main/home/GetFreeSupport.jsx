import TitleWithIcon from "../../globals/TitleWithIcon";
import GetFreeSupportForm from "./GetFreeSupportForm";

export default function GetFreeSupport() {
    return (
        <div className="bg-[#F2F5F7] py-12  mt-28">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-10 items-center">
                    <div className="md:col-span-5">
                        <TitleWithIcon
                            title={'دریافت مشـــاوره رایــگان '}
                        />
                        <div className="opacity-50 mr-6 mt-3.5">
                            شما میتوانید  با وارد کردن اطلاعات خود در فرم زیر مشاوره تلفنی رایگان دریافت کنید
                        </div>

                        <div className="mt-8">
                            <img src="/images/get-free-support.svg" className="w-full mx-auto" />
                        </div>

                    </div>

                    <div className="md:col-span-7">
                        <div className="bg-white md:rounded-none rounded-2xl p-5 md:p-0 md:bg-transparent">
                        <div className="flex items-center gap-8">
                            <div className="pb-4 hidden md:block">
                                <svg width="5" height="88" viewBox="0 0 5 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 5C0 2.23858 2.23858 0 5 0V83C5 85.7614 2.76142 88 0 88V5Z" fill="#3F5AEF" />
                                </svg>
                            </div>
                            <div className="flex items-center gap-9 border-b pb-4">
                                <div>
                                    <svg className="md:block hidden" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="88" height="88" rx="44" fill="#00CC99" />
                                        <g clip-path="url(#clip0_472_1243)">
                                            <path d="M44.6497 26.516C36.9438 26.1342 30.542 32.6304 30.542 40.6664V44.4164V50.2497C30.542 52.6436 32.3358 54.5751 34.5668 54.7631C34.7483 58.0318 37.2892 60.6664 40.4378 60.6664H41.2403C41.6021 61.169 42.1692 61.4997 42.8128 61.4997H45.1878C46.2787 61.4997 47.167 60.5656 47.167 59.4164C47.167 58.2672 46.2787 57.3331 45.1878 57.3331H42.8128C42.1692 57.3331 41.6021 57.6638 41.2403 58.1664H40.4378C38.5967 58.1664 37.1572 56.7096 36.9542 54.8331H38.8545C39.5103 54.833 40.0419 54.2734 40.042 53.5831V44.4164C40.0419 43.7261 39.5103 43.1665 38.8545 43.1664H32.917V40.6664C32.917 34.0207 38.1496 28.6963 44.5369 29.0128C50.4858 29.3072 55.0837 34.7164 55.0837 41.031V43.1664H49.1462C48.4903 43.1665 47.9587 43.7261 47.9587 44.4164V53.5831C47.9587 54.2734 48.4903 54.833 49.1462 54.8331H53.1045C55.4951 54.8331 57.4587 52.7662 57.4587 50.2497V44.4164V41.031C57.4587 33.4356 51.9011 26.8749 44.6497 26.516L44.6497 26.516ZM32.917 45.6664H37.667V52.3331H34.8962C33.7892 52.3331 32.917 51.4149 32.917 50.2497V45.6664ZM50.3337 45.6664H55.0837V50.2497C55.0837 51.4149 54.2114 52.3331 53.1045 52.3331H50.3337V45.6664Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_472_1243">
                                                <rect width="38" height="40" fill="white" transform="translate(25 24)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg className="md:hidden" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="64" height="64" rx="32" fill="#00CC99" />
                                        <g clip-path="url(#clip0_500_2040)">
                                            <path d="M31.9959 18.887C26.1151 18.6006 21.2295 23.4728 21.2295 29.4998V32.3123V36.6873C21.2295 38.4827 22.5984 39.9313 24.3011 40.0723C24.4395 42.5238 26.3787 44.4998 28.7816 44.4998H29.394C29.6701 44.8768 30.1029 45.1248 30.5941 45.1248H32.4066C33.2391 45.1248 33.917 44.4242 33.917 43.5623C33.917 42.7004 33.2391 41.9998 32.4066 41.9998H30.5941C30.1029 41.9998 29.6701 42.2478 29.394 42.6248H28.7816C27.3765 42.6248 26.278 41.5322 26.123 40.1248H27.5732C28.0737 40.1248 28.4794 39.705 28.4795 39.1873V32.3123C28.4794 31.7946 28.0737 31.3749 27.5732 31.3748H23.042V29.4998C23.042 24.5155 27.0353 20.5222 31.9098 20.7596C36.4498 20.9804 39.9587 25.0373 39.9587 29.7732V31.3748H35.4274C34.9269 31.3749 34.5212 31.7946 34.5212 32.3123V39.1873C34.5212 39.705 34.9269 40.1248 35.4274 40.1248H38.4482C40.2727 40.1248 41.7712 38.5747 41.7712 36.6873V32.3123V29.7732C41.7712 24.0767 37.5298 19.1562 31.9959 18.887L31.9959 18.887ZM23.042 33.2498H26.667V38.2498H24.5524C23.7076 38.2498 23.042 37.5612 23.042 36.6873V33.2498ZM36.3337 33.2498H39.9587V36.6873C39.9587 37.5612 39.293 38.2498 38.4482 38.2498H36.3337V33.2498Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_500_2040">
                                                <rect width="29" height="30" fill="white" transform="translate(17 17)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="text-sm font-normal">
                                    شما میتوانید  با وارد کردن اطلاعات خود در فرم زیر مشاوره تلفنی رایگان ثبت کنید تیم مشاوران ما در اسرع وقت با شما تماس خواهند گرفت
                                </div>
                            </div>
                        </div>
                        <GetFreeSupportForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}