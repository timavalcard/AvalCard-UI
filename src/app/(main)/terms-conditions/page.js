import Content from "@/components/ui/main/termsConditions/Content";
import Link from "next/link";

export const metadata = {
    title: 'قوانین و مقررات'
}

export default function Page() {
    return (
        <div className="mt-custom-3">
            <div className="container ">
                <div className="flex text-sm gap-3 font-semibold items-center">
                    <Link href={'/'} className="text-[#464646]">
                        اول کارت
                    </Link>
                    <div>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L1 5L5 1" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 bg-blue-custom text-white rounded-md">
                        قوانین و مقرات
                    </div>
                </div>
            </div>

            <div className="bg-[url(/images/terms-conditions.svg)] min-h-52 mt-custom-3 font-semibold text-5xl align-middle flex items-center justify-center text-white">
                قوانین و مقررات استفاده از خدمات اول کارت
            </div>

            <div className="container ">
                <div className="mt-custom-3">
                    <Content />
                </div>
            </div>
        </div>
    );
}