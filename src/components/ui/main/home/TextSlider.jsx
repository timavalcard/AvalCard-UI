"use client"

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Button from '../../globals/Button';

const slides = [
    {
        id: 0,
        image: "/images/home-slide-1.png",
        title: "درآمد دلاریتو بی‌دردسر نقد کن!",
        des: "سریع، امن و بدون دردسر",
        link: '/currency-income'
    },
    {
        id: 1,
        image: "/images/home-slide-2.png",
        title: "هرچی می‌خوای از هرجا بخواه!",
        des: "از پرداخت تا تحویل با ما",
        link: '/buy-deliver-iran'
    },
    {
        id: 2,
        image: "/images/home-slide-3.png",
        title: "از ChatGPT تا Adobe",
        des: "هر اشتراکی خواستی رو برات می‌گیریم!",
        link: "/foreign-payment"
    },
    {
        id: 4,
        image: "/images/home-slide-4.png",
        title: "گیفت کارت گوگل‌پلی، نتفلیکس یا اسپاتیفای؟",
        des: "فقط چند کلیک باهات فاصله دارن",
        link: '/gift-card'
    },
];

export default function TextSlider() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const [maxHeight, setMaxHeight] = useState(0);
    const slideRefs = useRef([]);

    useEffect(() => {
        if (slideRefs.current.length) {
            const heights = slideRefs.current.map(ref => ref?.offsetHeight || 0);
            const tallest = Math.max(...heights);
            setMaxHeight(tallest);
        }
    }, []);

    return (
        <div className="container">

            <div className="md:flex flex-1 items-center gap-6">

                <div className="cursor-pointer md:block hidden space-y-1 md:-mt-[4.6rem]">
                    {slides.map((slide, index) => (
                        <>
                            {index === activeIndex ?
                                <svg width="7" height="20" className='duration-1000 FadeInAnimate' viewBox="0 0 7 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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


                <div style={{ height: maxHeight }} className="w-full overflow-hidden transition-all duration-500">
                    <Swiper
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        slidesPerView={1}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                        }}
                        autoplay={{
                            delay: 2100,
                            disableOnInteraction: false,
                            duration: 2000
                        }}
                        spaceBetween={0}
                        direction="vertical"
                        speed={1500}
                        observer={true}
                        observeParents={true}
                        autoHeight={true}
                    >
                        {slides.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <div ref={el => (slideRefs.current[index] = el)} className='grid w-full md:grid-cols-12 grid-cols-1 items-center grid-rows-1'>
                                    <figure className="md:col-span-5 lg:col-span-6 md:text-right text-center md:py-0 pt-7 order-2 md:order-1">

                                        <div className="font-bold text-2xl text-[#191919]">
                                            {item.title}
                                        </div>

                                        <div className="text-[#464646] font-semibold text-2xl">
                                            {item.des}
                                        </div>

                                        <div className="mt-6  md:text-right text-center">
                                            <Button href={item.link} color="blue" className={'!flex md:mx-0 mx-auto justify-center gap-2 text-white !w-auto !px-6 !rounded-[100px]'} size="lg">
                                                <div>
                                                    ثبت درخواست
                                                </div>
                                                <div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white" />
                                                        <path d="M13.2599 16.28C13.0699 16.28 12.8799 16.21 12.7299 16.06L9.19992 12.53C8.90992 12.24 8.90992 11.76 9.19992 11.47L12.7299 7.93997C13.0199 7.64997 13.4999 7.64997 13.7899 7.93997C14.0799 8.22997 14.0799 8.70997 13.7899 8.99997L10.7899 12L13.7899 15C14.0799 15.29 14.0799 15.77 13.7899 16.06C13.6499 16.21 13.4599 16.28 13.2599 16.28Z" fill="white" />
                                                    </svg>
                                                </div>

                                            </Button>
                                        </div>
                                    </figure>
                                    <figure className="md:col-span-7 lg:col-span-6 relative z-20 order-1 md:order-2">
                                        <img
                                            className="w-full h-full object-cover rounded-2xl"
                                            src={item.image}
                                            width="400"
                                            height="400"
                                            alt="اول کارت"
                                            priority
                                        />
                                    </figure>
                                </div>
                            </SwiperSlide>
                        ))
                        }

                    </Swiper>
                </div>

                <div className="cursor-pointer md:hidden mt-6 justify-center gap-x-4 flex">
                    {slides.map((slide, index) => (
                        <>
                            {index === activeIndex ?
                                <svg width="10" className='rotate-90 duration-1000 -mt-2.5 FadeInAnimate mr-px' viewBox="0 0 7 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="19.2222" width="18.3333" height="6.11111" rx="3.05556" transform="rotate(-90 0 19.2222)" fill="#3F5AEF" />
                                </svg>
                                :
                                <svg
                                    key={slide.id}
                                    onClick={() => swiperInstance && swiperInstance.slideTo(index)}
                                    width="9" height="9" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" y="6.11111" width="6.11111" height="6.11111" rx="3.05556" transform="rotate(-90 0 6.11111)" fill="black" />
                                </svg>}
                        </>
                    ))}
                </div>

            </div>
        </div>
    )
}