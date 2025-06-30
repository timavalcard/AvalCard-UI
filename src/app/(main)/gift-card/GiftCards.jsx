'use client'

import TitleWithBlue from "@/components/layout/TitleWithBlue";
import SwiperGlobal from "@/components/layout/main/SwiperGlobal";
import More2 from "@/components/ui/globals/More2";
import { fetchRecentProducts } from "@/helpers/api/recent-products";
import { useEffect, useState } from "react";

export default function GiftCards() {

    
    const [giftCards, setGiftCards] = useState([]);

    const [orderBy, setOrderBy] = useState('best_seller')

    useEffect(() => {
        const getGiftCards = async () => {
            const res = await fetchRecentProducts(12, "gift_cart");
            setGiftCards(res);
        };

        getGiftCards();
    }, [orderBy]);

    return (
        <div className="pt-10">
            <div className="xl:flex grid xl:justify-between xl:gap-0 gap-6 !items-center my-12">
                <div>
                    <TitleWithBlue blue={'خرید انواع گیفت کارت'} className='!my-0'>
                        ها با قیمت مناسب
                    </TitleWithBlue>
                    <div className="text-[#191919] opacity-50 mt-5">
                    دسترسی سریع و مطمئن به انواع گیفت‌کارت‌های معتبر دنیا با قیمتی منصفانه؛ ویژه کاربرانی که به کیفیت، سرعت و پشتیبانی اهمیت می‌دهند.
                    </div>
                </div>

                {/* <div className="flex items-center gap-2.5">
                    {
                        [{ title: 'پرفروش ترین', value: 'best_seller' }, { title: 'جدید ترین', value: 'newest' }, { title: 'ارزان ترین', value: 'cheapest' }, { title: 'گران ترین', value: 'most_expensive' }].map((item, index) => (
                            <div className={`${item.value === orderBy ? 'text-blue-custom font-semibold' : 'text-[#191919] opacity-50'}  text-sm cursor-pointer hover:opacity-100 transition-all `} onClick={() => setOrderBy(item.value)}>
                                {item.title}
                            </div>
                        ))
                    }
                </div> */}

                {/*<div className="">
                    <More2 href="/panel/gift-cards" />
                </div>*/}
            </div>

            <SwiperGlobal baseUrl={"gift-card"} items={giftCards} />
            

        </div>
    );
}