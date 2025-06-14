import Link from "next/link";

export default function Section({ icon, text, className, href }) {
    return (
        <Link href={href} className={`${className} grid gap-3 h-[120px] items-center text-center justify-center rounded-[20px] cursor-pointer`}>
            <div className="text-center">

                <div>
                    {icon}
                </div>
                <div className="font-bold mt-2">
                    {text}
                </div>
            </div>
        </Link>
    );
}