import TitleWithBlue from "@/components/layout/TitleWithBlue";
import Button from "@/components/ui/globals/Button";

const items = [
    {
        title: 'دولوپرها و توسعه‌دهندگان',
        subtitle: 'نقد کردن پروژه‌های دلاری خارجی',
        icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9992 22.1667C13.8992 22.7167 12.9826 23.5334 12.2992 24.5501C11.9159 25.1334 11.9159 25.8667 12.2992 26.4501C12.9826 27.4667 13.8992 28.2834 14.9992 28.8334" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.3496 22.1667C26.4496 22.7167 27.3663 23.5334 28.0496 24.5501C28.4329 25.1334 28.4329 25.8667 28.0496 26.4501C27.3663 27.4667 26.4496 28.2834 25.3496 28.8334" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.0007 37.1666H25.0007C33.334 37.1666 36.6673 33.8333 36.6673 25.4999V15.4999C36.6673 7.16659 33.334 3.83325 25.0007 3.83325H15.0007C6.66732 3.83325 3.33398 7.16659 3.33398 15.4999V25.4999C3.33398 33.8333 6.66732 37.1666 15.0007 37.1666Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.7168 13.8499L35.7501 13.8333" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ,
    },
    {
        title: 'گیمرها و استریمرها',
        subtitle: 'نقد کردن درآمد ارزی از بازی و استریم',
        icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9505 21.2666L10.8672 26.3499" stroke="#3F5AEF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.916 21.3167L15.9993 26.4" stroke="#3F5AEF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.5508 23.8333H22.5674" stroke="#3F5AEF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M29.1172 23.8333H29.1339" stroke="#3F5AEF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.834 27.1334V27.1001" stroke="#3F5AEF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.834 20.5668V20.5334" stroke="#3F5AEF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.0007 37.1667H25.0007C33.334 37.1667 36.6673 33.8333 36.6673 25.5V22.1667C36.6673 13.8333 33.334 10.5 25.0007 10.5H15.0007C6.66732 10.5 3.33398 13.8333 3.33398 22.1667V25.5C3.33398 33.8333 6.66732 37.1667 15.0007 37.1667Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.6841 3.83325L21.6674 5.51659C21.6508 6.43325 20.9174 7.16659 20.0008 7.16659H19.9508C19.0341 7.16659 18.3008 7.91659 18.3008 8.83325C18.3008 9.74992 19.0508 10.4999 19.9674 10.4999H21.6341" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ,
    },
    {
        title: 'فریلنسری‌ها',
        subtitle: 'نقد کردن پروژه‌های خارجی',
        icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.6507 17.9498V30.1498C29.6507 34.0331 26.5007 37.1664 22.634 37.1664H10.3507C6.48398 37.1664 3.33398 34.0164 3.33398 30.1498V17.9498C3.33398 14.0664 6.48398 10.9331 10.3507 10.9331H22.634C26.5007 10.9331 29.6507 14.0831 29.6507 17.9498Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.16602 7.16667V4.25" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.834 7.16667V4.25" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.5 7.16667V4.25" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M36.6671 22.4332C36.6671 26.2998 33.5171 29.4498 29.6504 29.4498V15.4165C33.5171 15.4165 36.6671 18.5498 36.6671 22.4332Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.33398 20.5H29.184" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ,
    },
    {
        title: 'سایر درآمدهای دلاری',
        subtitle: 'نقد کردن پروژه‌های دلاری خارجی',
        icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.334 19.5C13.334 20.7833 14.334 21.8333 15.5507 21.8333H18.0507C19.1173 21.8333 19.984 20.9167 19.984 19.8C19.984 18.5833 19.4507 18.15 18.6673 17.8667L14.6673 16.4667C13.8673 16.1833 13.334 15.75 13.334 14.5333C13.334 13.4167 14.2007 12.5 15.2673 12.5H17.7673C19.0007 12.5167 20.0007 13.55 20.0007 14.8333" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.666 21.9165V23.1498" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.666 11.1831V12.4831" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6507 30.4668C24.0052 30.4668 29.9673 24.5048 29.9673 17.1502C29.9673 9.79557 24.0052 3.8335 16.6507 3.8335C9.29606 3.8335 3.33398 9.79557 3.33398 17.1502C3.33398 24.5048 9.29606 30.4668 16.6507 30.4668Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.6328 33.6332C23.1328 35.7498 25.5828 37.1332 28.3828 37.1332C32.9328 37.1332 36.6328 33.4332 36.6328 28.8832C36.6328 26.1165 35.2661 23.6665 33.1828 22.1665" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ,
    },
    {
        title: 'عکاسان و گرافیست‌ها',
        subtitle: 'پروژه‌های خارجی و فروش عکس‌ها و فایل‌ها',
        icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2663 37.1668H28.733C33.333 37.1668 35.1663 34.3502 35.383 30.9168L36.2496 17.1502C36.483 13.5502 33.6163 10.5002 29.9996 10.5002C28.983 10.5002 28.0496 9.91683 27.583 9.01683L26.383 6.60016C25.6163 5.0835 23.6163 3.8335 21.9163 3.8335H18.0996C16.383 3.8335 14.383 5.0835 13.6163 6.60016L12.4163 9.01683C11.9496 9.91683 11.0163 10.5002 9.99963 10.5002C6.38296 10.5002 3.51629 13.5502 3.74963 17.1502L4.61629 30.9168C4.81629 34.3502 6.6663 37.1668 11.2663 37.1668Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 13.8335H22.5" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.0007 30.4998C22.984 30.4998 25.4173 28.0665 25.4173 25.0832C25.4173 22.0998 22.984 19.6665 20.0007 19.6665C17.0173 19.6665 14.584 22.0998 14.584 25.0832C14.584 28.0665 17.0173 30.4998 20.0007 30.4998Z" stroke="#3F5AEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ,
    },
    {
        title: 'یوتیوبرها',
        subtitle: 'نقد کردن درآمدهای حاصل از یوتیوب',
        icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.334 33.8332H11.6673C6.66732 33.8332 3.33398 30.4998 3.33398 25.4998V15.4998C3.33398 10.4998 6.66732 7.1665 11.6673 7.1665H28.334C33.334 7.1665 36.6673 10.4998 36.6673 15.4998V25.4998C36.6673 30.4998 33.334 33.8332 28.334 33.8332Z" stroke="#3764FE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 16.3335L23.1667 18.8335C24.6667 19.8335 24.6667 21.3335 23.1667 22.3335L19 24.8335C17.3333 25.8335 16 25.0002 16 23.1668V18.1668C16 16.0002 17.3333 15.3335 19 16.3335Z" stroke="#3764FE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ,
    },
]

export default function WhatCasesCashingOut() {
    return (
        <div className="pt-20">
            <div className="md:flex grid gap-y-5 items-center justify-between">
                <div>
                    <TitleWithBlue blue={'چه درآمد هایی'} className={'!my-0'}>
                        را نقد میکنیم؟
                    </TitleWithBlue>
                    <p className="mt-5 text-[#191919] opacity-50 text-sm">
                    ما هر نوع درآمد ارزی شما را از سایت‌های بین‌المللی، پروژه‌های آزاد، پلتفرم‌های آموزشی و فروش آنلاین، به‌طور کامل
                    <br className="hidden md:block" />
                     و قابل اعتماد نقد می‌کنیم. کافی‌ست سفارش دهید، بقیه‌ کارها را به تیم متخصص ما بسپارید.
                        </p>
                </div>

                <div>
                    <Button href={'/panel/currency-income'} size="auto" color="green">
                        همین الان نقدش کن
                    </Button>
                </div>

            </div>

            <div className="md:mt-16 mt-10 md:block hidden">
                <img loading="lazy" src={'/images/what cases cashing out.svg'} alt="what cases cashing out" className="!w-full !h-full" height="400" width="400" />
            </div>

            <div className="md:hidden mt-10">
                {items.map(({ title, subtitle, icon: Icon }, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 py-4 text-[#010101]"
                    >
                        <div>
                            {Icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2.5 ">{title}</h3>
                            <p className="text-sm opacity-50">{subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}