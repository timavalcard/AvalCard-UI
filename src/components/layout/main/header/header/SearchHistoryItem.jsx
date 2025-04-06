import Link from "next/link";

export default function SearchHistoryItem() {
    return (
        <div className="flex items-center gap-3">
            <div>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="40" height="40" rx="10" fill="#DEDFEA" fill-opacity="0.25" />
                    <path d="M19.5 29.5C24.7467 29.5 29 25.2467 29 20C29 14.7533 24.7467 10.5 19.5 10.5C14.2533 10.5 10 14.7533 10 20C10 25.2467 14.2533 29.5 19.5 29.5Z" stroke="#292D32" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30 30.5L28 28.5" stroke="#292D32" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className="">
                <div className="text-sm opacity-50">
                    نحوه فعال سازی گیفت کارت اسکریل
                </div>
                <Link href={'/'} className="text-blue-custom text-xs">
                    در خدمات
                </Link>
            </div>
        </div>
    );
}