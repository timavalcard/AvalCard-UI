'use client';
import Image from "next/image";
import Link from "next/link";

export default function ItemSearch({ title = "گیفت کارت آمازون", src = '/images/thumb.webp', href='/' }) {
    return (
        <div>
            <Link href={href}>
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={src}
                        fill
                        className="rounded-2xl w-full object-cover"
                        alt={title}
                    />
                </div>
            </Link>

            <div className="flex items-center justify-between mt-2 px-1">
                <Link className="text-sm font-medium" href={href}>
                    {title}
                </Link>
                <div className="text-blue-custom flex items-center gap-1 text-xxs">
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9818 5C10.9818 6.65685 9.64678 8 8 8C6.35322 8 5.01825 6.65685 5.01825 5M3.48671 14.75H12.5133C13.8707 14.75 14.9151 13.5432 14.7283 12.1905L13.4859 3.19047C13.3324 2.07811 12.3871 1.25 11.2709 1.25H4.72911C3.6129 1.25 2.66761 2.07811 2.51406 3.19047L1.27166 12.1905C1.08493 13.5432 2.12931 14.75 3.48671 14.75Z" stroke="#3664FF" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                    <Link href={href}>
                        الان بخرش!
                    </Link>
                </div>
            </div>
        </div>
    );
}