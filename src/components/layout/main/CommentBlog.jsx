import Image from "next/image";

export default function CommentBlog() {
    return (
        <div className="rounded-2xl py-5 px-8 bg-white">
            <div className="text-xl font-medium text-[#003366]">
                لیست بهترین تکنولوژی های هوش مصنوعی جدید در رابطه با شفاف سازی تصاویر
            </div>

            <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <div>
                        <Image
                            src={'/images/comment-blog-1.svg'}
                            width={45}
                            height={45}
                            className="rounded-[50%]"
                        />
                    </div>
                    <div>
                        <div className="font-medium">
                            حسن آقایار
                        </div>
                        <div className="opacity-40 mt-1">
                            @Hasanaghyar
                        </div>
                    </div>
                </div>

                <div className="rounded-full p-2.5 bg-blue-custom cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.4999 12H3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

        </div>
    );
}