'use client'

import TitleWithBlue from "@/components/layout/TitleWithBlue";
import SwiperGlobal from "@/components/layout/main/SwiperGlobal";
import More2 from "@/components/ui/globals/More2";
import { fetchRecentProducts } from "@/helpers/api/recent-products";
import { useEffect, useState } from "react";

export default function Account({category,categoryData}) {

    
    const [items, setItems] = useState([]);

    const [orderBy, setOrderBy] = useState('best_seller')

    useEffect(() => {
        setItems(category);
    }, [orderBy]);

    return (
        <div className="pt-10">
            <div className="xl:flex grid xl:justify-between xl:gap-0 gap-6 !items-center my-12">
                <div>
                    <TitleWithBlue className='!my-0'>
                    فروشگاه‌های اینترنتی</TitleWithBlue>
                    <div className="text-[#191919] opacity-50 mt-5">

                    </div>
                </div>

                {/*<div className="">
                    <More2 href={`/panel/buy-deliver-iran#gift-card-box-${categoryData.id}`} />
                </div>*/}
            </div>

            <SwiperGlobal   baseUrl={`/buy-deliver-iran`} items={items} />
            

        </div>
    );
}