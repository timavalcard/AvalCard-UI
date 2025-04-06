import Button from "../../globals/Button";
import TitleWithIcon from "../../globals/TitleWithIcon";

export default function AboutGift() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 mt-28 gap-10 items-center">
            <div className="relative">
                <img src="/images/about-us-gift.svg" className="w-full" />
                <div className="right-0 left-0 mx-auto flex justify-center absolute bottom-8">
                <Button flex className={'!rounded-full'} color="blue" size="auto">
                    <div>
                        درباره ما
                    </div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white" />
                            <path d="M13.2599 16.2799C13.0699 16.2799 12.8799 16.2099 12.7299 16.0599L9.19992 12.5299C8.90992 12.2399 8.90992 11.7599 9.19992 11.4699L12.7299 7.93991C13.0199 7.64991 13.4999 7.64991 13.7899 7.93991C14.0799 8.22991 14.0799 8.70991 13.7899 8.99991L10.7899 11.9999L13.7899 14.9999C14.0799 15.2899 14.0799 15.7699 13.7899 16.0599C13.6499 16.2099 13.4599 16.2799 13.2599 16.2799Z" fill="white" />
                        </svg>
                    </div>
                </Button>
                </div>
            </div>
            <div>
                <TitleWithIcon
                    title={'درباره گیفتــی فـــای'}
                />
                <div className="mt-3 opacity-50 font-normal mr-6">
                    بهترین تکنولوژی ها امروزه در دست فاهوش هست  شما میتوانید با استفاده از  تیم های پشتیبانی فوق العاده  آن و ویژگی های منحصر به فرد سامانه فاهوش که چند مورد ان را میتوانید در لیست زیر مشاهده کنید بهترین ها را برای زندگی خود رقم بزنید
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16">
                    <div className="flex items-center gap-4">
                        <div>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="32" fill="#DEDFEA" fill-opacity="0.5" />
                                <path d="M38.1399 41.62C37.2599 41.88 36.2199 42 34.9999 42H28.9999C27.7799 42 26.7399 41.88 25.8599 41.62C26.0799 39.02 28.7499 36.97 31.9999 36.97C35.2499 36.97 37.9199 39.02 38.1399 41.62Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M35 22H29C24 22 22 24 22 29V35C22 38.78 23.14 40.85 25.86 41.62C26.08 39.02 28.75 36.97 32 36.97C35.25 36.97 37.92 39.02 38.14 41.62C40.86 40.85 42 38.78 42 35V29C42 24 40 22 35 22ZM32 34.17C30.02 34.17 28.42 32.56 28.42 30.58C28.42 28.6 30.02 27 32 27C33.98 27 35.58 28.6 35.58 30.58C35.58 32.56 33.98 34.17 32 34.17Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M35.5799 30.58C35.5799 32.56 33.9799 34.17 31.9999 34.17C30.0199 34.17 28.4199 32.56 28.4199 30.58C28.4199 28.6 30.0199 27 31.9999 27C33.9799 27 35.5799 28.6 35.5799 30.58Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div>
                                +1 میلیون
                            </div>
                            <div className="opacity-40 text-sm mt-1.5">
                                بیشتر از یک میلیون کاربر فعال
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:mr-0 mr-28">
                        <div>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="32" fill="#DEDFEA" fill-opacity="0.5" />
                                <path d="M28 22V25" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M36 22V25" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.5 29.0901H40.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M41 28.5V37C41 40 39.5 42 36 42H28C24.5 42 23 40 23 37V28.5C23 25.5 24.5 23.5 28 23.5H36C39.5 23.5 41 25.5 41 28.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31.9955 33.7H32.0045" stroke="#3F5AEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.2943 33.7H28.3033" stroke="#3F5AEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.2943 36.7H28.3033" stroke="#3F5AEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <div>
                                +10 سال
                            </div>
                            <div className="opacity-40 text-sm mt-1.5">
                                سابقه فعالیت
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:mr-0 mr-28">
                        <div>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="32" fill="#DEDFEA" fill-opacity="0.5" />
                                <path d="M22 42H42" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M32 22C33.6 22.64 35.4 22.64 37 22V25C35.4 25.64 33.6 25.64 32 25V22Z" stroke="#3F5AEF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M32 25V28" stroke="#3F5AEF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M37 28H27C25 28 24 29 24 31V42H40V31C40 29 39 28 37 28Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.5801 32H39.4201" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.9902 32V42" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M31.9902 32V42" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M35.9902 32V42" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <div>
                                +2500 هزار
                            </div>
                            <div className="opacity-40 text-sm mt-1.5">
                                شرکت‌ها و مشتریان بزرگ
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="32" fill="#DEDFEA" fill-opacity="0.5" />
                                <path d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.0001 23H29.0001C27.0501 28.84 27.0501 35.16 29.0001 41H28.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M35 23C36.95 28.84 36.95 35.16 35 41" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23 36V35C28.84 36.95 35.16 36.95 41 35V36" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23 29.0001C28.84 27.0501 35.16 27.0501 41 29.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <div>
                                +200 خدمات
                            </div>
                            <div className="opacity-40 text-sm mt-1.5">
                                بیش از 200 خدمات متنوع
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}