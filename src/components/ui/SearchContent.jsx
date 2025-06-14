'use client'

import { useEffect, useState } from "react";
import ItemSearch from "@/components/layout/ItemSearch";
import TitleWithBorder from "@/components/layout/main/TitleWithBorder";
import ArticleCard from "@/components/ui/globals/ArticleCard";
import { fetchSearch } from "@/helpers/api/search";
import Empty from "./Empty";

export default function SearchContent({ q,data }) {

    const isAllEmpty =
    data.articles.length === 0 &&
    data.buy_products.length === 0 &&
    data.gift_carts.length === 0 &&
    data.inter_payments.length === 0;

    if(isAllEmpty){
        return <Empty />;
    }

    return (
        <div className="container mt-10 space-y-10">
            <div className="text-lg font-semibold">
                “برای {q} جستجو کردید.”
            </div>

            {data.gift_carts &&data.gift_carts.length>0 && <div>
                <TitleWithBorder className={'lg:!text-sm !text-sm'}>
                    “{q}” در گیفت کارت‌ها
                </TitleWithBorder>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {data.gift_carts.map(item => {
                        return (
                            <ItemSearch title={item.title} src={item.media?.url} href={item.url} />

                        )
                    })}
                </div>
            </div>}


            {data.buy_products &&data.buy_products.length>0 && <div>
                <TitleWithBorder className={'lg:!text-sm !text-sm'}>
                    “{q}” در پرداخت در خرید کالا و تحویل در ایران
                </TitleWithBorder>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {data.buy_products.map(item => {
                        return (
                            <ItemSearch title={item.title} src={item.media?.url} href={item.url} />

                        )
                    })}
                </div>
            </div>
            }

            {data.inter_payments &&data.inter_payments.length>0 && <div>
                <TitleWithBorder className={'lg:!text-sm !text-sm'}>
                    “{q}” در پرداخت در وب‌سایت‌های خارجی
                </TitleWithBorder>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {data.inter_payments.map(item => {
                        return (
                            <ItemSearch title={item.title} src={item.media?.url} href={item.url} />

                        )
                    })}
                </div>
            </div>
            }




            {data.articles && data.articles.length>0 && <div>
                <TitleWithBorder className={'lg:!text-sm !text-sm'}>
                    “{q}” در وبلاگ اول کارت
                </TitleWithBorder>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {data.articles.map(item => {
                        return (
                            <ArticleCard data={item} />
                        )
                    })}
                </div>
            </div>}
        </div>
    );
}
