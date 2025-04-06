"use client"

import { useState } from 'react';
import More from '../../globals/More';
import styles from '../Panel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import SwiperRightArrow from '@/components/layout/swiper/SwiperRightArrow';
import SwiperLeftArrow from '@/components/layout/swiper/SwiperLeftArrow';
import SwiperDots from '@/components/layout/swiper/SwiperDots';
import Card from '../../globals/card/Card';

export default function GiftCards() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            id: 0,
            image: "/images/boat.svg",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
        {
            id: 1,
            image: "/images/boat.svg",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
        {
            id: 2,
            image: "/images/boat.svg",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
            pro: true
        },
        {
            id: 3,
            image: "/images/boat.svg",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
        {
            id: 4,
            image: "/images/boat.svg",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
    ];

    return (
        <div className={`${styles.giftCard} mt-custom-4 section grid grid-cols-1 !pb-4`}>

            <div className={`flex huge-text-little-bold  justify-between items-center`}>
                <div className={`text-[#2E2E2E]`}>گیفت کارت</div>
                <More />
            </div>

            <div className='relative'>
                <Swiper
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
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
                            <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <SwiperRightArrow className="!-right-5" swiperInstance={swiperInstance} />
                <SwiperLeftArrow className="!-left-5" swiperInstance={swiperInstance} />

            </div>
            <div className="flex gap-1.5 justify-center items-center mt-custom-2">
                <SwiperDots slides={slides} activeIndex={activeIndex} swiperInstance={swiperInstance} />
            </div>
        </div>
    );
}