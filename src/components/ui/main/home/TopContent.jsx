import Button from "../../globals/Button";

import SliderComponent from "@/components/ui/main/home/TextSlider";

export default function TopContent() {
    return (
        <div className="bg-blue-light-custom relative">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="col-span-5 md:py-0 py-10">
                        <SliderComponent />

                        <div className="w-80 mt-5 font-medium mr-8">
                            <div className="text-[#2E2E2E80]">
                                دسترسی به میلیونها محصول در سرار دنیا و خریدی لذت بخش برای خرید محصولات اورجینال تا اخرید از امازون یه کلیک فاصله دارید
                            </div>
                        </div>

                        <div className="mt-8 mr-8">
                            <Button color="blue" className={'!flex justify-center gap-2 text-white !w-auto !px-6 !rounded-[100px]'} size="lg">
                                <div>
                                    ثبت درخواست
                                </div>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white" />
                                        <path d="M13.2599 16.28C13.0699 16.28 12.8799 16.21 12.7299 16.06L9.19992 12.53C8.90992 12.24 8.90992 11.76 9.19992 11.47L12.7299 7.93997C13.0199 7.64997 13.4999 7.64997 13.7899 7.93997C14.0799 8.22997 14.0799 8.70997 13.7899 8.99997L10.7899 12L13.7899 15C14.0799 15.29 14.0799 15.77 13.7899 16.06C13.6499 16.21 13.4599 16.28 13.2599 16.28Z" fill="white" />
                                    </svg>
                                </div>

                            </Button>
                        </div>
                    </div>
                    <div className="col-span-7 relative  z-20">
                        <img src="/images/home.svg" className="w-full " />
                    </div>
                </div>

            </div>

            <img src="/images/bg-home-1.svg" className="absolute -top-2/4 translate-y-1/2 z-10 -left-2" />
            <img src="/images/bg-home-1.svg" className="absolute -bottom-1/4 rotate-90 translate-y-1/2 z-10 -left-1/4" />
        </div>
    );
}