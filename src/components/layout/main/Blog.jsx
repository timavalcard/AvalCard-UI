import Link from "next/link";

export default function Blog({ img, category, title, des, date, href='/' }) {
    return (
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <Link href={href} className="md:col-span-5 col-span-1 relative">
                <img loading="lazy" src={img} className="w-full rounded-xl" />

                <div className="flex gap-2 text-xs items-center bg-white py-2 px-2.5 rounded-full absolute top-4 right-1/2 translate-x-1/2  w-auto">
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1.5V3.75" stroke="#6B7280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 1.5V3.75" stroke="#6B7280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.625 6.81738H15.375" stroke="#6B7280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#6B7280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.7713 10.2749H11.778" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.7713 12.5249H11.778" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.99686 10.2749H9.00359" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.99686 12.5249H9.00359" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.22049 10.2749H6.22723" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.22049 12.5249H6.22723" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="text-black">
                        {date}
                    </div>
                </div>
            </Link>
            <div className="md:col-span-7 col-span-1">
                {/*<div className="flex gap-2 items-center">
                    <div>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4302 15.05H9.43018" stroke="#3F5AEF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 11.5V17.5C22 21.5 21 22.5 17 22.5H7C3 22.5 2 21.5 2 17.5V7.5C2 3.5 3 2.5 7 2.5H8.5C10 2.5 10.33 2.94 10.9 3.7L12.4 5.7C12.78 6.2 13 6.5 14 6.5H17C21 6.5 22 7.5 22 11.5Z" stroke="#3F5AEF" stroke-width="1.5" stroke-miterlimit="10" />
                        </svg>

                    </div>
                    <div className="opacity-60 ">
                        {category}
                    </div>
                </div>*/}

                <Link href={href} className="mt-2 text-[#002D3C] text-lg font-semibold">
                    {title}
                </Link>

                <div className="mt-4 text-sm opacity-60" dangerouslySetInnerHTML={{__html:des}}>

                </div>
            </div>
        </div>
    );
}