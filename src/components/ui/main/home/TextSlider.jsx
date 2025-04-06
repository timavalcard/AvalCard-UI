"use client"

import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
    {
        id: 0,
        image: "/images/apple.svg",
        title: "پکیج اکانت وریفای شده",
        date: "1 الی 5 ساعت",
    },

    {
        id: 1,
        image: "/images/apple.svg",
        title: "پکیج اکانت وریفای شده",
        date: "1 الی 5 ساعت",
    },

    {
        id: 2,
        image: "/images/apple.svg",
        title: "پکیج اکانت وریفای شده",
        date: "1 الی 5 ساعت",
    },

    {
        id: 3,
        image: "/images/apple.svg",
        title: "پکیج اکانت وریفای شده",
        date: "1 الی 5 ساعت",
    },

    {
        id: 4,
        image: "/images/apple.svg",
        title: "پکیج اکانت وریفای شده",
        date: "1 الی 5 ساعت",
    },

];

export default function TextSlider() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="flex items-center gap-6">

            <div className="cursor-pointer space-y-1">
                {slides.map((slide, index) => (
                    <>
                        {index === activeIndex ?
                            <svg width="7" height="20" viewBox="0 0 7 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="19.2222" width="18.3333" height="6.11111" rx="3.05556" transform="rotate(-90 0 19.2222)" fill="#3F5AEF" />
                            </svg>
                            :
                            <svg
                                key={slide.id}
                                onClick={() => swiperInstance && swiperInstance.slideTo(index)}
                                width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" y="6.11111" width="6.11111" height="6.11111" rx="3.05556" transform="rotate(-90 0 6.11111)" fill="black" />
                            </svg>}
                    </>
                ))}
            </div>


            <div className=''>
                <Swiper
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    slidesPerView={1}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                    }}
                    spaceBetween={0}
                    direction="vertical"
                    className='!max-h-24'
                >
                    {
                        slides.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="font-bold text-2xl  w-80">
                                    <span className="text-blue-custom"> خرید از وبسایت </span> های دنیا با اول کارت ، با ما دیگه در دنیای دیجیتال محدود نیستی!
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>




        </div>
    )
}