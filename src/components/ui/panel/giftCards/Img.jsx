import Image from "next/image";

export default function Img({src}) {
    return(
        <div className="border border-[#F0F0F0]  rounded-xl min-h-48 justify-center items-center grid max-w-80">
            <Image src={src} width={85} height={80} />
        </div>
    );
}