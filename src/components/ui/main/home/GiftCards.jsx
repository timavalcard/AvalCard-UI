"use client"

import React, { useEffect, useState } from 'react';
import GiftCardItem from "../../globals/GiftCardItem";
import More2 from "../../globals/More2";
import ArrowIcon from "../../globals/arrows/ArrowIcon";
import TitleWithIcon from "../../globals/TitleWithIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchRecentProducts } from "../../../../helpers/api/recent-products";

export default function GiftCards() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [giftCards, setGiftCards] = useState([]);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const getGiftCards = async () => {
      const res = await fetchRecentProducts(12, "gift_cart");
      setGiftCards(res);
    };

    getGiftCards();
  }, []);

  return (
    <div className="mt-16">
      <div className="flex">
        <div className="bg-[#FF395C] px-5 text-white font-bold text-sm py-2 rounded-full">
          داغ
        </div>
      </div>

      <div className="mt-2">
        <TitleWithIcon title={'جدید ترین گیفت کارت ها'} more moreHref={"/gift-card"} />
        <div className="opacity-50">
          جدید ترین گیفت کارت های اول کارت
        </div>
      </div>

      <div className="relative mt-16 md:px-16">
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
            0: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
          }}
        >

          {giftCards.map((card, index) => (
            <SwiperSlide key={index}>
              <GiftCardItem
                img={card.media?.url}
                title={card.title}
                url={`/gift-card/${card.category[0].slug}/${card.slug}`}

                date={card.created_at}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {swiperInstance && giftCards.length > swiperInstance.params.slidesPerView && (
          <div className="hidden md:block">
            <div
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer transition-opacity`}
            >
              <ArrowIcon swiperInstance={swiperInstance} isBeginning={isBeginning}  shadow items={giftCards} />
            </div>
            <div
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer transition-opacity`}
            >
              <ArrowIcon arrow="left" swiperInstance={swiperInstance} isEnd={isEnd} shadow items={giftCards} />
            </div>
          </div>
        )}

      </div>

      {/* دکمه بیشتر برای صفحه نمایش‌های موبایل */}
      <div className="md:hidden mt-12 flex justify-center">
        <More2 href="/gift-card" />
      </div>
    </div>
  );
}
