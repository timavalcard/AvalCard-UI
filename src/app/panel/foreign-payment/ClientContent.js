'use client'

import Card from "@/components/ui/globals/card/Card";
import InlineMenu from "@/components/ui/panel/inlineMenu/InlineMenu";
import { useState,useEffect } from "react";

export default function ClientContent({ categories,baseUrl=false }) {
    const [active, setActive] = useState(0);
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1); // حذف #
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);
    const categoryTabs = [
        { title: 'همه دست بندی ها', icon: null },
        ...categories.map((category) => ({
            title: category.title,
            icon: null,
        }))
    ];

    return (
        <>
            <InlineMenu
                items={categoryTabs}
                itemClasses={'!text-sm'}
                color='text-black'
                setActiveItem={setActive}
            />

            {/* وقتی تب اول فعاله، همه دسته‌ها رو زیر هم نشون بده */}
            {active === 0 ? (
                categories.map((category, index) => (
                    <div key={index} className="FadeInAnimate mt-custom-4 section" id={`foreign-card-box-${category.id}`}>
                        <div className="flex huge-text-little-bold justify-between items-center mb-4">
                            <div className="text-[#2E2E2E]">{category.title}</div>
                        </div>
                        <div id={`category-${category.id}`} className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-center xl:gap-10 gap-5'>
                            {category.products.map((product) => (
                                <Card
                                    key={product.id}
                                    alt={product.media?.alt}
                                    url={!baseUrl ? product.url : `${baseUrl}/${product.category[0].slug}/${product.slug}`}
                                    title={product.title}
                                    showTime={true}
                                    time={product.time_to_send && product.time_to_send.length > 0 ? product.time_to_send : "1 تا 3 ساعت کاری"}

                                    img={product.media?.url}
                                />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                // فقط دسته‌ی انتخاب شده رو نشون بده
                <div className="FadeInAnimate mt-custom-4 section" id="gift-card-box">
                    <div className="flex huge-text-little-bold justify-between items-center mb-4">
                        <div className="text-[#2E2E2E]">
                            {categoryTabs[active].title}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-center xl:gap-10 gap-5'>
                        {categories[active - 1]?.products.map((product) => (
                            <Card
                                key={product.id}
                                alt={product.media?.alt}
                                url={!baseUrl ? product.url : `${baseUrl}/${product.category[0].slug}/${product.slug}`}
                                showTime={true}
                                time={product.time_to_send && product.time_to_send.length > 0 ? product.time_to_send : "1 تا 3 ساعت کاری"}

                                title={product.title}

                                img={product.media?.url}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
