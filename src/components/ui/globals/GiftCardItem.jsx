import Link from 'next/link'
export default function GiftCardItem({url,img,excerpt, title, price, date}){
    return(
        <div>
            <div className="relative">
                <Link href={url}>
                    <img loading="lazy" src={img} className="!w-full h-[9.8rem] object-cover rounded-xl" width={300} height={300}/>
                </Link>
                {/*<div className="py-1 px-3.5 bg-[#FFC727] rounded-full text-white absolute top-2 right-2.5 text-xs z-10">
                    {date}
                </div>*/}
            </div>
            <Link href={url}>
                <div className="mt-4 font-semibold text-sm">
                    {title}
                </div>
            </Link>
            <div className="flex items-center justify-between mt-2">
                <div dangerouslySetInnerHTML={{__html:excerpt}}></div>
                {/*<div className="font-bold text-base items-center">
                    {price} <span className="opacity-50 text-xs">تومان</span>
                </div>
                <div className="py-1.5 min-w-16 bg-[#FFC727] rounded-full text-white hidden md:flex items-center justify-center text-xs">
                    {date}
                </div>*/}
            </div>
        </div>
    );
}