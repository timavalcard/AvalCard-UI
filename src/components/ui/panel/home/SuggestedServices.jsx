"use client"

import { useState,useEffect } from 'react';
import More from '../../globals/More';
import styles from '../Panel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperDots from '@/components/layout/swiper/SwiperDots';
import {fetchRecentProducts} from "../../../../helpers/api/recent-products";
import Link from "next/link"
export default function SuggestedServices() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const buy_products = await fetchRecentProducts(10,"inter_payment");
            setSlides(buy_products);
        };

        fetchData();
    }, []);
    return (
        <div className={`${styles.serviceBox} ${styles.section_sm}  items-center lg:col-span-4 !pl-[55px] mr-4`}>

            <div className={`flex huge-text-little-bold justify-between`}>
                <div className={``}>سرویس ها</div>
                <More href="/panel/foreign-payment" />
            </div>


            <div className='relative block overflow-hidden'>
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
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                    }}
                    className='!p-1 !h-60 '
                    direction="vertical"
                >
                    {
                        slides.map(item => (
                            <SwiperSlide key={item.id}>
                                <Link href={item.url}>
                                    <div className={`flex items-center justify-between px-3 border border-transparent transition-all duration-300 hover:border-blue-custom ${styles.boxesService}`}>
                                        <div className={'flex items-center'}>
                                            <img style={{width:72,height:50,objectFit:"cover"}} className="rounded-lg" loading="lazy" src={item.media?.url} alt="" />
                                            <p className={`text-very-bold mr-1 text-[#464646]`}>{item.title}</p>
                                        </div>
                                        <p className={` text-[#959595] ${styles.subTitleService}`}>{item.created_at}</p>
                                    </div>
                                </Link>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>




            {swiperInstance && slides.length > swiperInstance.params.slidesPerView && (
            <div className={`grid absolute items-center justify-center top-[50%] translate-y-[-50%] left-[15px] gap-[12px]`}>
                <div>
                    <svg className={`mt-4 cursor-pointer select-none ${isBeginning ? 'opacity-40' : ''}`} width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => swiperInstance && swiperInstance.slidePrev()}>
                        <path d="M1.35267 7.79397L7.04867 1.63865C7.72135 0.911713 8.81609 0.917231 9.48141 1.65091L15.1151 7.86334"
                            stroke="#DDDDDD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>

                <div className='grid justify-center mx-auto gap-[5px]'>
                    <SwiperDots slides={slides} swiperInstance={swiperInstance} activeIndex={activeIndex} />
                </div>
                <div>
                    <svg width="17" className={`cursor-pointer select-none ${isEnd ? 'opacity-40' : ''}`} height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => swiperInstance && swiperInstance.slideNext()}>
                        <path d="M15.1321 1.09698L9.46723 7.28094C8.79821 8.01126 7.70346 8.01126 7.03445 7.28094L1.36955 1.09698"
                            stroke="#DDDDDD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            )}

        </div>
    );
}