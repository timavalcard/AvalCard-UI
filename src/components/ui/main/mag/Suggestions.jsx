"use client"

import { articlesData } from "@/constants/data";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from "../../globals/ArticleCard";
import ArrowIcon from "../../globals/arrows/ArrowIcon";
import { useEffect, useState } from "react";
import TitleWithBorder from "@/components/layout/main/TitleWithBorder";
import {fetchRecentArticles} from "../../../../helpers/api/recent-articles";

export default function Suggestions() {
    const [articles, setArticles] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchRecentArticles(12);
            setArticles(res.data);
        };

        fetchData();
    }, []);
    return (
        <div className="py-10 bg-[linear-gradient(270.07deg,_#3664FF_0%,_#6C8DFF_50.29%,_#3664FF_100%)]">
            <div className="container">
                <section className="">
                    <TitleWithBorder className="!text-white">
                        پیشنهادی اول کارت
                    </TitleWithBorder>

                    <div className="relative  mx-5">

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
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {articles.slice(0, 8).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ArticleCard className="!bg-[rgba(255,_255,_255,_0.07)] !border-0 !text-white" data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {swiperInstance && articles.slice(0, 8).length > swiperInstance.params.slidesPerView && (
          <div>
            <div
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 transition-opacity`}
            >
              <ArrowIcon swiperInstance={swiperInstance} isBeginning={isBeginning}  shadow />
            </div>
            <div
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 transition-opacity`}
            >
              <ArrowIcon arrow="left" swiperInstance={swiperInstance} isEnd={isEnd} shadow />
            </div>
          </div>
        )}

                    </div>

                </section>
            </div>
        </div>
    )
}
