"use client"

import { articlesData } from "@/constants/data";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from "../../globals/ArticleCard";
import ArrowIcon from "../../globals/arrows/ArrowIcon";
import { useState } from "react";
import TitleWithBorder from "@/components/layout/main/TitleWithBorder";

export default function MostPopular() {

    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <section className="mb-12">
            <TitleWithBorder>
            محبوب ترین های هفته
            </TitleWithBorder>

            <div className="relative mx-5">

                <Swiper
                    spaceBetween={16}
                    slidesPerView={1.2}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
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
                            slidesPerView: 4,
                        },
                    }}
                >
                    {articlesData.slice(4, 12).map((item) => (
                        <SwiperSlide key={item.id}>
                            <ArticleCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="">
                    <div
                        onClick={() => swiperInstance && swiperInstance.slidePrev()}
                        className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer"
                    >
                        <ArrowIcon shadow />
                    </div>
                    <div
                        onClick={() => swiperInstance && swiperInstance.slideNext()}
                        className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
                    >
                        <ArrowIcon shadow arrow="left" />
                    </div>
                </div>

            </div>

        </section>
    )
}