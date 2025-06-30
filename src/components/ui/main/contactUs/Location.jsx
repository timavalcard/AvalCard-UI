const Item = ({ children, href, className }) => {
    return (
        <a href={href} className={`flex border shadow-lg border-[#F0F0F0] items-center h-16 items-center gap-1.5 bg-white hover:text-blue hover:border-blue-custom text-sm transition-all duration-300 px-4 rounded-xl ${className}`}>
            {children}
        </a>
    );
}

export default function Location() {
    return (
        <div className="relative mt-8 bg-[url('/images/bgContactUs.webp')] bg-cover bg-center py-14 sm:flex grid gap-y-5 justify-around  items-center rounded-2xl border border-[#F0F0F0]">
            <div className="text-[#202020] font-black  text-xl">
                آدرس اول کارت رو راحت تر پیدا کن!
            </div>

            <div className="md:flex grid items-center gap-3">
                <Item>
                    <div>
                        <img loading="lazy" src="/images/map.webp" />
                    </div>
                    <div>
                        مسیریابی با گوگل مپ
                    </div>
                </Item>
                <Item>
                    <div>
                        <img loading="lazy" src="/images/viss.webp" />
                    </div>
                    <div>
                    مسیریابی با ویز
                    </div>
                </Item>
                <Item>
                    <div>
                        <img loading="lazy" src="/images/balad.webp" />
                    </div>
                    <div>
                        مسیریابی با بلد
                    </div>
                </Item>
            </div>
        </div>
    );
}