import AskedQuestions from "@/components/layout/main/askedQuestions/AskedQuestions";
import Button from "@/components/ui/globals/Button";
import TitleWithIcon from "@/components/ui/globals/TitleWithIcon";
import AboutGift from "@/components/ui/main/home/AboutGift";
import Comments from "@/components/ui/main/home/Comments";
import Features from "@/components/ui/main/home/Features";
import GetFreeSupport from "@/components/ui/main/home/GetFreeSupport";
import GiftCards from "@/components/ui/main/home/GiftCards";
import MarqueeTop from "@/components/ui/main/home/MarqueeTop";
import NewesBlogs from "@/components/ui/main/home/NewesBlogs";
import ServicesGiftBy from "@/components/ui/main/home/ServicesGiftBy";
import TopContent from "@/components/ui/main/home/TopContent";
import fetchPageContent from "../../helpers/api/page-detail";
import Blogs from "../../components/layout/main/Blogs";
import SchemaOrg from "../../components/layout/Schema/SchemaOrg";
import Account from "./buy-deliver-iran/Account";
import BuyAcconts from "./foreign-payment/BuyAcconts";
import CurrencyIncome from "./currency-income/CurrencyIncome";
export const dynamic = 'force-dynamic';
export async function generateMetadata() {
    const { data: page } = await fetchPageContent("home");

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
    };
}

export default function Home() {
    return (
        <>

            <TopContent />

            <div className="container">
                <Features />
                <div className="mt-custom-4">
                    <CurrencyIncome home={true} />
                </div>
                <Account home={true} />
                <GiftCards />
                <BuyAcconts home={true} />
            </div>

            <ServicesGiftBy />

            <div className="container">

                <AboutGift />

            </div>
            
            <GetFreeSupport />

            <div className="container">
                {/* <NewesBlogs /> */}
            </div>

            <Comments />

            <div className="container !mb-24">
                <AskedQuestions />
            </div>

            <div className="container">
                <Blogs />
            </div>
        </>
    )
}