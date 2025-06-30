"use client"

import { useState,useEffect  } from 'react';
import More from '../../globals/More';
import styles from '../Panel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import SwiperRightArrow from '@/components/layout/swiper/SwiperRightArrow';
import SwiperLeftArrow from '@/components/layout/swiper/SwiperLeftArrow';
import SwiperDots from '@/components/layout/swiper/SwiperDots';
import {fetchRecentProducts} from "../../../../helpers/api/recent-products";
import Link from "next/link"
export default function Products() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const [buyProducts, setBuyProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const buy_products = await fetchRecentProducts(10);
            setBuyProducts(buy_products);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={`lg:col-span-8 section `}>

                <div className={`flex justify-between items-center huge-text-little-bold`}>
                    <div className={`!mb-0 text-[#2E2E2E]`}>محصولات جدید</div>
                    {/*<More />*/}
                </div>

                <div className=''>
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
                            768: { slidesPerView: 3 },
                        }}
                        className='!p-1'

                    >
                        {buyProducts && buyProducts.length > 0 && buyProducts.map((slide, index) => (
                            <SwiperSlide key={slide.id}>
                                <Link href={slide.url}>
                                    <div className={`grid justify-center items-center py-10 px-3 border border-transparent transition-all duration-300 hover:border-blue-custom rounded-2xl`}>  {/* ${activeIndex === slide.id ? styles.boxProductSelect : styles.boxProduct} */}
                                        <div className="grid justify-center items-center">
                                            <img className="rounded-lg" loading="lazy" src={slide.media?.url} alt="" />
                                        </div>
                                        <div>
                                            <p className="text-little-bold mt-custom-2">{slide.title}</p>
                                            {/*<p className="text-little-bold">{slide.subtitle}</p>*/}
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {swiperInstance && buyProducts.length > swiperInstance.params.slidesPerView && (
                        <>
                            <SwiperRightArrow swiperInstance={swiperInstance} isBeginning={isBeginning} shadow />
                            <SwiperLeftArrow swiperInstance={swiperInstance} isEnd={isEnd} shadow />
                        </>
                    )}
                </div>

                {swiperInstance && buyProducts.length > swiperInstance.params.slidesPerView && (
                    <div className="flex gap-1.5 justify-center items-center mt-custom-2">
                        <SwiperDots slides={buyProducts} activeIndex={activeIndex} swiperInstance={swiperInstance} />
                    </div>
                )}
            </div>

        </>
    );
}