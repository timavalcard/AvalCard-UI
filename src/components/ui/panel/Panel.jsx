import Card from '@/components/ui/globals/card/Card'
import More from '@/components/ui/globals/More'
import styles from './Panel.module.css'
import Products from './home/Products'
import SuggestedServices from './home/SuggestedServices'
import Services from './home/Services'
import GiftCards from './home/GiftCards'
import { fetchRecentArticles } from "../../../helpers/api/recent-articles";
import Link from "next/link"
import { useMemo } from 'react'
import {fetchRecentProducts} from "../../../helpers/api/recent-products";
export default async function Panel() {
    const { data: articles } = await fetchRecentArticles(3);
    const buy_products = await fetchRecentProducts(10, "buy_product");

    function decodeHtmlEntities(str) {
        if (!str) return '';

        const entities = {
            '&zwnj;': '',
            '&nbsp;': ' ',
            '&hellip;': '…',
            '&amp;': '&',
            '&quot;': '"',
            '&lt;': '<',
            '&gt;': '>',
            // میتونی اینجا هرچی لازم داشتی اضافه کنی
        };

        return str.replace(/&[a-z]+;/g, (entity) => entities[entity] || '');
    }

    function cleanHtml(html) {
        if (!html) return '';

        const textOnly = html.replace(/<\/?[^>]+(>|$)/g, '');
        const decodedText = decodeHtmlEntities(textOnly);
        return decodedText.replace(/[\u200C\u200B\uFEFF]/g, '').trim();
    }

    function trimExcerpt(text, maxLength = 90) {
        if (text.length <= maxLength) return text;

        let trimmed = text.slice(0, maxLength);

        // اگر در حال بریدن وسط کلمه باشیم، برمیگردیم به آخرین فاصله
        const lastSpace = trimmed.lastIndexOf(' ');
        if (lastSpace > 0) {
            trimmed = trimmed.slice(0, lastSpace);
        }

        return trimmed + '...';
    }



    return (
        <div className={`my-8`}>
            <div className={`bg-blue-custom ${styles.box}`}></div>

            <div className={`grid lg:grid-cols-12 grid-cols-1 gap-y-6 mt-custom-4`}>

                <Products />

                <SuggestedServices />
            </div>

           {/* <Services />*/}


            {/*<div className='mt-custom-4 relative'>
                <img loading="lazy" src="/images/img3.webp" alt="" className={'w-full h-full object-fill min-h-28 rounded-2xl'} />
                <div className={`grid justify-center items-center absolute ${styles.boxBtnDetails}`}>
                    <p className='text-[#FFFFFF] font-bold text-[1.5rem]'>هم اکنون <span className='text-blue-custom'>تجارت</span> کنید</p>
                    <button className={`${styles.btnDetails} mx-auto text-sm !w-[138px] text-very-bold bg-blue-custom text-[#FFFFFF] py-2 rounded-[10px] mt-3`}>مشاهده
                        جزئیات
                    </button>
                </div>
            </div>*/}

            <GiftCards />

            <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[20px] gap-[12px] mt-custom-4 justify-center items-center'>

                {buy_products && buy_products.length > 0 && buy_products.map(item=>{
                    return(
                        <Link href={item.url}>
                            <div className={`${styles.boxAmazoneCard} border border-transparent transition-all duration-300 hover:border-blue-custom`}>
                                <div className='grid justify-center items-center'>
                                    <img loading="lazy" src="/images/car.webp" alt="" />
                                </div>
                                <div className={`text-center`}>
                                    <p className={`Largest-text-little-bold text-[#464646]`}>خرید مستقیم از {item.title}</p>
                                    <p className={`text-[0.625rem] mt-1.5 text-[#959595]`}>با بهترین قیمت محصول مورد</p>
                                    <p className='text-[0.625rem] text-[#959595]'>علاقه خود را سفارش دهید</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}


            </div>

            <div className={`mt-custom-4 section`}>
                <div className={`flex huge-text-little-bold justify-between items-center`}>
                    <p className={` text-[#2E2E2E]`}>اخبار پیشنهادی</p>
                    <More href='/mag' />
                </div>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {articles.length > 0 && articles.map(item => {

                        const excerptText = cleanHtml(item.excerpt);
                        const trimmedExcerpt = trimExcerpt(excerptText);

                        return (
                            <div className={`${styles.news}`}>
                                <Link href={item.url}>
                                    <div className='grid justify-center items-center'>
                                        <img loading="lazy" src={item.media?.url} className={"w-full max-h-[210px] md:h-[210px] object-cover rounded-[20px]"} alt={item.media?.title} />
                                    </div>
                                    <div className='flex justify-start gap-[22px] mt-5'>
                                        <div className='flex'>
                                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 1.59521C7 1.04293 6.55228 0.595215 6 0.595215C5.44772 0.595215 5 1.04293 5 1.59521H7ZM5 5.59521C5 6.1475 5.44772 6.59521 6 6.59521C6.55228 6.59521 7 6.1475 7 5.59521H5ZM15 1.59521C15 1.04293 14.5523 0.595215 14 0.595215C13.4477 0.595215 13 1.04293 13 1.59521H15ZM13 5.59521C13 6.1475 13.4477 6.59521 14 6.59521C14.5523 6.59521 15 6.1475 15 5.59521H13ZM10 14.5952C9.44771 14.5952 9 15.0429 9 15.5952C9 16.1475 9.44771 16.5952 10 16.5952V14.5952ZM10.01 16.5952C10.5623 16.5952 11.01 16.1475 11.01 15.5952C11.01 15.0429 10.5623 14.5952 10.01 14.5952V16.5952ZM14 14.5952C13.4477 14.5952 13 15.0429 13 15.5952C13 16.1475 13.4477 16.5952 14 16.5952V14.5952ZM14.01 16.5952C14.5623 16.5952 15.01 16.1475 15.01 15.5952C15.01 15.0429 14.5623 14.5952 14.01 14.5952V16.5952ZM6 14.5952C5.44772 14.5952 5 15.0429 5 15.5952C5 16.1475 5.44772 16.5952 6 16.5952V14.5952ZM6.01 16.5952C6.56228 16.5952 7.01 16.1475 7.01 15.5952C7.01 15.0429 6.56228 14.5952 6.01 14.5952V16.5952ZM4 4.59521H16V2.59521H4V4.59521ZM18 6.59521V18.5952H20V6.59521H18ZM16 20.5952H4V22.5952H16V20.5952ZM2 18.5952V6.59522H0V18.5952H2ZM4 20.5952C2.89543 20.5952 2 19.6998 2 18.5952H0C0 20.8044 1.79086 22.5952 4 22.5952V20.5952ZM18 18.5952C18 19.6998 17.1046 20.5952 16 20.5952V22.5952C18.2091 22.5952 20 20.8044 20 18.5952H18ZM16 4.59521C17.1046 4.59521 18 5.49065 18 6.59521H20C20 4.38608 18.2091 2.59521 16 2.59521V4.59521ZM4 2.59521C1.79086 2.59521 0 4.38608 0 6.59522H2C2 5.49065 2.89543 4.59521 4 4.59521V2.59521ZM1 10.5952H19V8.59521H1V10.5952ZM5 1.59521V5.59521H7V1.59521H5ZM13 1.59521V5.59521H15V1.59521H13ZM10 16.5952H10.01V14.5952H10V16.5952ZM14 16.5952H14.01V14.5952H14V16.5952ZM6 16.5952H6.01V14.5952H6V16.5952Z"
                                                    fill="#959595" />
                                            </svg>
                                            <p className='Largest-text-little-bold mr-2 text-[#959595]'>{item.created_at}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <svg height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 22L1.0149 21.828C0.958852 22.149 1.06274 22.4772 1.29331 22.7075C1.52387 22.9378 1.85219 23.0413 2.17315 22.9849L2 22ZM2.98825 16.3399L3.97335 16.5119C4.00957 16.3044 3.97937 16.0908 3.88707 15.9015L2.98825 16.3399ZM7.64977 21.0067L8.09226 20.11C7.90163 20.0159 7.68599 19.985 7.47662 20.0218L7.64977 21.0067ZM8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15V13ZM16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13V15ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11V9ZM13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9V11ZM21 12C21 16.9706 16.9706 21 12 21V23C18.0751 23 23 18.0751 23 12H21ZM3 12C3 7.02944 7.02944 3 12 3V1C5.92487 1 1 5.92487 1 12H3ZM12 3C16.9706 3 21 7.02944 21 12H23C23 5.92487 18.0751 1 12 1V3ZM2.9851 22.172L3.97335 16.5119L2.00315 16.1679L1.0149 21.828L2.9851 22.172ZM2.17315 22.9849L7.82292 21.9916L7.47662 20.0218L1.82685 21.0151L2.17315 22.9849ZM3.88707 15.9015C3.3093 14.7168 3 13.419 3 12H1C1 13.7209 1.37767 15.3186 2.08943 16.7782L3.88707 15.9015ZM12 21C10.5626 21 9.28323 20.6976 8.09226 20.11L7.20728 21.9035C8.68139 22.6309 10.2646 23 12 23V21ZM8 15H16V13H8V15ZM8 11H13V9H8V11Z" fill="#959595" />
                                            </svg>
                                            <p className='Largest-text-little-bold mr-2 text-[#959595]'>{item.comment_count} نظر</p>
                                        </div>
                                    </div>
                                    <div className={`text-start mt-2`}>
                                        <p className="Largest-text-little-bold text-[#464646]">{trimmedExcerpt}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }


                </div>
            </div>
        </div>
    )
}