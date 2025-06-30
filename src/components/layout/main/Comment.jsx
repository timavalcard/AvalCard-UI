import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function Comment({ name, msg }) {
    return (
        <section className="relative md:ml-8 ml-5 md:mb-10 mb-6">
            <div className="bg-white md:py-7 md:px-6 p-4 rounded-2xl relative z-10">

                <div className="flex items-center justify-between">
                    <div className="flex items-center md:gap-4 gap-2.5">
                        <div>
                            <Image
                                src={'/images/user-icon-comment.jpg'}
                                width={45}
                                height={45}
                                className="rounded-[50%]"
                            />
                        </div>
                        <div className="font-semibold">
                            {name}
                        </div>
                    </div>
                    <header className="flex items-start md:gap-2.5 gap-1.5">

                        <div className="md:text-sm text-xs">
                            28 اسفند 1403
                        </div>

                    </header>
                </div>

                <div className="md:mt-8 mt-5 text-xs">
                    {msg}
                </div>
            </div>

            <div className="bg-[#EEEEEE] rounded-2xl h-full w-full md:top-10 top-5 right-8 absolute">

            </div>
        </section>
    );
}