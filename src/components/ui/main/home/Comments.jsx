"use client"

import Comment from "@/components/layout/main/Comment";
import TitleWithIcon from "../../globals/TitleWithIcon";
import ArrowIcon from "../../globals/arrows/ArrowIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { comments } from "@/constants/data";

export default function Comments() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    return (
        <div className="bg-[#F2F5F7] py-12 mt-28">
            <div className="container">

                <div className="md:hidden">
                    <TitleWithIcon
                        title={'نظــرات کاربــران و مشتــریان اول کارت'}
                    />

                    <div className="text-base opacity-50 font-normal md:mt-2 mt-3.5 mr-6">
                        شما میتوانید تمام نظرات  کاربران و مشتریان ما که از خدمات اول کارت استفاده کرده اند را بخوانید و رضایت ها را حس کنید
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-12 gap-8 items-center">
                    <div className="md:col-span-7 col-span-1 md:order-1 order-2 mt-8">

                        <div className="md:block hidden">
                            <TitleWithIcon
                                title={'نظــرات کاربــران و مشتــریان اول کارت'}
                            />

                            <div className="text-base opacity-50 font-normal md:mt-2 mt-3.5 mr-6">
                                شما میتوانید تمام نظرات  کاربران و مشتریان ما که از خدمات اول کارت استفاده کرده اند را بخوانید و رضایت ها را حس کنید
                            </div>
                        </div>

                        <div className="mt-8">
                            <Swiper
                                onSwiper={(swiper) => {
                                    setSwiperInstance(swiper);
                                    setIsBeginning(swiper.isBeginning);
                                    swiper.on('slideChange', () => {
                                        setIsBeginning(swiper.isBeginning);
                                        setIsEnd(swiper.isEnd);
                                    });
                                }}
                                spaceBetween={20}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
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

                        <div className="flex justify-end gap-6 pt-6 pl-8 md:-mb-7">

                            <div
                            >
                                <ArrowIcon slideType={'next'} swiperInstance={swiperInstance}  isEnd={isEnd} />
                            </div>
                            <div
                            >
                                <ArrowIcon slideType={'prev'} arrow="left" swiperInstance={swiperInstance} isBeginning={isBeginning} />
                            </div>

                        </div>
                    </div>


                    <div className="md:col-span-5 md:order-2 order-1 col-span-1 md:mt-0 mt-10">
                        <img loading="lazy" src="/images/comments.webp" />
                    </div>

                </div>
            </div>
        </div>
    );
}