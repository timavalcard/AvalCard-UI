import Image from "next/image";
import EmailBox from "./EmailBox";
import SubFooter from "./SubFooter";
import Link from "next/link";
import { footerItems } from "@/constants/data";
import EndFooter from "./EndFooter";
import Chatbot from "../../Chatbot";

export default function Footer() {
    return (
        <footer className="!bg-white mt-14">
            <Chatbot />
            <SubFooter />

            <div className="container">
                
                <div className="md:flex grid grid-cols-1 gap-y-6 justify-between items-center !py-9 border-b">
                    <div className="text-lg">
                        عضو خبرنامه‌ی ما شوید و از آخرین تخفیف ها باخبر شوید.
                    </div>

                    <div>
                        <EmailBox />
                    </div>
                </div>

                <div className="md:flex grid grid-cols-1 justify-between !py-9 border-b">
                    <div className="space-y-4">
                        <div>
                            <Image
                                src="/images/logo-main.svg"
                                width={190}
                                height={49}
                            />
                        </div>
                        <div className="text-lg font-normal">
                            بزرگ‌ترین سرویس دهنده انواع گیفت کارت ها،
                            <br />
                            پرداخت های بین المللی و...
                        </div>
                    </div>

                    <div className="grid grid-cols-3 text-sm font-normal gap-y-4 gap-x-8 md:mt-0 mt-12">
                        {
                            footerItems.map(item =>
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            )
                        }
                    </div>

                </div>

                <div className="!py-9">
                    <EndFooter />
                </div>

            </div>
        </footer>
    );
}