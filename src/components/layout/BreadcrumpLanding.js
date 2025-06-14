
import Link from "next/link";
import React from 'react'
import Head from 'next/head'

export default function BreadcrumpLanding({ items }) {
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.title,
            "item": item.href
        }))
    }
    return (
        <>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
                />

            <div className="flex text-sm gap-3 text-[#959595] font-semibold items-center mb-9 mt-7">
                <Link href={'/'} className="">
                    اول کارت
                </Link>
                {
                    items.map((item, index) =>
                        <>
                            <div className="">
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9L1 5L5 1" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <Link href={item.href} className={items.length === (index + 1) && '!text-[#464646]'}>{item.title}</Link>
                        </>
                    )
                }
            </div>
        </>

    );
}