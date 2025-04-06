import Blog from "@/components/layout/main/Blog";
import TitleWithIcon from "../../globals/TitleWithIcon";
import CommentBlog from "@/components/layout/main/CommentBlog";
import MarqueeBlogs from "./MarqueeBlogs";
import More2 from "../../globals/More2";

export default function NewesBlogs() {
    return (
        <div className="mt-32">
            <TitleWithIcon
                title={'جدید ترین مقالات را بخوانید'}
                more />
            <div className="opacity-50 mt-2 mr-6">
                جدید ترین و پر بازدید تریم مقالات روز را میتوانید مشاهده کنید
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                <div>
                    <MarqueeBlogs />
                </div>
                <div className="space-y-8 md:mt-0 pt-10">
                    <Blog
                        category={'مقالات آموزشی'}
                        title={'بوست تلگرام چیست و چه قابلیت‌هایی دارد؟'}
                        des={'تلگرام همیشه در تلاش بوده با معرفی قابلیت‌های جدید، تجربه کاربران را به سطح بالاتری ببرد. یکی از جدیدترین قابلیت‌هایی که تلگرام معرفی کرده، بوست تلگرام است؛ ویژگی‌ که به…'}
                        date={' 8 شهریور403 '}
                        img={'/images/blog-1.svg'}
                    />

                    <hr className="hidden md:block" />

                    <div className="hidden md:block">
                        <Blog
                            category={'مقالات آموزشی'}
                            title={'بوست تلگرام چیست و چه قابلیت‌هایی دارد؟'}
                            des={'تلگرام همیشه در تلاش بوده با معرفی قابلیت‌های جدید، تجربه کاربران را به سطح بالاتری ببرد. یکی از جدیدترین قابلیت‌هایی که تلگرام معرفی کرده، بوست تلگرام است؛ ویژگی‌ که به…'}
                            date={' 8 شهریور403 '}
                            img={'/images/blog-1.svg'}
                        />
                    </div>
                </div>
            </div>

            <div className="md:hidden mt-12 flex justify-center">
                <More2 />
            </div>
        </div>
    );
}