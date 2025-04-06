import Image from "next/image";

export default function Comment({name}) {
    return (
        <div className="relative md:ml-8 ml-5 md:mb-10 mb-6">
            <div className="bg-white md:py-7 md:px-6 p-4 rounded-2xl relative z-10">

                <div className="flex items-center justify-between">
                    <div className="flex items-center md:gap-4 gap-2.5">
                        <div>
                            <Image
                                src={'/images/comment-blog-1.svg'}
                                width={45}
                                height={45}
                                className="rounded-[50%]"
                            />
                        </div>
                        <div className="font-semibold">
                            {name}
                        </div>
                    </div>
                    <div className="flex items-center md:gap-4 gap-2.5">

                        <div className="flex md:gap-4 gap-1 items-center">
                            <div className="md:text-sm text-xs">
                                4.5
                            </div>
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.73887 2.97855L10.9873 5.47546C11.1576 5.82304 11.6116 6.15644 11.9946 6.22028L14.2574 6.59623C15.7045 6.83741 16.045 7.88725 15.0022 8.9229L13.2431 10.6821C12.9451 10.98 12.782 11.5546 12.8742 11.966L13.3778 14.1437C13.7751 15.8674 12.86 16.5342 11.3349 15.6334L9.21395 14.3778C8.8309 14.1508 8.19958 14.1508 7.80944 14.3778L5.68848 15.6334C4.17047 16.5342 3.24831 15.8604 3.64555 14.1437L4.14919 11.966C4.2414 11.5546 4.07825 10.98 3.78032 10.6821L2.02114 8.9229C0.985484 7.88725 1.31888 6.83741 2.76595 6.59623L5.02878 6.22028C5.40474 6.15644 5.85872 5.82304 6.02897 5.47546L7.27742 2.97855C7.9584 1.62369 9.06499 1.62369 9.73887 2.97855Z" fill="#FFCA0C" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0L1 12" stroke="#D3D3D3" />
                            </svg>
                        </div>

                        <div className="md:text-sm text-xs">
                            28 اسفند 1403
                        </div>

                    </div>
                </div>

                <div className="md:mt-8 mt-5 text-xs">
                    واقعا پشتیبانی بی نظیر و خدمات عالی ارائه کردند به صورت دقیق و سر وقت کار من انجام شد کیفیت رو تونستم حس کنم واقعا عالی بود دمتون گرم من که خیلی راضی بودم خسته نباشید😍🔥
                </div>
            </div>

            <div className="bg-[#EEEEEE] rounded-2xl h-full w-full md:top-10 top-5 right-8 absolute">

            </div>
        </div>
    );
}