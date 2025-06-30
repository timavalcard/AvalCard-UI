
import SocialMedia from '@/components/layout/SocialMedia/SocialMedia';
import Stars from '@/components/layout/Stars';
import TitleWithBorder from '@/components/layout/main/TitleWithBorder';
import Comments from '@/components/ui/main/mag/singleMag/Comments';
import LatestContent from '@/components/ui/main/mag/singleMag/LatestContent';
import Suggestions from '@/components/ui/main/mag/singleMag/Suggestions';
import { articlesData } from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import fetchArticle from "../../../../helpers/api/article";
import SchemaArticle from "../../../../components/layout/Schema/SchemaArticle";

export async function generateMetadata({ params }) {
    const currentArticle = await fetchArticle(params.id);
    if (!currentArticle || !currentArticle.article) {
        notFound()
    }
    if (currentArticle) {
    const article = currentArticle.article;
    if(article){
        return {
            title: article.meta_title,
            description: article.meta_description,
            robots: `${article.meta_follow}, ${article.meta_index}`,
            openGraph: {
                locale: "fa_IR",
                type: "article",
                title: article.meta_title,
                description: article.meta_description,
                url: article.url,
                siteName: "اول کارت",
                updatedTime: article.updated_at,
                images: [
                    {
                        url: "/img/logo.png",
                        secureUrl: "/img/logo.png",
                        width: 1200,
                        height: 630,
                        alt: "اول کارت",
                        type: "image/jpeg",
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: article.meta_title,
                description: article.meta_description,
            },
            alternates: {
                canonical: article.url,  // اضافه کردن URL canonical به متاداده‌ها
            }
        };
    }

    } return {};

}

const InfoItem = ({ children }) => {
    return (
        <div className='flex w-auto items-center gap-1'>
            {children}
        </div>
    );
}

export default async function ArticleDetailPage({ params }) {
    const currentArticle = await fetchArticle(params.id);
    if (!currentArticle || !currentArticle.article) {
        notFound()
    }
    const article = currentArticle.article;


    const related_articles = currentArticle.related_articles

    return (
        <>
            <SchemaArticle article={article} />
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">

                <main className="w-full md:w-3/4 space-y-5">

                    <h1 className="!mb-0">
                        <div className={'mb-6 text-[#202020] text-2xl flex-1 font-bold flex items-center gap-1.5'}>
                            {article.title}
                        </div>
                    </h1>

                    <div className={`flex flex-wrap items-center gap-5 text-sm font-medium text-[#202020]`}>

                        <InfoItem>
                            <div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33203 10.5C3.33203 7.98586 3.33203 6.72878 4.11308 5.94774C4.89413 5.16669 6.15121 5.16669 8.66536 5.16669H11.332C13.8462 5.16669 15.1033 5.16669 15.8843 5.94774C16.6654 6.72878 16.6654 7.98586 16.6654 10.5V11.8334C16.6654 14.3475 16.6654 15.6046 15.8843 16.3856C15.1033 17.1667 13.8462 17.1667 11.332 17.1667H8.66536C6.15121 17.1667 4.89413 17.1667 4.11308 16.3856C3.33203 15.6046 3.33203 14.3475 3.33203 11.8334V10.5Z" stroke="#A9A9A9" stroke-width="1.5" />
                                    <path d="M6.66797 5.16669V4.16669" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M13.332 5.16669V4.16669" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M3.66797 8.5H16.3346" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" />
                                </svg>

                            </div>
                            <div>
                                {article.created_at}
                            </div>
                        </InfoItem>

                        <InfoItem>
                            <div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.9987" cy="10.5" r="6.66667" stroke="#A9A9A9" stroke-width="1.5" />
                                    <path d="M10 7.83334V10.5L11.6667 12.1667" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                زمان برای مطالعه {article.time} دقیقه
                            </div>
                        </InfoItem>

                        <InfoItem>
                            <div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0013 17.1666C13.6832 17.1666 16.668 14.1819 16.668 10.5C16.668 6.81808 13.6832 3.83331 10.0013 3.83331C6.3194 3.83331 3.33464 6.81808 3.33464 10.5C3.33464 11.5664 3.58505 12.5744 4.03028 13.4683C4.14859 13.7058 4.18798 13.9774 4.11938 14.2337L3.72231 15.7177C3.54994 16.362 4.13931 16.9513 4.78353 16.779L6.26756 16.3819C6.52392 16.3133 6.79544 16.3527 7.03299 16.471C7.92688 16.9162 8.93485 17.1666 10.0013 17.1666Z" stroke="#A9A9A9" stroke-width="1.5" />
                                    <path d="M7.33203 9.5H12.6654" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M7.33203 11.8333H10.9987" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" />
                                </svg>

                            </div>
                            <div>
                                {article.comment_count} دیدگاه
                            </div>
                        </InfoItem>

                        {/*<InfoItem>
                        <div>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.18196 12.6971C3.61534 11.961 3.33203 11.5929 3.33203 10.5C3.33203 9.4071 3.61534 9.03904 4.18196 8.30291C5.31334 6.83306 7.21077 5.16669 9.9987 5.16669C12.7866 5.16669 14.6841 6.83306 15.8154 8.30291C16.3821 9.03904 16.6654 9.4071 16.6654 10.5C16.6654 11.5929 16.3821 11.961 15.8154 12.6971C14.6841 14.167 12.7866 15.8334 9.9987 15.8334C7.21077 15.8334 5.31334 14.167 4.18196 12.6971Z" stroke="#A9A9A9" stroke-width="1.5" />
                                <path d="M12 10.5C12 11.6046 11.1046 12.5 10 12.5C8.89543 12.5 8 11.6046 8 10.5C8 9.39543 8.89543 8.5 10 8.5C11.1046 8.5 12 9.39543 12 10.5Z" stroke="#A9A9A9" stroke-width="1.5" />
                            </svg>
                        </div>
                        <div>
                            ۱۷۷۹ بازدید
                        </div>
                    </InfoItem>*/}
                    </div>

                    <div className="w-full min-h-96 relative rounded-xl overflow-hidden">
                        <Image
                            src={article.media?.url}
                            alt={article.media?.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: article.content }} className="article-content space-y-6 text-justify leading-8">

                    </div>

                    <div>
                        <svg className='w-full' height="2" viewBox="0 0 952 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.75" y1="1.25" x2="951.25" y2="1.24992" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 5" />
                        </svg>
                    </div>

                    <div className="my-8 md:flex grid gap-y-4 items-center md:justify-between justify-center text-[#292929] text-sm">
                        {/* <div className='flex items-center md:justify-start justify-center gap-4'>
                        <Stars number={4} />

                        <div className='font-bold'>
                            ۴.۵/۵ - ( ۷ امتیاز )
                        </div>
                    </div> */}

                        <div className='sm:flex grid sm:justify-start justify-center sm:text-right text-center gap-y-4 items-center  gap-4'>
                            <div className='font-bold sm:text-right text-center' >
                                اشتراک گذاری این مطلب در
                            </div>

                            <SocialMedia url={article.url} />

                        </div>
                    </div>

                    <div>
                        <svg className='w-full' height="2" viewBox="0 0 952 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.75" y1="1.25" x2="951.25" y2="1.24992" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 5" />
                        </svg>
                    </div>

                    <Suggestions articles={related_articles} />


                    <Comments comments={article.comments} article_id={article.id}/>

                </main>

                <aside className="w-full md:w-1/4 hidden md:block">
                    <div className="sticky top-8 space-y-6">
                        <div className='space-y-3'>
                            <div>
                                <Link href={'https://www.instagram.com/avalcard'}>
                                    <div className='w-full relative h-[93px]'>
                                        <Image
                                            loading='lazy'
                                            fill
                                            className='w-full h-[93px]'
                                            src={'/images/instagram.webp'}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link href={'https://t.me/avalcard'}>
                                    <div className='w-full relative h-[93px]'>
                                        <Image
                                            loading='lazy'
                                            fill
                                            className='w-full h-[93px]'
                                            src={'/images/avalCardTelegram.webp'} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <LatestContent />
                    </div>
                </aside>
            </div>
        </>
    )
}
