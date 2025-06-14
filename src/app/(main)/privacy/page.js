import TitleBlue from "@/components/ui/globals/TitleBlue";
import Content from "@/components/ui/main/termsConditions/Content";
import Link from "next/link";
import fetchPageContent from "../../../helpers/api/page-detail";
export const dynamic = 'force-dynamic';
export async function generateMetadata() {
    const { data: page } = await fetchPageContent("privacy");

    return {
        title: page.meta_title,
        description: page.meta_description,
        robots: `${page.meta_follow}, ${page.meta_index}`,
        openGraph: {
            locale: "fa_IR",
            type: "website",
            title: page.meta_title,
            description: page.meta_description,
            url: page.url,
            siteName: "اول کارت",
            updatedTime: page.updated_at,
            images: [
                {
                    url: "/img/logo.png",
                    secureUrl: "/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "اول کارت",
                    type: "image/jpeg",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: page.meta_title,
            description: page.meta_description,
        },
        alternates: {
            canonical: page.url,  // اضافه کردن URL canonical به متاداده‌ها
        }
    };
}

export default function Page() {
    return (
        <div className="mt-custom-3">
            <div className="container ">
                <div className="flex text-sm gap-3 font-semibold items-center mb-7">
                    <Link href={'/'} className="text-[#959595]">
                        اول کارت
                    </Link>
                    <div>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L1 5L5 1" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="text-[#464646]">
                    حریم خصوصی
                    </div>
                </div>
                <TitleBlue>
                حریم خصوصی
                </TitleBlue>
                <div className="mt-custom-3">
                    <Content />
                </div>
            </div>
        </div>
    );
}