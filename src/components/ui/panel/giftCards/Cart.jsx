import DiscountPercentage from "@/components/layout/DiscountPercentage";
import Button from "../../globals/Button";

export default function Cart(params) {
    return (
        <div className="col-span-4 h-min border shadow-lg border-[#F0F0F0] text-[#A9A9A9] rounded-2xl py-8 px-5 text-xs font-bold grid gap-3">
            {
                params.discount
                &&
                <div className="flex justify-between items-center">
                    <div>
                        تخفیف:
                    </div>
                    <div className="flex items-center font-medium gap-2">
                        <div>
                            <del>
                                {
                                    params.discountAmount
                                }
                            </del>
                        </div>
                        <DiscountPercentage per="13" />
                    </div>
                </div>
            }
            <div className="flex justify-between items-center">
                <div>
                    قیمت محصول:
                </div>
                <div className="text-[#202020] text-2xl">
                    {params.totalAmount}
                </div>
            </div>
            <Button flex size="full" gradient={'blue'} className={'!rounded-xl !h-[3.3rem] mt-2'}>
                <div>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.40621 18.1584C5.60546 14.9554 5.20508 13.3539 6.04586 12.277C6.88663 11.2002 8.53742 11.2002 11.839 11.2002H16.161C19.4626 11.2002 21.1134 11.2002 21.9541 12.277C22.7949 13.3539 22.3945 14.9554 21.5938 18.1584C21.0845 20.1956 20.8298 21.2141 20.0703 21.8072C19.3108 22.4002 18.2608 22.4002 16.161 22.4002H11.839C9.73914 22.4002 8.68921 22.4002 7.92968 21.8072C7.17015 21.2141 6.9155 20.1956 6.40621 18.1584Z" stroke="white" stroke-width="1.5" />
                        <path d="M21 11.6665L20.337 9.23487C20.0813 8.29725 19.9535 7.82843 19.6913 7.47537C19.4301 7.12375 19.0753 6.85272 18.6674 6.69329C18.2578 6.5332 17.7719 6.5332 16.8 6.5332M7 11.6665L7.66304 9.23487C7.9187 8.29725 8.04653 7.82843 8.30873 7.47537C8.56986 7.12375 8.92468 6.85272 9.33261 6.69329C9.74221 6.5332 10.2281 6.5332 11.2 6.5332" stroke="white" stroke-width="1.5" />
                        <path d="M11.2 6.53343C11.2 6.01797 11.6178 5.6001 12.1333 5.6001H15.8666C16.3821 5.6001 16.8 6.01797 16.8 6.53343C16.8 7.0489 16.3821 7.46676 15.8666 7.46676H12.1333C11.6178 7.46676 11.2 7.0489 11.2 6.53343Z" stroke="white" stroke-width="1.5" />
                        <path d="M11.3595 15.8667C11.7439 16.9542 12.781 17.7334 14.0002 17.7334C15.2193 17.7334 16.2565 16.9542 16.6408 15.8667" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
                <div>
                    افزودن به سبد خرید
                </div>
            </Button>
        </div>
    );
}