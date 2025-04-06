import Link from "next/link";

export default function More2({ href = '/' }) {
    return (
        <Link href={href} className={`flex justify-center items-center font-medium px-4 py-2 rounded-full text-sm cursor-pointer bg-green-light hover:bg-green-light-2 !text-white`}>
            مشاهده همه
        </Link>
    );
}