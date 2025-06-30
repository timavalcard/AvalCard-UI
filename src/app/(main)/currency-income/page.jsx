import BreadcrumpLanding from "@/components/layout/BreadcrumpLanding";
import Faq from "@/components/ui/main/Faq";
import Button from "@/components/ui/globals/Button";
import CashingOut from "./CashingOut";
import WhyCashingOut from "./WhyCashingOut";
import WhatCasesCashingOut from "./WhatCasesCashingOut";
import AllAboutCashingOut from "./AllAboutCashingOut";
import MarqueeLogos from "./MarqueeLogos";
import fetchPageContent from "../../../helpers/api/page-detail";
import Order from "./order";
import CurrencyIncome from "./CurrencyIncome";
export const dynamic = 'force-dynamic';
export async function generateMetadata() {
    const { data: page } = await fetchPageContent("currency-income");

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

const bredcrump = [
    {
        title: 'نقد کردن درآمد دلاری',
        href: '#',
    }
]

const faq={
    q1: {
        title: 'درآمد دلاری از چه روش‌هایی قابل نقد کردن است؟',
        description: 'درآمد دلاری شما از طریق حساب‌هایی مانند PayPal، Payoneer، Wise، Skrill، وب‌مانی، ارزهای دیجیتال (مثل تتر)، و یا واریزی مستقیم سایت‌های فریلنسری قابل نقد شدن است.'
    },
    q2: {
        title: 'چقدر زمان می‌برد تا درآمد دلاری من نقد و به حساب بانکی‌ام واریز شود؟',
        description: 'بسته به روش دریافت، معمولاً بین ۱ تا ۳ روز کاری زمان می‌برد. در برخی موارد خاص (مثلاً PayPal یا ارز دیجیتال) ممکن است سریع‌تر هم انجام شود.'
    },
    q3: {
        title: 'آیا برای نقد کردن درآمد، باید حتماً حساب خارجی داشته باشم؟',
        description: 'خیر، اگر شما درآمد دلاری دارید اما حساب خارجی ندارید، ما می‌توانیم از طرف شما مبلغ را دریافت کرده و معادل ریالی آن را به حسابتان واریز کنیم.'
    },
    q4: {
        title: 'نرخ تبدیل دلار به تومان چگونه محاسبه می‌شود؟',
        description: 'نرخ تبدیل بر اساس نرخ روز دلار حواله‌ای و نرخ بازار آزاد محاسبه می‌شود که در لحظه معامله به شما اعلام خواهد شد. ما سعی می‌کنیم همیشه بهترین نرخ ممکن را ارائه دهیم.'
    },
    q5: {
        title: 'چه مدارکی برای نقد کردن درآمد دلاری لازم است؟',
        description: 'برای ثبت درخواست نقد کردن درآمد دلاری ابتدا باید حساب کاربری داشته باشید در اول کار سپس اقدام به احراز هویت و ارسال مدارک هویتی خود کنید سپس بعد از تایید مدارک شما و تایید حساب شما میتوانید درخواست نقد کردن درامد را ثبت کنید.'
    }
};

export default function page() {
    return (
        <div>
            <div className="container">
                <BreadcrumpLanding items={bredcrump} />
                <CurrencyIncome />

                <CashingOut />
                <WhyCashingOut />
                <WhatCasesCashingOut />
                <MarqueeLogos />


            </div>
            
            <Faq questions={faq}/>

            <div className="container">
                <AllAboutCashingOut />
            </div>
        </div>
    );
}