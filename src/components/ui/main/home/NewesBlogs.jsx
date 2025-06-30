import Blog from "@/components/layout/main/Blog";
import TitleWithIcon from "../../globals/TitleWithIcon";
import CommentBlog from "@/components/layout/main/CommentBlog";
import MarqueeBlogs from "./MarqueeBlogs";
import More2 from "../../globals/More2";
import {fetchRecentArticles} from "../../../../helpers/api/recent-articles";

export default async function NewesBlogs() {
    const articles= await fetchRecentArticles(2);
    return (
        <div className="mt-32">

            <TitleWithIcon
                title={'جدید ترین مقالات را بخوانید'}
                more
                moreHref={'/mag'}
                />
            <div className="opacity-50 mt-2 mr-6">
                جدید ترین و پر بازدید تریم مقالات روز را میتوانید مشاهده کنید
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                <div>
                    <MarqueeBlogs />
                </div>
                <div className="space-y-8 md:mt-0 pt-10">
                    {articles.length > 0 && articles.map((item, idx) => (
                        <div key={item.id}>
                            <Blog
                                category={item.category?.[0]?.title || "بدون دسته"}
                                title={item.title}
                                des={item.excerpt || " "}
                                href={item.url || " "}
                                date={item.created_at}
                                img={item.media?.url || "/images/blog-1.webp"}
                            />
                            {/* نمایش خط جداکننده فقط بین اولین و دومین مقاله */}
                            {idx === 0 && <hr className="hidden md:block" />}
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden mt-12 flex justify-center">
                <More2 />
            </div>
        </div>
    );
}