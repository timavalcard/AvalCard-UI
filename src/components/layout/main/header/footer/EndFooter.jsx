import { footerEnd } from "@/constants/data";
import Link from "next/link";

export default function EndFooter() {
    return (
        <div className="md:flex grid md:justify-between justify-center items-center text-base gap-y-6">
            <div className="flex gap-8 items-center">
                {
                    footerEnd.map(item =>
                        <Link href={item.link}>
                            {item.title}
                        </Link>
                    )
                }
            </div>
            <div className="md:text-left text-center" dir="ltr">
                © 2023 Aval Card
            </div>
        </div>
    )
}