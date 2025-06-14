import Link from "next/link";
import DateArticle from "./DateArticle";
import Image from "next/image";

export default function ArticleCard({ data, className }) {
    return (
        <div className={`bg-white rounded-xl border border-[#F1F2F4] transition-all duration-300 overflow-hidden ${className}`}>
            <Link href={data.url ?? '/'} className="relative">
                <DateArticle>
                    {data.created_at}
                </DateArticle>
                <div className="relative w-full h-48">
                    <Image
                        src={data.media?.url ?? "/images/placeholder.jpg"}
                        alt={data.media?.title ?? "عکس مقاله"}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>
            <div className="p-4">
                <Link href={data.url ?? '/'} className="font-semibold text-sm mb-2 line-clamp-2 content-ellipsis">{data.title}</Link>
                {/* <p className="text-sm text-gray-500 line-clamp-2">{data.description}</p> */}
            </div>
        </div>
    );
}