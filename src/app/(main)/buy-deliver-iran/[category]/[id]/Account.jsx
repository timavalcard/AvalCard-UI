'use client'

import TitleWithBlue from "@/components/layout/TitleWithBlue";
import SwiperGlobal from "@/components/layout/main/SwiperGlobal";
import More2 from "@/components/ui/globals/More2";
import { fetchRecentProducts } from "@/helpers/api/recent-products";
import { useEffect, useState } from "react";

export default function Account({related_products}) {

    
    const [items, setItems] = useState([]);

    const [orderBy, setOrderBy] = useState('best_seller')

    useEffect(() => {
            setItems(related_products);

    }, [orderBy]);

    return (
        <div className="pt-10">
            <div className="xl:flex grid xl:justify-between xl:gap-0 gap-6 !items-center my-12">
                <div>
                    <TitleWithBlue className='!my-0'>
                    فروشگاه‌های اینترنتی
                    </TitleWithBlue>
                    <div className="text-[#191919] opacity-50 mt-5">
                    برای خرید هر محصول کافیست روی آن کلیک کنید!
                    </div>
                </div>

                {/* <div className="flex items-center gap-2.5">
                    {
                        [{ title: 'پرفروش ترین', value: 'best_seller' }, { title: 'جدید ترین', value: 'newest' }, { title: 'ارزان ترین', value: 'cheapest' }, { title: 'گران ترین', value: 'most_expensive' }].map((item, index) => (
                            <div className={`${item.value === orderBy ? 'text-blue-custom font-semibold' : 'text-[#191919] opacity-50'}  text-sm cursor-pointer hover:opacity-100 transition-all `} onClick={() => setOrderBy(item.value)}>
                                {item.title}
                            </div>
                        ))
                    }
                </div> */}

                <div className="">
                    <More2 href="/buy-deliver-iran" />
                </div>
            </div>

            {items &&<SwiperGlobal baseUrl={"/buy-deliver-iran"} items={items} /> }
            

        </div>
    );
}