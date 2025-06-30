import GiftCardByItem from "@/components/layout/main/GiftCardByItem";
import TitleWithIcon from "../../globals/TitleWithIcon";
import Services from "../Services";

export default function ServicesGiftBy() {
    return (
        <div className="mt-20">

            <div className="w-12 h-12 rounded-full flex justify-center items-center mx-auto cursor-pointer -mb-3 bg-white shadow-[0px_29px_54px_0px_#0000005E] animate-bounce">
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.731934 0.847656L6.44384 6.0403L12.1558 0.847656" stroke="black" stroke-width="2.07706" />
                </svg>
            </div>

            <div className="md:bg-[url('/images/bg-circle.webp')] bg-[url('/images/bg-circle-sm.webp')] py-12 bg-cover bg-center-top">
                <div className="container">
                    <div>
                        <TitleWithIcon iconColor="#00CC99"  title={'خدمات اول کارت'} className="text-white" />
                        <div className="mt-3 mr-6 text-white opacity-80">
                            خدماتی که میتوانید با خیال راحت از آن استفاده کنید
                        </div>
                    </div>

                    <Services />

                </div>
            </div>
        </div>
    );
}