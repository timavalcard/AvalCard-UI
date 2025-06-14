import Link from "next/link";

export default function More2({ href = '/' }) {
    return (
        <Link href={href} className={`flex justify-center w-28 items-center font-medium py-2 rounded-full text-sm cursor-pointer bg-[#00CC99] hover:bg-green-light-2 !text-white`}>
            مشاهده همه
        </Link>
    );
}