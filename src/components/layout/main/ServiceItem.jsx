export default function ServiceItem({ svg, title, des, bgSvg="bg-blue-light" }) {
    return (
        <div className="bg-white m-1 w-full  rounded-2xl p-6 text-[#191919] cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-blue-custom hover:text-white">
            <div className={`size-16 rounded-md  flex justify-center items-center ${bgSvg}`}>
                {svg}
            </div>
            <div className="mt-7 font-bold">
                {title}
            </div>
            <div className="opacity-50 text-xs mt-4">
                {des}
            </div>
        </div>
    );
}