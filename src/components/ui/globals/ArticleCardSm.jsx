import Link from "next/link";
import DateArticle from "./DateArticle";

export default function ArticleCardSm({ data, className }) {
    return (
        <div className={`bg-white flex  border rounded-2xl text-[#202020] items-center gap-2 border-[#F1F2F4] transition-all duration-300 overflow-hidden ${className}`}>
            <Link href={data.url} className="relative h-full">
                <DateArticle>
                    {data.created_at}
                </DateArticle>
                <img
                    src={data.media?.url}
                    alt={data.media?.title}
                    className="h-full w-full object-cover min-w-60"
                />
            </Link>
            <div className="h-full w-full grid items-center">
                <Link href={data.url} className="font-bold text-base mb-2 line-clamp-2">{data.title}</Link>
                <p className="text-sm line-clamp-2 w-full" dangerouslySetInnerHTML={{__html:data.excerpt}}></p>
            </div>
        </div>
    );
}