"use client"

import { useState, useEffect } from 'react';
import More from '../../globals/More';
import styles from '../Panel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '../../globals/card/Card';
import { fetchRecentProducts } from "../../../../helpers/api/recent-products";
import SwiperRightArrow from '@/components/layout/swiper/SwiperRightArrow';
import SwiperLeftArrow from '@/components/layout/swiper/SwiperLeftArrow';
import SwiperDots from '@/components/layout/swiper/SwiperDots';


export default function GiftCards() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slides, setSlides] = useState([]); // state to hold fetched data
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        // Fetching the data only once when component mounts
        const getSlides = async () => {
            const data = await fetchRecentProducts(10, "gift_cart");
            setSlides(data); // Set the fetched data to the state
        };

        getSlides();
    }, []); // Empty dependency array ensures it runs only once after the first render

    return (
        <>
            {slides.length > 0 && (
                <div className={`${styles.giftCard} mt-custom-4 section grid grid-cols-1 !pb-4`}>
                    <div className={`flex huge-text-little-bold justify-between items-center`}>
                        <div className={`text-[#2E2E2E]`}>گیفت کارت</div>
                        <More href={"/panel/gift-cards"} />
                    </div>

                    <div className='relative'>
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
                            className='!p-1 !w-full'
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={slide.id}>
                                    <Card alt={slide.media?.alt} url={slide.url} title={slide.title} text={slide.excerpt} img={slide.media?.url} />

                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {swiperInstance && slides.length > swiperInstance.params.slidesPerView && (
                            <>
                                <SwiperRightArrow className="!-right-5" swiperInstance={swiperInstance} isBeginning={isBeginning} shadow />
                                <SwiperLeftArrow className="!-left-5" swiperInstance={swiperInstance} isEnd={isEnd} shadow />
                            </>
                        )}
                    </div>

                    {swiperInstance && slides.length > swiperInstance.params.slidesPerView && (
                        <div className="flex gap-1.5 justify-center items-center mt-custom-2">
                            <SwiperDots slides={slides} activeIndex={activeIndex} swiperInstance={swiperInstance} />
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
