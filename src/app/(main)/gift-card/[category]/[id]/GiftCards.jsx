'use client'

import TitleWithBlue from "@/components/layout/TitleWithBlue";
import SwiperDots from "@/components/layout/swiper/SwiperDots";
import GiftCardItem from "@/components/ui/globals/GiftCardItem";
import More from "@/components/ui/globals/More";
import More2 from "@/components/ui/globals/More2";
import TitleBlue from "@/components/ui/globals/TitleBlue";
import { fetchRecentProducts } from "@/helpers/api/recent-products";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GiftCards({id,related_products}) {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [giftCards, setGiftCards] = useState([]);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        /*const getGiftCards = async () => {
            const res = await fetchRecentProducts(12, "gift_cart");
            const filtered = res.filter(item => item.id !== id); // این خط آیتم مورد نظر رو حذف می‌کنه
        };*/
            setGiftCards(related_products);

       // getGiftCards();
    }, []);

    return (
        <div className="pt-10">
            <div className="sm:flex grid gap-y-5 justify-between !items-center my-12">
                <div>
                    <TitleWithBlue blue={'گیفت کارت'} className='!my-0'>
                        های دیگر
                    </TitleWithBlue>
                    <div className="text-[#191919] opacity-50 mt-5">
                        شما میتوانید در این قسمت گیفت کارت های دیگر رامشاهده کنید
                    </div>
                </div>
                <div>
                    <More2 href="/gift-card" />
                </div>
            </div>

            {giftCards &&<div>
                {swiperInstance && giftCards.length > swiperInstance.params.slidesPerView && (
                    <div className="flex gap-1.5 justify-end items-center mb-5">
                        <SwiperDots width="12" slides={giftCards} activeIndex={activeIndex} swiperInstance={swiperInstance} />
                    </div>
                )}
                <Swiper
                    onSwiper={(swiper) => {
                        setSwiperInstance(swiper);
                        setIsBeginning(swiper.isBeginning);
                        swiper.on('slideChange', () => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        });
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        768: { slidesPerView: 4 },
                    }}
                >

                    {giftCards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <GiftCardItem
                                img={card.media?.url}
                                title={card.title}
                                url={`/gift-card/${card.category[0].slug}/${card.slug}`}

                                date={card.created_at}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>}

        </div>
    );
}