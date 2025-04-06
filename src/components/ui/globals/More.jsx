import Link from "next/link";

export default function More({ href = '/' }) {
    return (
        <Link href={href} className={`flex justify-center items-center Large-text-bold cursor-pointer text-greenLight`}>
            <div>
                بیشتر
            </div>
            <div>
                <svg className='mr-1 mt-[1px]' width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.95297 8.49995L1.33272 5.19704C0.90517 4.80697 0.908416 4.17218 1.33993 3.78638L4.99377 0.519623"
                        stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </Link>
    );
}