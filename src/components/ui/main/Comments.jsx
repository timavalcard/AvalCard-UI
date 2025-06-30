'use client'

import TitleWithBlue from "@/components/layout/TitleWithBlue";
import TitleBlue from "../globals/TitleBlue";
import More2 from "../globals/More2";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperDots from "@/components/layout/swiper/SwiperDots";
import { comments } from "@/constants/data";
import ArrowIcon from "../globals/arrows/ArrowIcon";


const Comment = ({ msg, name }) => {
    return (<div className="w-full bg-white rounded-2xl p-6 text-center space-y-4 mt-10">
        <div className="flex justify-center">
            <Image
                src="/images/user-icon-comment.jpg"
                alt="کاربر"
                width={64}
                height={64}
                className="rounded-full -mt-14"
            />
        </div>
        <div className="pt-4">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-xs text-[#010101] opacity-50 mt-1">کاربر فعال</p>
        </div>
        <div className="bg-blue-light rounded-xl p-4 my-4 leading-5 text-xs text-[#191919]">
            {msg}
        </div>
    </div>)
}

export default function Comments() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [giftCards, setGiftCards] = useState([]);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);  

    return (
        <div className="my-20">
            <div className="container">

                <div className="sm:flex grid gap-y-5 justify-between !items-center">
                    <div>
                        <TitleWithBlue blue={'نظرات'} className={'!mt-0'}>
                            کاربران و مشتری های ما
                        </TitleWithBlue>

                        <div className="text-[#191919] opacity-50 mt-5">
                            برای جلب اعتماد نظرات کاربران را مشاهده کنید و کیفیت و اصالت را حس کنید
                        </div>
                    </div>

                </div>

                {swiperInstance && comments.length > swiperInstance.params.slidesPerView && (
                    <div className="flex gap-1.5 justify-end items-center mb-5">
                        <SwiperDots width="12" slides={comments} activeIndex={activeIndex} swiperInstance={swiperInstance} />
                    </div>
                )}
            </div>

            <div className="bg-blue-light py-8 relative">
                <div className="container ">
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
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {
                            comments.map((item, index) =>

                                <SwiperSlide key={index}>
                                    <Comment {...item} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
                    {swiperInstance && comments.length > swiperInstance.params.slidesPerView && (
                    <div className="">
                        <div
                            onClick={() => swiperInstance && swiperInstance.slidePrev()}
                            className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 cursor-pointer"
                        >
                            <ArrowIcon swiperInstance={swiperInstance} isBeginning={isBeginning} shadow />
                        </div>
                        <div
                            onClick={() => swiperInstance && swiperInstance.slideNext()}
                            className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 cursor-pointer"
                        >
                            <ArrowIcon shadow arrow="left" swiperInstance={swiperInstance} isEnd={isEnd} />
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
}