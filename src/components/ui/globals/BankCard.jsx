import Image from "next/image";

export default function BankCard(props) {
    return (
        <div>
            <div className="text-xs">
                {props.title}
            </div>

            <div className="mt-3 border py-3 px-6 rounded-xl flex justify-between items-center">
                <div className="flex gap-2.5 items-center">
                    <div>
                        <Image
                            src={props.img}
                            width={27}
                            height={27}
                        />
                    </div>
                    <div className="font-medium text-[#414141]">
                        <div className="text-xxs">
                            {props.name}
                        </div>
                        <div className="mt-0.5 text-xs">
                            {props.number}
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5229 13.051C13.0752 13.051 13.5229 12.6033 13.5229 12.051C13.5229 11.4987 13.0752 11.051 12.5229 11.051C11.9707 11.051 11.5229 11.4987 11.5229 12.051C11.5229 12.6033 11.9707 13.051 12.5229 13.051Z" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5229 6.05103C13.0752 6.05103 13.5229 5.60331 13.5229 5.05103C13.5229 4.49874 13.0752 4.05103 12.5229 4.05103C11.9707 4.05103 11.5229 4.49874 11.5229 5.05103C11.5229 5.60331 11.9707 6.05103 12.5229 6.05103Z" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5229 20.051C13.0752 20.051 13.5229 19.6033 13.5229 19.051C13.5229 18.4987 13.0752 18.051 12.5229 18.051C11.9707 18.051 11.5229 18.4987 11.5229 19.051C11.5229 19.6033 11.9707 20.051 12.5229 20.051Z" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}