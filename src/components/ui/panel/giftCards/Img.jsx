import Image from "next/image";

export default function Img({src}) {
    return(
        <div className="border rounded-[15px] border-[#F0F0F0]  rounded-xl min-h-48  items-center grid">
            <Image className={"rounded-[15px]"} width={300} height={200} src={src} style={{width:"100%"}} />
        </div>
    );
}