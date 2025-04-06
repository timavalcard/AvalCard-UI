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

export const metadata = {
    title: 'اول کارت'
}

export default function Home() {
    return (
        <>
            <TopContent />

            <div className="container">
                <Features />

                <GiftCards />

            </div>

            <ServicesGiftBy />

            <div className="container">
                <AboutGift />

            </div>
            
            <GetFreeSupport />

            <div className="container">
                <NewesBlogs />
            </div>

            <Comments />

            <div className="container !mb-24">
                <AskedQuestions />
            </div>
        </>
    )
}