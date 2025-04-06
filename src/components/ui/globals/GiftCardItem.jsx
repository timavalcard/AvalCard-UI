export default function GiftCardItem({img, title, price, date}){
    return(
        <div>
            <div className="relative">
                <img src={img} className="w-full" />
                <div className="py-1 px-3.5 bg-[#FFC727] rounded-full text-white absolute top-2 right-2.5 text-xs z-10">
                    {date}
                </div>
            </div>
            <div className="mt-4 font-semibold text-sm">
                {title}
            </div>
            <div className="flex items-center justify-between mt-2">
                <div className="font-bold text-base items-center">
                    {price} <span className="opacity-50 text-xs">تومان</span>
                </div>
                <div className="py-1.5 min-w-16 bg-[#FFC727] rounded-full text-white hidden md:flex items-center justify-center text-xs">
                    {date}
                </div>
            </div>
        </div>
    );
}