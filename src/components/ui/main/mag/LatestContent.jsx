"use client";
import { useEffect, useState } from "react";
import TitleWithBorder from "@/components/layout/main/TitleWithBorder";
import ArticleCard from "../../globals/ArticleCard";
import { fetchRecentArticles } from "../../../../helpers/api/recent-articles";

const ITEMS_PER_PAGE = 12;

export default function LatestContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const toPersianNumber = (n) => n.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchRecentArticles(ITEMS_PER_PAGE, currentPage);
            setArticles(res.data);
            setTotalPages(res.meta.last_page);
        };

        fetchData();
    }, [currentPage]);

    return (
        <div className="mt-12">
            <TitleWithBorder>آخرین مطالب</TitleWithBorder>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {articles.map((item) => (
                    <ArticleCard key={item.id} data={item} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
                    <div className={currentPage > 1 ? '' : 'opacity-0 pointer-events-none'}>
                        <button
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl border text-black hover:bg-gray-100"
                        >
                            <span className="text-xl">‹</span>
                        </button>
                    </div>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 flex items-center justify-center rounded-xl border 
                                ${page === currentPage
                                ? "bg-blue-custom-gradient text-white"
                                : "text-black hover:bg-gray-100"
                            }`}
                        >
                            {toPersianNumber(page)}
                        </button>
                    ))}

                    <div className={currentPage < totalPages ? '' : 'opacity-0 pointer-events-none'}>
                        <button
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl border text-black hover:bg-gray-100"
                        >
                            <span className="text-xl rotate-180">‹</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
