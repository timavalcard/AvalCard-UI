
import TitleWithBorder from "@/components/layout/main/TitleWithBorder";
import Button from "@/components/ui/globals/Button";
import Location from "@/components/ui/main/contactUs/Location";
import fetchPageContent from "../../../helpers/api/page-detail";
import Form from "./Form";


export async function generateMetadata() {
    const { data: page } = await fetchPageContent("contact-us");

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



export default function ContactUs() {


    return (
        <section className="container pt-6">

            <div>
                <TitleWithBorder>
                    مشاوره رایگان
                </TitleWithBorder>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 gap-10">
                <Form />
                <div className="xl:col-span-4 md:col-span-5 order-1 md:order-2">
                    <img src="/images/counseling-desktop.webp" className="w-full h-full object-cover md:block hidden rounded-xl" alt="مشاوره رایگان" />
                    <img src="/images/counseling.jpg" className="w-full h-full object-cover md:hidden rounded-xl" alt="مشاوره رایگان" />
                </div>
            </div>
        </section>
    );
}
