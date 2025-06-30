import TitleWithBlue from "@/components/layout/TitleWithBlue";
import More2 from "@/components/ui/globals/More2";
import { Calendar, Folder } from "lucide-react";
import Image from "next/image";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { VscFolderOpened } from "react-icons/vsc";
import {fetchRecentArticles} from "../../../helpers/api/recent-articles";
import Link from "next/link"


function decodeHtmlEntities(str) {
    if (!str) return '';

    const entities = {
        '&zwnj;': '',
        '&nbsp;': ' ',
        '&hellip;': '…',
        '&amp;': '&',
        '&quot;': '"',
        '&lt;': '<',
        '&gt;': '>',
        // میتونی اینجا هرچی لازم داشتی اضافه کنی
    };

    return str.replace(/&[a-z]+;/g, (entity) => entities[entity] || '');
}
function cleanHtml(html) {
    if (!html) return '';

    const textOnly = html.replace(/<\/?[^>]+(>|$)/g, '');
    const decodedText = decodeHtmlEntities(textOnly);
    return decodedText.replace(/[\u200C\u200B\uFEFF]/g, '').trim();
}

function trimExcerpt(text, maxLength = 90) {
    if (text.length <= maxLength) return text;

    let trimmed = text.slice(0, maxLength);

    // اگر در حال بریدن وسط کلمه باشیم، برمیگردیم به آخرین فاصله
    const lastSpace = trimmed.lastIndexOf(' ');
    if (lastSpace > 0) {
        trimmed = trimmed.slice(0, lastSpace);
    }

    return trimmed + '...';
}


export default async function Blogs() {
    const { data: articles } = await fetchRecentArticles(3);

    return (
        <div className="">
            <div className="sm:flex grid gap-y-5 justify-between !items-center my-12">
                <div>
                    <TitleWithBlue blue={'مقالات ما'} className='!my-0'>
                        ، جدیدترین خبرها
                    </TitleWithBlue>
                    <div className="text-[#191919] opacity-50 mt-5">
                       آخرین مقالات وبلاگ اول کارت را مطالعه کنید
                    </div>
                </div>

                <div>
                    <More2 href="/mag" />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-6">
                {articles.length > 0 && articles.map(item => {

                    const excerptText = cleanHtml(item.excerpt);
                    const trimmedExcerpt = trimExcerpt(excerptText);

                    return (
                        <Link href={item.url}>
                            <div className="">

                                <div className="flex items-center justify-end mb-2 text-xs">
                                    <HiOutlineCalendarDateRange size={18} className={'ml-1'} />

                                    <div>
                                        {item.created_at}
                                    </div>
                                </div>

                                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                                    <Image
                                        src={item.media?.url}
                                        alt={item.media?.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="w-[85%] mx-auto -translate-y-1/3 p-5 rounded-lg bg-white">

                                    <div className="font-bold flex items-center text-sm">
                                        <VscFolderOpened size={22} className="ml-1" />
                                        {item.title}
                                    </div>

                                    <p className="mt-2 text-xs text-[#191919] opacity-50 leading-relaxed text-justify">{trimmedExcerpt}</p>
                                </div>

                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}