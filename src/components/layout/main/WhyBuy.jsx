'use client'

import TitleWithBlue from "@/components/layout/TitleWithBlue";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperDots from "@/components/layout/swiper/SwiperDots";
import ServiceItem from "@/components/layout/main/ServiceItem";

const services = [
    {
        title: 'اطمینان در خرید',
        des: 'با درگاه امن، تاییدیه‌های لازم و پرداخت شفاف، خیال‌تان از هر خرید راحت باشد.',
        svg: (
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6623 3.47345L6.08629 5.98012C4.57079 6.55345 3.33203 8.36679 3.33203 9.99345V19.9001C3.33203 21.4735 4.35994 23.5401 5.61188 24.4868L11.2785 28.7668C13.1367 30.1801 16.194 30.1801 18.0522 28.7668L23.7189 24.4868C24.9708 23.5401 25.9987 21.4735 25.9987 19.9001V9.99345C25.9987 8.35345 24.7599 6.54012 23.2444 5.96679L16.6685 3.47345C15.5483 3.06012 13.7561 3.06012 12.6623 3.47345Z" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.332 16.3267L13.4787 18.4733L19.212 12.74" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    },
    {
        title: 'پشتیبانی 24 ساعته',
        des: 'هر زمان که نیاز داشتید، تیم پشتیبانی حرفه‌ای ما کنار شماست',
        svg: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.2927 24.4402C29.2927 24.9202 29.186 25.4135 28.9594 25.8935C28.7327 26.3735 28.4394 26.8269 28.0527 27.2535C27.3994 27.9735 26.6794 28.4935 25.866 28.8269C25.066 29.1602 24.1994 29.3335 23.266 29.3335C21.906 29.3335 20.4527 29.0135 18.9194 28.3602C17.386 27.7069 15.8527 26.8269 14.3327 25.7202C12.7994 24.6002 11.346 23.3602 9.95935 21.9869C8.58602 20.6002 7.34602 19.1469 6.23935 17.6269C5.14602 16.1069 4.26602 14.5869 3.62602 13.0802C2.98602 11.5602 2.66602 10.1069 2.66602 8.7202C2.66602 7.81354 2.82602 6.94687 3.14602 6.14687C3.46602 5.33354 3.97268 4.58687 4.67935 3.9202C5.53268 3.0802 6.46602 2.66687 7.45268 2.66687C7.82602 2.66687 8.19935 2.74687 8.53268 2.90687C8.87935 3.06687 9.18602 3.30687 9.42602 3.65354L12.5194 8.01354C12.7594 8.34687 12.9327 8.65354 13.0527 8.94687C13.1727 9.22687 13.2394 9.50687 13.2394 9.7602C13.2394 10.0802 13.146 10.4002 12.9594 10.7069C12.786 11.0135 12.5327 11.3335 12.2127 11.6535L11.1993 12.7069C11.0527 12.8535 10.986 13.0269 10.986 13.2402C10.986 13.3469 10.9994 13.4402 11.026 13.5469C11.066 13.6535 11.106 13.7335 11.1327 13.8135C11.3727 14.2535 11.786 14.8269 12.3727 15.5202C12.9727 16.2135 13.6127 16.9202 14.306 17.6269C15.026 18.3335 15.7194 18.9869 16.426 19.5869C17.1194 20.1735 17.6927 20.5735 18.146 20.8135C18.2127 20.8402 18.2927 20.8802 18.386 20.9202C18.4927 20.9602 18.5994 20.9735 18.7194 20.9735C18.946 20.9735 19.1194 20.8935 19.266 20.7469L20.2794 19.7469C20.6127 19.4135 20.9327 19.1602 21.2394 19.0002C21.546 18.8135 21.8527 18.7202 22.186 18.7202C22.4394 18.7202 22.706 18.7735 22.9994 18.8935C23.2927 19.0135 23.5994 19.1869 23.9327 19.4135L28.346 22.5469C28.6927 22.7869 28.9327 23.0669 29.0794 23.4002C29.2127 23.7335 29.2927 24.0669 29.2927 24.4402Z" stroke="#191919" stroke-width="2" stroke-miterlimit="10" />
                <path d="M24.6667 11.9998C24.6667 11.1998 24.04 9.97313 23.1067 8.97313C22.2533 8.05313 21.12 7.33313 20 7.33313" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.3333 12.0002C29.3333 6.8402 25.16 2.66687 20 2.66687" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        title: 'تضمین کیفیت و اصالت ',
        des: 'با ضمانت اصالت کالا، هر خرید شما امن و حرفه‌ای انجام می‌شود.',
        svg: (
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6623 3.47345L6.08629 5.98012C4.57079 6.55345 3.33203 8.36679 3.33203 9.99345V19.9001C3.33203 21.4735 4.35994 23.5401 5.61188 24.4868L11.2785 28.7668C13.1367 30.1801 16.194 30.1801 18.0522 28.7668L23.7189 24.4868C24.9708 23.5401 25.9987 21.4735 25.9987 19.9001V9.99345C25.9987 8.35345 24.7599 6.54012 23.2444 5.96679L16.6685 3.47345C15.5483 3.06012 13.7561 3.06012 12.6623 3.47345Z" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.332 16.3267L13.4787 18.4733L19.212 12.74" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    },
    {
        title: 'تنوع و کیفیت بالا محصولات',
        des: 'ما همیشه به‌روز هستیم؛ جدیدترین محصولات از معتبرترین برندها فقط با چند کلیک.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0163 21.3307H12.3496" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.8799 3.35747L16.8399 3.45081L12.9733 12.4241H9.17328C8.26661 12.4241 7.39995 12.6108 6.61328 12.9441L8.94661 7.37081L8.99995 7.23747L9.09328 7.02414C9.11995 6.94414 9.14662 6.86414 9.18662 6.79747C10.9333 2.75747 12.9066 1.83747 16.8799 3.35747Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.066 12.6909C23.466 12.5042 22.826 12.4242 22.186 12.4242H12.9727L16.8393 3.45088L16.8793 3.35754C17.0793 3.42421 17.266 3.51754 17.466 3.59754L20.4127 4.83754C22.0527 5.51754 23.1993 6.22421 23.8927 7.07754C24.026 7.23754 24.1327 7.38421 24.226 7.55754C24.346 7.74421 24.4393 7.93088 24.4927 8.13088C24.546 8.25088 24.586 8.37088 24.6127 8.47754C24.9727 9.59754 24.7593 10.9709 24.066 12.6909Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.695 18.9311V21.5311C28.695 21.7978 28.6816 22.0644 28.6683 22.3311C28.415 26.9844 25.815 29.3311 20.8816 29.3311H10.4816C10.1616 29.3311 9.84164 29.3044 9.53497 29.2644C5.29497 28.9844 3.02831 26.7178 2.74831 22.4778C2.70831 22.1711 2.68164 21.8511 2.68164 21.5311V18.9311C2.68164 16.2511 4.30831 13.9444 6.62831 12.9444C7.42831 12.6111 8.28164 12.4244 9.18831 12.4244H22.2016C22.855 12.4244 23.495 12.5178 24.0816 12.6911C26.735 13.5044 28.695 15.9844 28.695 18.9311Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.94602 7.37085L6.61268 12.9442C4.29268 13.9442 2.66602 16.2509 2.66602 18.9309V15.0242C2.66602 11.2375 5.35935 8.07752 8.94602 7.37085Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.6915 15.0236V18.9302C28.6915 15.9969 26.7448 13.5036 24.0781 12.7036C24.7715 10.9702 24.9715 9.61025 24.6381 8.47692C24.6115 8.35692 24.5715 8.23692 24.5181 8.13025C26.9981 9.41025 28.6915 12.0369 28.6915 15.0236Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    },
]

export default function WhyBuy() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [giftCards, setGiftCards] = useState([]);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className="mt-28">
            <TitleWithBlue>
                چرا بــــرای
                <strong className="text-blue-custom"> خریـــد </strong>
                ، اول کارت را انتخاب کنید؟
            </TitleWithBlue>

            <div className="text-[#191919] opacity-50 text-sm mt-5">
            اول کارت، انتخاب هوشمندانه برای خریدی سریع، مطمئن و بی‌دردسر از دنیای دیجیتال بین‌المللی.
            </div>

            <div className="bg-blue-light rounded-lg p-8 mt-12">
                {swiperInstance && services.length > swiperInstance.params.slidesPerView && (
                    <div className="flex gap-1.5 justify-end items-center mb-5">
                        <SwiperDots width="12" slides={services} activeIndex={activeIndex} swiperInstance={swiperInstance} />
                    </div>
                )}
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
                        1024: { slidesPerView: 4 },
                    }}
                >

                    {
                        services.map((item, index) =>
                            <SwiperSlide key={index}>
                                <ServiceItem {...item} />
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
        </div>
    );
}