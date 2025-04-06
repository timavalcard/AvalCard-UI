"use client"

import React, { useState } from 'react';
import GiftCardItem from "../../globals/GiftCardItem";
import More2 from "../../globals/More2";
import ArrowIcon from "../../globals/arrows/ArrowIcon";
import TitleWithIcon from "../../globals/TitleWithIcon";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GiftCards() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="mt-28">
      <div className="flex">
        <div className="bg-[#FF395C] px-5 text-white font-bold text-sm py-2 rounded-full">
          داغ
        </div>
      </div>

      <div className="mt-2">
        <TitleWithIcon title={'پرفروش ترین گیفت کارت ها'} more />
        <div className="opacity-50">
          محصولات اسپرت، برای انواع ماشین ها
        </div>
      </div>

      <div className="relative mt-16 md:px-16">
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <GiftCardItem 
              img={'/images/gift-card-1.svg'} 
              title={'خرید اکانت Spotify'} 
              price={'286،000'} 
              date={'یک ماهه'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <GiftCardItem 
              img={'/images/gift-card-2.svg'} 
              title={'خرید اکانت Spotify'} 
              price={'286،000'} 
              date={'یک ماهه'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <GiftCardItem 
              img={'/images/gift-card-1.svg'} 
              title={'خرید اکانت Spotify'} 
              price={'286،000'} 
              date={'یک ماهه'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <GiftCardItem 
              img={'/images/gift-card-2.svg'} 
              title={'خرید اکانت Spotify'} 
              price={'286،000'} 
              date={'یک ماهه'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <GiftCardItem 
              img={'/images/gift-card-2.svg'} 
              title={'خرید اکانت Spotify'} 
              price={'286،000'} 
              date={'یک ماهه'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <GiftCardItem 
              img={'/images/gift-card-2.svg'} 
              title={'خرید اکانت Spotify'} 
              price={'286،000'} 
              date={'یک ماهه'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <GiftCardItem 
              img={'/images/gift-card-2.svg'} 
              title={'خرید اکانت Spotify'} 
              price={'286،000'} 
              date={'یک ماهه'} 
            />
          </SwiperSlide>
        </Swiper>

        <div className="hidden md:block">
          <div 
            onClick={() => swiperInstance && swiperInstance.slidePrev()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <ArrowIcon shadow />
          </div>
          <div 
            onClick={() => swiperInstance && swiperInstance.slideNext()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <ArrowIcon shadow arrow="left" />
          </div>
        </div>
      </div>

      {/* دکمه بیشتر برای صفحه نمایش‌های موبایل */}
      <div className="md:hidden mt-12 flex justify-center">
        <More2 />
      </div>
    </div>
  );
}
