import Link from "next/link";

export default function GiftCardByItem({ icon, title, href='/' }) {
    return (
        <Link className="bg-white p-8 rounded-2xl space-y-6 hover:bg-blue-custom hover:!text-white" href={href}>
            <div>
                {icon}
            </div>
            <div className="flex justify-between items-center">
                <div className="font-bold">
                    {title}
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 20L8.56957 13.4141C7.81014 12.6364 7.81014 11.3636 8.56957 10.5859L15 4" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}