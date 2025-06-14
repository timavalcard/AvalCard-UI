import Image from "next/image";

export default function PaymentItem({ title, des, active, onClick, img }) {
    return (
        <div className={`flex items-center rounded-xl gap-4 py-4 px-3.5 border transition-all cursor-pointer duration-300 ${!active ? 'border-[#F1F2F4]' : 'border-blue-custom'}`} onClick={onClick}>
            <div className={`${active && 'FadeInAnimate'}`}>
                {
                    active ?
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.753906 8.00738C0.753906 4.00194 4.00096 0.754883 8.00641 0.754883C12.0119 0.754883 15.2589 4.00194 15.2589 8.00738C15.2589 12.0128 12.0119 15.2599 8.00641 15.2599C4.00096 15.2599 0.753906 12.0128 0.753906 8.00738Z" fill="white" stroke="#3F5AEF" stroke-width="1.5" />
                            <path d="M4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8Z" fill="#3F5AEF" />
                        </svg>

                        :
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.753906 8.00738C0.753906 4.00194 4.00096 0.754883 8.00641 0.754883C12.0119 0.754883 15.2589 4.00194 15.2589 8.00738C15.2589 12.0128 12.0119 15.2599 8.00641 15.2599C4.00096 15.2599 0.753906 12.0128 0.753906 8.00738Z" fill="white" stroke="#E1E1E1" stroke-width="1.5" />
                        </svg>
                }

            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <Image src={img} width={32} height={32} loading="lazy" />
                </div>
                <div className="text-sm">
                    <span className="font-bold"> {title} </span> ({des})
                </div>
            </div>
        </div>
    );
}