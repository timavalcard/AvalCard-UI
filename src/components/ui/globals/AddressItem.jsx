"use client"
import { FaRegTrashCan, FaTrash } from "react-icons/fa6";
import EditAddress from "../profile/forms/EditAddress";

export default function AddressItem({ id,onDelete,title, phone, address, city, province, postalCode }) {
    return (
        <div className="border border-[#D9D9D9] relative rounded-2xl py-4 px-3">

            <div className="flex items-start w-full gap-3">

                <div className="">
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.75 7.75C14.75 13 8 17.5 8 17.5C8 17.5 1.25 13 1.25 7.75C1.25 5.95979 1.96116 4.2429 3.22703 2.97703C4.4929 1.71116 6.20979 1 8 1C9.79021 1 11.5071 1.71116 12.773 2.97703C14.0388 4.2429 14.75 5.95979 14.75 7.75Z" stroke="#3664FF" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 10C9.24264 10 10.25 8.99264 10.25 7.75C10.25 6.50736 9.24264 5.5 8 5.5C6.75736 5.5 5.75 6.50736 5.75 7.75C5.75 8.99264 6.75736 10 8 10Z" stroke="#3664FF" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

                <div className="text-xs space-y-2 w-full overflow-hidden">

                    <div className=" font-semibold">
                        {title}
                    </div>

                    <div className="content-ellipsis">
                        {address}
                    </div>

                    <div className="text-[#464646]">
                        شماره تلفن: {phone}
                    </div>

                    <div>
                        <hr className="bg-[#D9D9D9]" />
                    </div>

                    <div className="flex justify-between items-center">

                        <EditAddress
                            address_id={id}
                            defaultValues={{ title, phone, address, postalCode, province, city }}
                        />

                        <div onClick={() => {

                            onDelete && onDelete(id);
                        }} className="text-[#FF4545] flex items-center gap-1.5 cursor-pointer">
                            <div>
                                <FaRegTrashCan className="text-sm" />
                            </div>
                            <div>
                                حذف آدرس
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}