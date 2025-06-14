export default function Banner() {
    return (
        <div className="relative">
            <img loading="lazy" src="/images/contact-us.webp" />
            <div className="absolute top-[50%] -translate-y-1/2 container mx-auto right-0 left-0 text-white">
                <div className="text-[2rem] font-black">
                    تماس با ما
                </div>
                <div className="text-lg font-normal mt-4">
                    راه‌های ارتباطی شما  با اول کارت
                </div>
            </div>
        </div>
    );
}