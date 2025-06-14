"use client"

import { articlesData } from "@/constants/data";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from "../../../globals/ArticleCard";
import ArrowIcon from "../../../globals/arrows/ArrowIcon";
import { useState } from "react";
import TitleWithBorder from "@/components/layout/main/TitleWithBorder";

export default function Suggestions({articles}) {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <>
            {articles.length > 0 && <section className="mb-12">
                <TitleWithBorder>
                    مطالب مرتبط
                </TitleWithBorder>

                <div className={`relative ${swiperInstance && articles.length > swiperInstance.params.slidesPerView && ('mx-5')}`}>

                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.2}
                        onSwiper={(swiper) => {
                            setSwiperInstance(swiper);
                            setIsBeginning(swiper.isBeginning);
                            swiper.on('slideChange', () => {
                                setIsBeginning(swiper.isBeginning);
                                setIsEnd(swiper.isEnd);
                            });
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {articles.length > 0 && articles.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ArticleCard data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {swiperInstance && articles.length > swiperInstance.params.slidesPerView && (
                    <div className="">
                        <div
                            onClick={() => swiperInstance && swiperInstance.slidePrev()}
                            className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer"
                        >
                            <ArrowIcon swiperInstance={swiperInstance} isBeginning={isBeginning} shadow />
                        </div>
                        <div
                            onClick={() => swiperInstance && swiperInstance.slideNext()}
                            className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
                        >
                            <ArrowIcon shadow arrow="left" swiperInstance={swiperInstance} isEnd={isEnd} />
                        </div>
                    </div>
                    )}

                </div>

            </section> }
        </>
    )
}