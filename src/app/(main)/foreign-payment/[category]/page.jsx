import BreadcrumpLanding from "@/components/layout/BreadcrumpLanding";
import Faq from "@/components/ui/main/Faq";
import Comments from "@/components/ui/main/Comments";
import Button from "@/components/ui/globals/Button";
import WhyBuy from "../../../../components/layout/main/WhyBuy";
import BuyAcconts from "./BuyAcconts";
import Blogs from "../../../../components/layout/main/Blogs";
import TitleWithBlue from "@/components/layout/TitleWithBlue";
import fetchPageContent from "../../../../helpers/api/page-detail";
import {fetchCategoryWithProducts} from "../../../../helpers/api/category-detail-product";
import Account from "../../buy-deliver-iran/[category]/Account";
export const dynamic = 'force-dynamic';
export async function generateMetadata({ params }) {
    const { category } = params;
    const categoryData=await fetchCategoryWithProducts(category,1)
    return {
        title: categoryData.meta_title,
        description: categoryData.meta_description,
        robots: `${categoryData.meta_follow}, ${categoryData.meta_index}`,
        openGraph: {
            locale: "fa_IR",
            type: "website",
            title: categoryData.meta_title,
            description: categoryData.meta_description,
            url: categoryData.url,
            siteName: "اول کارت",
            updatedTime: categoryData.updated_at,
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
            title: categoryData.meta_title,
            description: categoryData.meta_description,
        },
        alternates: {
            canonical: categoryData.url,  // اضافه کردن URL canonical به متاداده‌ها
        }
    };
}


export default async function page({ params }) {
    const { category } = params;
    const categoryData=await fetchCategoryWithProducts(category,30)
    const bredcrump = [
        {
            title: 'خرید از وب سایت های خارجی',
            href: '/foreign-payment',
        },
        {
            title: categoryData.title,
            href: categoryData.url,
        }
    ]

    return (
        <>
            <div className="container">
                <BreadcrumpLanding items={bredcrump} />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-7 items-stretch mt-5">

                    <div className="">
                        <div className="flex items-center gap-2.5 text-lg text-[#191919] font-semibold mb-6">
                            <div>
                                <svg width="10" height="32" viewBox="0 0 10 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H2C6.41828 0 10 3.58172 10 8V32H8C3.58172 32 0 28.4183 0 24V0Z" fill="#00CC99" />
                                </svg>
                            </div>
                            <div>
                                خریـــدی راحــت با خـــیال راحــت 🔥
                            </div>
                        </div>
                        <TitleWithBlue>
                              خرید   {categoryData.title}
                        </TitleWithBlue>

                        <div className="leading-7 mt-7 text-sm text-[#191919] opacity-50" dangerouslySetInnerHTML={{__html:categoryData.description}}></div>


                        <div className="flex sm:gap-6 gap-3 mt-10">
                            <Button flex size="auto" href={`/panel/foreign-payment#foreign-card-box-${categoryData.id}`}>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.001 1.75C14.5039 1.75023 16.5586 3.72671 16.6846 6.19922L16.6904 6.44043C16.6802 8.98325 14.6917 11.0387 12.1748 11.1201H12.1133C12.0439 11.1118 11.973 11.1138 11.9062 11.1191C9.27823 11.0326 7.31077 8.97391 7.31055 6.44043C7.31055 3.85657 9.41712 1.75 12.001 1.75ZM12.001 2.25C9.69483 2.25 7.81055 4.13429 7.81055 6.44043C7.81077 8.70973 9.58412 10.5406 11.8428 10.6201L11.9014 10.6221L11.9443 10.6123C11.9547 10.6118 11.9702 10.6123 11.9902 10.6123C12.0347 10.6123 12.0901 10.6141 12.1426 10.6182L12.1729 10.6211L12.2031 10.6191C14.3621 10.52 16.0698 8.79881 16.1846 6.65137L16.1904 6.44238V6.44043C16.1904 4.13443 14.3069 2.25023 12.001 2.25Z" fill="#292D32" stroke="white" />
                                        <path d="M12.1768 12.9375C13.945 12.9375 15.6888 13.3588 17.0459 14.1768L17.3115 14.3457H17.3125C18.5892 15.1968 19.2393 16.3165 19.2393 17.4805C19.2391 18.6466 18.5964 19.7744 17.3125 20.6338C15.9109 21.5682 14.0525 22.0498 12.1699 22.0498C10.4039 22.0498 8.65172 21.6267 7.29395 20.8047L7.02832 20.6348L7.02539 20.6328L6.79199 20.4707C5.66376 19.6435 5.09961 18.5926 5.09961 17.5C5.09961 16.3338 5.74261 15.2061 7.02637 14.3467C8.42784 13.4171 10.291 12.9376 12.1768 12.9375ZM12.1699 13.4453C10.5335 13.4453 8.87028 13.8244 7.55957 14.6113L7.30273 14.7744C6.25469 15.4731 5.5997 16.4295 5.59961 17.5098C5.59961 18.5822 6.26656 19.5379 7.30078 20.2246V20.2256C8.64713 21.1286 10.4239 21.5625 12.1699 21.5625C13.9158 21.5624 15.6918 21.1284 17.0381 20.2256L17.0371 20.2246C18.0847 19.526 18.7392 18.5702 18.7393 17.4902C18.7393 16.4169 18.0718 15.4603 17.0361 14.7734H17.0352C15.6892 13.8767 13.9147 13.4454 12.1699 13.4453Z" fill="#292D32" stroke="white" />
                                    </svg>
                                </div>
                                <div>
                                    ثبت سفارش
                                </div>
                            </Button>
                            <Button flex href='/faq' outline={'blue'} size="auto">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 2.68018C5.60011 2.68018 4.40241 3.13519 3.55371 3.98389C2.70509 4.83257 2.25 6.03035 2.25 7.43018V13.4302C2.25004 14.83 2.70505 16.0278 3.55371 16.8765C4.4024 17.7251 5.60016 18.1802 7 18.1802C7.13386 18.1802 7.25 18.2963 7.25 18.4302V20.5601C7.25003 20.9526 7.51615 21.1444 7.62305 21.2085C7.76644 21.2945 8.02108 21.3695 8.29199 21.2534L8.4082 21.1919L8.41699 21.186L12.8672 18.2261C12.912 18.1962 12.9666 18.1802 13.0098 18.1802H17.0098C18.4095 18.1802 19.6074 17.725 20.4561 16.8765C21.3047 16.0278 21.7597 14.83 21.7598 13.4302V7.43018C21.7598 6.03028 21.3047 4.83258 20.4561 3.98389C19.6074 3.13519 18.4097 2.68018 17.0098 2.68018H7ZM6.75 18.6987L6.30078 18.6528C4.90384 18.5094 3.77458 17.9283 2.99316 17.0405C2.21101 16.1519 1.75001 14.9243 1.75 13.4399V7.43994C1.75 5.83448 2.28679 4.5301 3.18848 3.62842C4.09016 2.72673 5.39454 2.18994 7 2.18994H17C18.6055 2.18994 19.9098 2.72673 20.8115 3.62842C21.7132 4.5301 22.25 5.83448 22.25 7.43994V13.4399C22.25 15.0454 21.7132 16.3498 20.8115 17.2515C19.9098 18.1531 18.6054 18.6899 17 18.6899H13.0781L8.69238 21.6138C8.485 21.7487 8.24184 21.8198 8 21.8198C7.85093 21.8198 7.6962 21.7922 7.5498 21.7358L7.40723 21.6694L7.40332 21.6675L7.25977 21.5786C6.94318 21.3495 6.75 20.9726 6.75 20.5698V18.6987Z" fill="currentColor" stroke="currentColor" />
                                        <path d="M12 6.60999C13.0538 6.61008 13.9102 7.46633 13.9102 8.52014C13.9101 9.37615 13.2924 9.81395 12.9824 10.024C12.7752 10.1622 12.5853 10.3107 12.4521 10.4967C12.3023 10.706 12.25 10.9249 12.25 11.15V11.36C12.25 11.4994 12.1381 11.6099 12 11.61C11.8661 11.61 11.75 11.4938 11.75 11.36V11.15C11.75 10.2718 12.3791 9.83468 12.7031 9.61194L12.7021 9.61096C12.8998 9.47718 13.0817 9.33362 13.21 9.15491C13.3541 8.95386 13.4101 8.7416 13.4102 8.52014C13.4102 7.7441 12.7761 7.11009 12 7.10999C11.2238 7.10999 10.5898 7.74404 10.5898 8.52014C10.5898 8.65395 10.4737 8.77014 10.3398 8.77014C10.206 8.77014 10.0899 8.65395 10.0898 8.52014C10.0898 7.46627 10.9462 6.60999 12 6.60999Z" fill="#292D32" stroke="currentColor" />
                                        <path d="M12 13.6C12.1339 13.6 12.25 13.7161 12.25 13.85C12.25 13.9882 12.1395 14.1 12 14.1C11.8605 14.1 11.75 13.9882 11.75 13.85C11.75 13.7161 11.8661 13.6 12 13.6Z" fill="currentColor" stroke="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    سوالات متداول
                                </div>
                            </Button>
                        </div>
                    </div>

                    <div className="relative md:mt-0 mt-7">
                        <img loading="lazy" fill  src={categoryData.media?.url} alt={categoryData.media?.title} className="w-full rounded-lg" />
                    </div>

                </div>
                <WhyBuy />

                <BuyAcconts categoryData={categoryData} category={categoryData.products} />
            </div>


            {/*<Faq />*/}

            <Comments />

            <div className="container">
                <Blogs />
            </div>

        </>
    );
}