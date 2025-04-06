import Button from "@/components/ui/globals/Button";
import IconButton from "@/components/ui/globals/IconButton";

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
                        <div className="flex items-center md:gap-2 gap-4 font-bold">
                            <div>
                                ۹۱۳-۵۸۷-۹۸۸۷ (۹۸+)
                            </div>
                            <IconButton className="!bg-opacity-30 !bg-white">
                                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.38452 0.509609C3.82178 0.280506 0.03125 4.17827 0.03125 8.99984V11.2498V14.7498C0.03125 16.1861 1.09335 17.345 2.41437 17.4578C2.52181 19.4191 4.0263 20.9998 5.89063 20.9998H6.36578C6.57997 21.3014 6.91579 21.4998 7.29688 21.4998H8.70313C9.34906 21.4998 9.875 20.9393 9.875 20.2498C9.875 19.5603 9.34906 18.9998 8.70313 18.9998H7.29688C6.91579 18.9998 6.57997 19.1983 6.36578 19.4998H5.89063C4.80046 19.4998 3.94817 18.6257 3.82794 17.4998H4.95312C5.34143 17.4998 5.65621 17.164 5.65625 16.7498V11.2498C5.65621 10.8356 5.34143 10.4999 4.95312 10.4998H1.4375V8.99984C1.4375 5.01242 4.53575 1.81776 8.31769 2.00765C11.8401 2.18432 14.5625 5.42985 14.5625 9.21859V10.4998H11.0469C10.6586 10.4999 10.3438 10.8356 10.3438 11.2498V16.7498C10.3438 17.164 10.6586 17.4998 11.0469 17.4998H13.3906C14.8061 17.4998 15.9688 16.2597 15.9688 14.7498V11.2498V9.21859C15.9688 4.66134 12.6781 0.724948 8.38452 0.50961L8.38452 0.509609ZM1.4375 11.9998H4.25V15.9998H2.60937C1.95396 15.9998 1.4375 15.449 1.4375 14.7498V11.9998ZM11.75 11.9998H14.5625V14.7498C14.5625 15.449 14.046 15.9998 13.3906 15.9998H11.75V11.9998Z" fill="white" />
                                </svg>
                            </IconButton>
                        </div>
                        <Button className={'md:!flex !hidden !gap-2 !text-base !font-bold justify-center'} color="white" size="lg">
                            <div>
                                همین الان شروع کنید
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_472_1386)">
                                        <path d="M8.11283 5.00026C7.95052 5.00499 7.79642 5.0727 7.68315 5.18906L3.51648 9.35573C3.2725 9.59981 3.2725 9.99544 3.51648 10.2395L7.68315 14.4062C7.83991 14.5695 8.07269 14.6352 8.29171 14.5781C8.51073 14.521 8.68178 14.35 8.73887 14.131C8.79597 13.9119 8.73021 13.6792 8.56694 13.5224L5.46716 10.4226H16.5973C16.8227 10.4258 17.0323 10.3074 17.1459 10.1127C17.2596 9.91802 17.2596 9.67723 17.1459 9.48254C17.0323 9.28786 16.8227 9.16944 16.5973 9.17262H5.46716L8.56694 6.07285C8.75148 5.89312 8.80686 5.61859 8.70643 5.38137C8.606 5.14415 8.37033 4.99284 8.11283 5.00026Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_472_1386">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}