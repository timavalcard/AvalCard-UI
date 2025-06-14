import BreadcrumpLanding from "@/components/layout/BreadcrumpLanding";
import TitleWithBlue from "@/components/layout/TitleWithBlue";
import Image from "next/image";
import Link from "next/link";
import Suggestions from "./Suggestions";
import Order from "./Order";
import GiftCards from "./GiftCards";
import Faq from "@/components/ui/main/Faq";
import Comments from "@/components/ui/main/Comments";
import {fetchProduct} from "../../../../../helpers/api/product";
import { notFound } from 'next/navigation'
import fetchPageContent from "../../../../../helpers/api/page-detail";
import Button from "@/components/ui/globals/Button";
import SchemaProduct from "../../../../../components/layout/Schema/SchemaProduct";

export async function generateMetadata({ params }) {
    const { id } = params;
    const {product,related_products} = await fetchProduct(id);
    if (!product) {
        notFound();

    }
    return {
        title: product.meta_title,
        description: product.meta_description,
        robots: `${product.meta_follow}, ${product.meta_index}`,
        openGraph: {
            locale: "fa_IR",
            type: "website",
            title: product.meta_title,
            description: product.meta_description,
            url: product.url,
            siteName: "اول کارت",
            updatedTime: product.updated_at,
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
            title: product.meta_title,
            description: product.meta_description,
        },
        alternates: {
            canonical: product.url,  // اضافه کردن URL canonical به متاداده‌ها
        }
    };
}



export default async function page({params}) {
    const { id } = params;
    const {product,related_products} = await fetchProduct(id);
    if (!product) {
        notFound();
    }

    const bredcrump = [
        {
            title: 'گیفت کارت ها',
            href: '/gift-card',
        },
        {
            title: product.category[0]?.title,
            href: product.category[0]?.url,
        },
        {
            title: product.title,
            href: '#'
        }
    ]
    return (
        <div>
            <SchemaProduct  product={product}/>
            <div className="container">
                <BreadcrumpLanding items={bredcrump} />
                <div className="grid md:grid-cols-12 grid-cols-1 gap-10 items-stretch mt-5">

                    <div className="md:col-span-7">
                        <h1 className="text-3xl text-[#191919] font-bold">{product.title}</h1>
                        <p className="text-blue-custom mt-7 text-lg font-semibold">در کوتاه‌ترین زمان و به صورت فوری تیم ما گیفت کارت شما را فعال می‌کند</p>
                        <p className="leading-8 mt-7 text-sm" dangerouslySetInnerHTML={{__html:product.content}}></p>

                        <div className="flex sm:gap-6 gap-3 mt-10">
                            <Button href={product.url} flex size="auto">
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
                            <Button flex href='#faq' outline={'blue'} size="auto">
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
                       {/* <div className="relative w-full grid sm:grid-cols-3 grid-cols-1 gap-y-8 mt-7 bg-blue-light rounded-lg py-6 xl:px-7 px-4">
                            <section className="">
                                <header className="flex gap-1.5">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="4" fill="#3664FF" />
                                        <path d="M21.034 17.2916C20.684 17.6333 20.484 18.125 20.534 18.65C20.609 19.55 21.434 20.2083 22.334 20.2083H23.9173V21.2C23.9173 22.925 22.509 24.3333 20.784 24.3333H12.359C12.6173 24.1166 12.8423 23.85 13.0173 23.55C13.3256 23.05 13.5007 22.4583 13.5007 21.8333C13.5007 19.9916 12.009 18.5 10.1673 18.5C9.38398 18.5 8.65898 18.775 8.08398 19.2333V15.5917C8.08398 13.8667 9.49231 12.4583 11.2173 12.4583H20.784C22.509 12.4583 23.9173 13.8667 23.9173 15.5917V16.7917H22.234C21.7673 16.7917 21.3423 16.975 21.034 17.2916Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.08398 16.3416V12.5334C8.08398 11.5417 8.69231 10.6583 9.61731 10.3083L16.234 7.80832C17.2673 7.41666 18.3757 8.18335 18.3757 9.29168V12.4583" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M24.7997 17.6418V19.3585C24.7997 19.8168 24.433 20.1918 23.9663 20.2085H22.333C21.433 20.2085 20.608 19.5501 20.533 18.6501C20.483 18.1251 20.683 17.6335 21.033 17.2918C21.3413 16.9751 21.7663 16.7918 22.233 16.7918H23.9663C24.433 16.8085 24.7997 17.1834 24.7997 17.6418Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.834 16H17.6673" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.5007 21.8333C13.5007 22.4583 13.3256 23.05 13.0173 23.55C12.8423 23.85 12.6173 24.1167 12.359 24.3333C11.7757 24.8583 11.009 25.1667 10.1673 25.1667C8.95065 25.1667 7.89232 24.5167 7.31732 23.55C7.00899 23.05 6.83398 22.4583 6.83398 21.8333C6.83398 20.7833 7.31732 19.8417 8.08398 19.2333C8.65898 18.775 9.38398 18.5 10.1673 18.5C12.009 18.5 13.5007 19.9917 13.5007 21.8333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.86914 21.8329L9.69413 22.6579L11.4691 21.0163" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="border border-black border-opacity-50 px-2 rounded grid items-center justify-center text-xs opacity-50">
                                        وضعیت کارت
                                    </div>
                                </header>
                                <div className="border border-black rounded py-1.5 px-2 inline-flex w-fit mt-3 text-xs font-semibold">
                                    موجود
                                </div>
                            </section>
                            <section className="">
                                <header className="flex gap-1.5">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="4" fill="#3664FF" />
                                        <path d="M13.0827 21.8334H18.916C20.8577 21.8334 21.8327 20.8584 21.8327 18.9167V13.0834C21.8327 11.1417 20.8577 10.1667 18.916 10.1667H13.0827C11.141 10.1667 10.166 11.1417 10.166 13.0834V18.9167C10.166 20.8584 11.141 21.8334 13.0827 21.8334Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.3327 7.66669H12.666" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.3327 24.3333H12.666" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.584 13.9167V16.4167H18.084" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div className="border border-black border-opacity-50 px-2 rounded grid items-center justify-center text-xs opacity-50">
                                        تحویل گیفت کارت
                                    </div>
                                </header>
                                <div className="border border-black rounded py-1.5 px-2 inline-flex w-fit mt-3 text-xs font-semibold">
                                    به صورتی فوری
                                </div>
                            </section>
                            <section className="">
                                <header className="flex gap-1.5">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="4" fill="#3664FF" />
                                        <path d="M13.2266 17.9415C13.2266 19.0165 14.0516 19.8832 15.0766 19.8832H17.1682C18.0599 19.8832 18.7849 19.1248 18.7849 18.1915C18.7849 17.1748 18.3432 16.8165 17.6849 16.5832L14.3266 15.4165C13.6682 15.1832 13.2266 14.8248 13.2266 13.8082C13.2266 12.8748 13.9516 12.1165 14.8432 12.1165H16.9349C17.9599 12.1165 18.7849 12.9832 18.7849 14.0582" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 11V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.9993 24.3334C20.6017 24.3334 24.3327 20.6024 24.3327 16C24.3327 11.3976 20.6017 7.66669 15.9993 7.66669C11.397 7.66669 7.66602 11.3976 7.66602 16C7.66602 20.6024 11.397 24.3334 15.9993 24.3334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div className="border border-black border-opacity-50 px-2 rounded grid items-center justify-center text-xs opacity-50">
                                        ارائه  تا مبلغ
                                    </div>
                                </header>
                                <div className="border border-black rounded py-1.5 px-2 inline-flex w-fit mt-3 text-xs font-semibold">
                                    80،000 تومان تا 4،000،000 تومان
                                </div>
                            </section>
                        </div>*/}
                    </div>

                    <div className="md:col-span-5">
                        <div className="relative xl:min-h-96 min-h-72 w-full">
                            <Image fill src={product.media?.url} alt={product.media?.title} className="object-cover rounded-lg" />
                        </div>
                        {/*<Link href={'/contact-us'} className="flex items-center text-blue-custom font-semibold gap-2 justify-center pt-3">
                            <div>
                                اگر هنوز گیفت کارتت فعال نشده کلیک کن
                            </div>
                            <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 23.25H9C3.57 23.25 1.25 20.93 1.25 15.5V9.5C1.25 4.07 3.57 1.75 9 1.75H15C20.43 1.75 22.75 4.07 22.75 9.5V15.5C22.75 20.93 20.43 23.25 15 23.25ZM9 3.25C4.39 3.25 2.75 4.89 2.75 9.5V15.5C2.75 20.11 4.39 21.75 9 21.75H15C19.61 21.75 21.25 20.11 21.25 15.5V9.5C21.25 4.89 19.61 3.25 15 3.25H9Z" fill="#292D32" />
                                    <path d="M13.2599 16.78C13.0699 16.78 12.8799 16.71 12.7299 16.56L9.19992 13.03C8.90992 12.74 8.90992 12.26 9.19992 11.97L12.7299 8.43997C13.0199 8.14997 13.4999 8.14997 13.7899 8.43997C14.0799 8.72997 14.0799 9.20997 13.7899 9.49997L10.7899 12.5L13.7899 15.5C14.0799 15.79 14.0799 16.27 13.7899 16.56C13.6499 16.71 13.4599 16.78 13.2599 16.78Z" fill="#292D32" />
                                </svg>
                            </div>
                        </Link>*/}
                    </div>

                </div>


            </div>


           {/* <Suggestions />*/}


            <div className="container">

                <Order product={product} />

                <GiftCards related_products={related_products} id={product.id} />

            </div>


            <Faq  questions={product.faq}  />

            <Comments />

        </div>
    );
}