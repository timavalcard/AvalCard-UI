'use client';

import Image from 'next/image';
import Link from 'next/link';
import {fetchRecentArticles} from "../../../../../helpers/api/recent-articles";
import { useEffect, useState } from "react";


export default function LatestContent() {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchRecentArticles(12, 1);
            setArticles(res.data);
        };

        fetchData();
    }, []);
    return (
        <div className="w-full bg-white rounded-2xl border p-3 space-y-4">
            <h2 className="bg-[#D8E1FF] text-blue-custom text-center font-bold py-2.5 rounded-xl">
                آخرین مطالب سایت
            </h2>
            <div className="space-y-4">
                {articles.map((post) => (
                    <div key={post.id} className="flex items-center gap-3">
                        <Link href={post.url} className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                                src={post.media?.url}
                                alt={post.media?.url}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                            />
                        </Link>
                        <div className="flex-1">
                            <Link href={post.url} className="text-sm font-medium leading-snug text-[#202020]">{post.title}</Link>
                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1"
                            >
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.34596 9.75769C2.89266 9.16879 2.66602 8.87434 2.66602 8C2.66602 7.12567 2.89266 6.83122 3.34596 6.24231C4.25106 5.06644 5.76901 3.73334 7.99935 3.73334C10.2297 3.73334 11.7476 5.06644 12.6527 6.24231C13.106 6.83122 13.3327 7.12567 13.3327 8C13.3327 8.87434 13.106 9.16879 12.6527 9.75769C11.7476 10.9336 10.2297 12.2667 7.99935 12.2667C5.76901 12.2667 4.25106 10.9336 3.34596 9.75769Z" stroke="#A9A9A9" stroke-width="1.2" />
                                        <path d="M9.60039 8.00002C9.60039 8.88368 8.88405 9.60002 8.00039 9.60002C7.11674 9.60002 6.40039 8.88368 6.40039 8.00002C6.40039 7.11637 7.11674 6.40002 8.00039 6.40002C8.88405 6.40002 9.60039 7.11637 9.60039 8.00002Z" stroke="#A9A9A9" stroke-width="1.2" />
                                    </svg>
                                </div>
                                <div>
                                    نظرات {post.comment_count}
                                </div>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
