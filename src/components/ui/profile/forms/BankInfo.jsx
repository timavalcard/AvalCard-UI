"use client"

import BankCard from "../../globals/BankCard";
import Button from "../../globals/Button";
import AddCardBank from "./AddBankCard";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react"
import {fetchDeleteBankCart} from "../../../../helpers/api/updateProfile/deleteBankCart";
import Alert from "@/components/ui/globals/alert/Alert";

export default function BankInfo() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onDelete=async (id)=>{
        await fetchDeleteBankCart(id,dispatch);
    }
    return (
        <div className="mt-custom-4 section !pb-10">
            <div className=" huge-text-little-bold flex justify-between items-center">
                <div>
                    حساب های بانکی
                </div>
                <div>
                    <AddCardBank />
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {Array.isArray(auth.user?.bank_carts) && auth.user.bank_carts.length > 0 ? (
                    auth.user.bank_carts.map((bank_cart, index) => (
                        <div key={index}>
                            <BankCard
                                id={bank_cart.id}
                                title={`کارت ${index + 1}`}
                                name={bank_cart.bank_name_fa}
                             //   img={`/images/${bank_cart.bank_name.toLowerCase()}.png`}
                                img={`/images/bank/${bank_cart.bank_name_fa}.png`}

                                label={bank_cart.shaba_number}
                                number={bank_cart.cart_number}
                                sheba={bank_cart.shaba_number}
                                allowEdit={index !== 0}
                                onDelete={onDelete}
                            />
                        </div>
                    ))
                ) : (
                    <Alert
                    className="!py-5 !gap-2 lg:col-span-3 md:col-span-2 col-span-1 !bg-white !text-gray-500"
                        type="warning"
                        message="شما در حال حاظر کارتی وارد نکرده اید از قسمت افزودن کارت اقدام به افزودن کارت بانکی خود کنید."
                    />
                )}


            </div>
        </div>
    );
}