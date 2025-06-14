import Link from "next/link";

export default function Breadcrump({ items }) {
    return (
        <div className="text-sm font-medium flex text-[#A9A9A9] pt-4">
            <Link href={'/panel'}>داشبورد</Link>
            {
                items.map((item, index) =>
                <>
                <div className=" text-base px-1.5"> / </div>
                <Link href={item.href} className={items.length === (index+1) && '!text-[#464646]'}>{item.title}</Link>
                </>
                )
            }
        </div>
    );
}