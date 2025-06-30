'use client'

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperDots from "@/components/layout/swiper/SwiperDots";
import GiftCardItem from "@/components/ui/globals/GiftCardItem";
import More from "@/components/ui/globals/More";

export default function SwiperGlobal({items,baseUrl="/"}) {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {items && <div>
                {swiperInstance && items.length > swiperInstance.params.slidesPerView && (
                    <div className="flex gap-1.5 justify-end items-center mb-5">
                        <SwiperDots width="12" slides={items} activeIndex={activeIndex} swiperInstance={swiperInstance} />
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

                    {items.length > 0 && items.map((card, index) => (
                        <SwiperSlide key={index}>
                            {card.category[0] && <GiftCardItem
                                img={card.media?.url}
                                title={card.title}
                                url={`${baseUrl}/${card.category[0].slug}/${card.slug}`}

                                date={card.created_at}
                            />}
                            {!card.category[0] && <GiftCardItem
                                img={card.media?.url}
                                title={card.title}
                                url={`${baseUrl}/${card.slug}`}

                                date={card.created_at}
                            />}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>}
        </>
    )
}