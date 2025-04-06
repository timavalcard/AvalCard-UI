"use client"

import { useState } from 'react';
import More from '../../globals/More';
import styles from '../Panel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import SwiperRightArrow from '@/components/layout/swiper/SwiperRightArrow';
import SwiperLeftArrow from '@/components/layout/swiper/SwiperLeftArrow';
import SwiperDots from '@/components/layout/swiper/SwiperDots';

export default function Products() {
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
        <>
            <div className={`col-span-8 section `}>

                <div className={`flex justify-between items-center huge-text-little-bold`}>
                    <div className={`!mb-0 text-[#2E2E2E]`}>محصولات جدید</div>
                    <More />
                </div>

                <div className=''>
                    <Swiper
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}

                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                        }}
                        className='!p-1'

                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={slide.id}>
                                <div className={`grid justify-center items-center py-10 px-3 ${slide.pro ? styles.boxProductSelect : styles.boxProduct}`}>  {/* ${activeIndex === slide.id ? styles.boxProductSelect : styles.boxProduct} */}
                                    <div className="grid justify-center items-center">
                                        <img src={slide.image} alt="" />
                                    </div>
                                    <div>
                                        <p className="text-little-bold">{slide.title}</p>
                                        <p className="text-little-bold">{slide.subtitle}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    <SwiperRightArrow swiperInstance={swiperInstance} />
                    <SwiperLeftArrow swiperInstance={swiperInstance} />
                </div>

                <div className="flex gap-1.5 justify-center items-center mt-custom-2">
                    <SwiperDots slides={slides} activeIndex={activeIndex} swiperInstance={swiperInstance} />
                </div>
            </div>

        </>
    );
}