import TitleWithBlue from "@/components/layout/TitleWithBlue";
import Image from "next/image";
import Link from "next/link";

const Item = ({ href = '/', src, children }) => {
    return (
        <Link href={href} className="flex items-center text-sm bg-white py-3 px-4 rounded-lg gap-2 text-[#191919] font-semibold hover:bg-blue-custom hover:text-white transition-all duration-300">
            <div className="">
                <Image src={`/images/${src}`} height={52} width={52} />
            </div>
            <div>
                {children}
            </div>
        </Link>
    );
}

export default function Suggestions() {
    return (
        <div className="pt-5">
            <div className="container">
                <TitleWithBlue blue="گیفت کارت">
                    اسپاتیفای پیشنهادی
                </TitleWithBlue>
            </div>

            <div className="mt-custom-4 py-10 bg-blue-light">
                <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    <Item src={'flag-german.webp'}>
                        گیفت کارت اسپاتیفای آلمان
                    </Item>
                    <Item src={'flag-england.webp'}>
                        گیفت کارت اسپاتیفای انگلستان
                    </Item>
                    <Item src={'flag-kuwait.webp'}>
                        گیفت کارت اسپاتیفای کویت
                    </Item>
                    <Item src={'flag-canada.webp'}>
                        گیفت کارت اسپاتیفای کانادا
                    </Item>
                </div>
            </div>
        </div>
    );
}