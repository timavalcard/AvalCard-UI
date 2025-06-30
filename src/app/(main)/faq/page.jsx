


import TitleBlue from '@/components/ui/globals/TitleBlue';
import ClientContent from './ClientContent';
import fetchPageContent from "../../../helpers/api/page-detail";
export const dynamic = 'force-dynamic';
export async function generateMetadata() {
    const { data: page } = await fetchPageContent("faq");

    return {
        metadataBase: new URL('https://avalcard.com'),
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

export default function Home() {
    return (
        <div className="container pt-6">
            <TitleBlue>
                سوالات متداول
            </TitleBlue>

            <div className="grid md:grid-cols-12 grid-cols-1 gap-12">

                <ClientContent />
            </div>
        </div>
    );
}
