"use client"

import AddressItem from "../../globals/AddressItem";
import AddAddress from "./AddAddress";
import AddCardBank from "./AddBankCard";
import {fetchDeleteBankCart} from "../../../../helpers/api/updateProfile/deleteBankCart";
import { useDispatch, useSelector } from "react-redux";
import {fetchDeleteAddress} from "../../../../helpers/api/updateProfile/deleteAddress";
import Alert from "@/components/ui/globals/alert/Alert";

export default function Addresses() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const onDelete=async (id)=>{
        await fetchDeleteAddress(id,dispatch);
    }
    return (
        <div className="mt-custom-4 section !pb-10">
            <div className=" huge-text-little-bold flex justify-between items-center">
                <div>
                    افزودن آدرس جدید
                </div>
                <div>
                    <AddAddress />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                {Array.isArray(auth.user?.addresses) && auth.user.addresses.length > 0 ? (
                    auth.user.addresses.map((address, index) => (
                        <div key={index}>
                    <AddressItem
                        title={address.title}
                        id={address.id}
                        address={address.address}
                        phone={address.phone}
                        city={address.city}
                        province={address.state}
                        postalCode={address.postal_code}
                        onDelete={onDelete}
                    />
                        </div>
                    )))
                    : (
                        <Alert
                            className="!py-5 !gap-2 lg:col-span-3 md:col-span-2 col-span-1 !bg-white !text-gray-500"
                            type="warning"
                            message="شما در حال حاظر آدرسی وارد نکرده اید از قسمت افزودن آدرس اقدام به افزودن آدرس خود کنید."
                        />
                    )}

                

            </div>
        </div>
    );
}