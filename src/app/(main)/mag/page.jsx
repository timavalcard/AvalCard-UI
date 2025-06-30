import React from 'react';
import MostPopular from "@/components/ui/main/mag/MostPopular";
import Suggestions from "@/components/ui/main/mag/Suggestions";
import LatestContent from "@/components/ui/main/mag/LatestContent";
import BigMag from "@/components/ui/main/mag/BigMag";
import TopArticles from "@/components/ui/main/mag/TopArticles";
import fetchPageContent from "../../../helpers/api/page-detail";
export const dynamic = 'force-dynamic';
export async function generateMetadata() {
    const { data: page } = await fetchPageContent("blog");

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

export default function HomePage() {
    return (
        <div className="mt-6">
            <div className="container">
                
                <section className="grid md:grid-cols-12 grid-cols-1 items-stretch gap-4 mb-10">
                    <div className="md:col-span-7 overflow-hidden">
                        <BigMag />
                    </div>
                    <div className="grid md:col-span-5 gap-4">
                        <TopArticles />
                    </div>
                </section>

                {/*<MostPopular />*/}
            </div>

            {/*<Suggestions />*/}

            <div className="container">
                <LatestContent />
            </div>
        </div>
    );
}