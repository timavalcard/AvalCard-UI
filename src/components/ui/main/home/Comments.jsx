"use client"

import Comment from "@/components/layout/main/Comment";
import TitleWithIcon from "../../globals/TitleWithIcon";
import ArrowIcon from "../../globals/arrows/ArrowIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

export default function Comments() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (
        <div className="bg-[#F2F5F7] py-12 mt-28">
            <div className="container">

                <div className="md:hidden">
                    <TitleWithIcon
                        title={'نظــرات کاربــران و مشتــریان گیفتی بای'}
                    />

                    <div className="text-base opacity-50 font-normal md:mt-2 mt-3.5 mr-6">
                        شما میتوانید تمام نظرات  کاربران و مشتریان ما که از خدمات گیفتی بای استفاده کرده اند را بخوانید و رضایت ها را حس کنید
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-12 gap-8 items-center">
                    <div className="md:col-span-7 col-span-1 md:order-1 order-2 mt-8">

                        <div className="md:block hidden">
                            <TitleWithIcon
                                title={'نظــرات کاربــران و مشتــریان گیفتی بای'}
                            />

                            <div className="text-base opacity-50 font-normal md:mt-2 mt-3.5 mr-6">
                                شما میتوانید تمام نظرات  کاربران و مشتریان ما که از خدمات گیفتی بای استفاده کرده اند را بخوانید و رضایت ها را حس کنید
                            </div>
                        </div>

                        <div className="mt-8">
                            <Swiper
                                onSwiper={(swiper) => setSwiperInstance(swiper)}
                                spaceBetween={20}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
                                }}
                            >
                                <SwiperSlide>
                                    <Comment name="علی عباسی" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Comment name="موسی کرابی" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Comment name="محمد ستوده" />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="flex justify-end gap-6 pt-6 pl-8 md:-mb-7">

                            <div
                                onClick={() => swiperInstance && swiperInstance.slidePrev()}
                                
                            >
                                <ArrowIcon />
                            </div>
                            <div
                                onClick={() => swiperInstance && swiperInstance.slideNext()}
                            >
                                <ArrowIcon arrow="left" />
                            </div>

                        </div>
                    </div>


                    <div className="md:col-span-5 md:order-2 order-1 col-span-1 md:mt-0 mt-10">
                        <img src="/images/comments.svg" />
                    </div>

                </div>
            </div>
        </div>
    );
}