import Link from "next/link";
import {fetchRecentArticles} from "../../../../helpers/api/recent-articles";

export default async function BigMag() {
    const articles= await fetchRecentArticles(1);
    return (
        <Link href={articles?.data[0]?.url}>
            <div className="relative h-full w-full object-cover overflow-hidden aspect-[16/9]">
                <div className="absolute bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_50%,_#FFFFFF_100%)] bottom-0 left-0 w-full h-full" />
                <img
                    src={articles?.data[0]?.media?.url}
                    alt={articles?.data[0]?.media?.title}
                    className="rounded-xl w-full h-full object-cover"
                />

                <div className="absolute text-[#202020] w-full bottom-5 left-0 lg:px-6 px-3">
                    <div className="font-bold text-2xl">
                        {articles?.data[0]?.title}
                    </div>
                    <div className="text-left text-xs mt-2 font-medium">
                        تاریخ انتشار: {articles?.data[0]?.created_at}
                    </div>
                </div>
            </div>
        </Link>
    );
}
