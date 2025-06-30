import Button from "@/components/ui/globals/Button";
import IconButton from "@/components/ui/globals/IconButton";
import Link from "next/link";
import { BsHeadset } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function SubFooter() {
    return (
        <div className="bg-blue-custom relative md:py-12 py-6">
            <div className="absolute right-0 top-4">
                <svg width="143" height="117" viewBox="0 0 143 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M142.999 60H51.5293C37.9439 60 24.9143 65.394 15.3042 74.9966C5.69412 84.5992 0.289901 97.6246 0.279298 111.21V116.86V51.26C0.277984 44.5289 1.60264 37.8635 4.1776 31.6444C6.75257 25.4253 10.5274 19.7744 15.2865 15.0143C20.0457 10.2543 25.6959 6.47831 31.9145 3.90213C38.1331 1.32595 44.7982 -1.28135e-07 51.5293 0L142.999 0V60Z" fill="url(#paint0_linear_472_1382)" />
                    <defs>
                        <linearGradient id="paint0_linear_472_1382" x1="143.279" y1="7.80913e-07" x2="0.279293" y2="117" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="absolute left-0 bottom-4">
                <svg width="143" height="117" viewBox="0 0 143 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M0.000701904 57H91.4707C105.056 57 118.086 51.606 127.696 42.0034C137.306 32.4008 142.71 19.3754 142.721 5.79V0.139999V65.74C142.722 72.4711 141.397 79.1365 138.822 85.3556C136.247 91.5747 132.473 97.2256 127.713 101.986C122.954 106.746 117.304 110.522 111.086 113.098C104.867 115.674 98.2018 117 91.4707 117L0.000701904 117V57Z" fill="url(#paint0_linear_472_1383)" />
                    <defs>
                        <linearGradient id="paint0_linear_472_1383" x1="-0.279302" y1="117" x2="142.721" y2="3.74165e-06" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="container relative z-10 text-white">
                <div className="md:flex grid md:justify-between justify-center gap-y-6 items-center">
                    <div className="text-2xl font-semibold">
                        نیاز به راهنمایی یا مشاوره دارید؟!
                    </div>
                    <div className="flex items-center justify-center gap-7">
                        <Link href={'tel:09300952804'} className="flex items-center md:gap-2 transition-all gap-4 font-bold !text-white hover:underline">
                            <div dir="ltr">
                                0930 095 2804
                            </div>
                            <IconButton className="!bg-opacity-30 !bg-white">
                                <BsHeadset size={25} />
                            </IconButton>
                        </Link>
                        <Button href={'/contact-us'} className={'md:!flex !hidden !gap-2 !text-base !font-bold justify-center'} color="white" size="lg">
                            <div>
                                همین الان شروع کنید
                            </div>
                            <div>
                                <FaArrowLeftLong size={20} />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}