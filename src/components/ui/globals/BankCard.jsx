'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaPaintbrush, FaRegTrashCan } from "react-icons/fa6";
import EditBankCard from "../profile/forms/EditBankCard";

export default function BankCard({ allowEdit = true, ...props }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div className="text-xs">{props.title}</div>

            <div className="mt-3 border py-3 px-6 rounded-xl flex justify-between items-center">
                <div className="flex gap-2.5 items-center">
                    <div>
                        <img
                            src={props.img}
                            width={27}
                            height={27}
                            alt=""
                            className={"rounded-md"}
                        />
                    </div>
                    <div className="font-medium text-[#414141]">
                        <div className="text-xxs">{props.name}</div>
                        <div className="mt-0.5 text-xs">{props.label}</div>
                    </div>
                </div>

                {
                    allowEdit &&
                    <div
                        className="cursor-pointer relative"
                    >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                            onClick={() => setShowMenu(!showMenu)}>
                            <path d="M12.5229 13.051C13.0752 13.051 13.5229 12.6033 13.5229 12.051C13.5229 11.4987 13.0752 11.051 12.5229 11.051C11.9707 11.051 11.5229 11.4987 11.5229 12.051C11.5229 12.6033 11.9707 13.051 12.5229 13.051Z" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5229 6.05103C13.0752 6.05103 13.5229 5.60331 13.5229 5.05103C13.5229 4.49874 13.0752 4.05103 12.5229 4.05103C11.9707 4.05103 11.5229 4.49874 11.5229 5.05103C11.5229 5.60331 11.9707 6.05103 12.5229 6.05103Z" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5229 20.051C13.0752 20.051 13.5229 19.6033 13.5229 19.051C13.5229 18.4987 13.0752 18.051 12.5229 18.051C11.9707 18.051 11.5229 18.4987 11.5229 19.051C11.5229 19.6033 11.9707 20.051 12.5229 20.051Z" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                        <div
                            ref={menuRef}
                            className={`absolute top-[-100px] right-1/2 translate-x-1/2 bg-white border rounded-xl shadow-md w-32 py-2 z-10 ${!showMenu && 'opacity-0 hidden'}`}
                        >
                            <EditBankCard bank_cart_id={props.id} defaultValues={{ cardNumber: props.number, sheba: props.sheba }} />
                            <button
                                className="flex items-center gap-2 w-full text-right px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                                onClick={() => {
                                    setShowMenu(false);
                                    props.onDelete && props.onDelete(props.id);
                                }}
                            >
                                <div>
                                    <FaRegTrashCan />
                                </div>
                                <div>
                                    حذف
                                </div>
                            </button>
                        </div>

                    </div>
                }
            </div>
        </div>
    );
}
