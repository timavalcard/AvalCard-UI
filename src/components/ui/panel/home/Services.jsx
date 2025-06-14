"use client"

import { useState } from 'react';
import More from '../../globals/More';
import styles from '../Panel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import SwiperRightArrow from '@/components/layout/swiper/SwiperRightArrow';
import SwiperLeftArrow from '@/components/layout/swiper/SwiperLeftArrow';
import SwiperDots from '@/components/layout/swiper/SwiperDots';

export default function Services() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const slides = [
        {
            id: 0,
            image: "/images/boat.webp",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
        {
            id: 1,
            image: "/images/boat.webp",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
        {
            id: 2,
            image: "/images/boat.webp",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
            pro: true
        },
        {
            id: 3,
            image: "/images/boat.webp",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
        {
            id: 4,
            image: "/images/boat.webp",
            title: "پکیج اکانت وریفای شده",
            subtitle: "G2G+پی پال+سرور مجازی",
        },
    ];

    return (
        <div className={`${styles.services} mt-custom-4 section grid grid-cols-1 !pb-4`}>

            <div className={`flex justify-between items-center huge-text-little-bold`}>
                <div className={`text-[#2E2E2E]`}>سرویس ها</div>
                <More />
            </div>

            <div className='relative px-5'>
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

                    spaceBetween={5}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        768: { slidesPerView: 4 },
                    }}
                    className='!p-1 !w-full'

                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <div className='flex items-center border border-transparent transition-all duration-300 hover:border-blue-custom rounded-2xl py-3 pr-1.5'>
                                <Image width={35} height={35} src={slide.image} alt="" />
                                <p className='text-very-bold mr-2'>
                                    {slide.title}
                                </p>
                            </div>
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
    );
}