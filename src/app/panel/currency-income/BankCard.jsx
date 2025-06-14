'use client';

import { useState,useEffect } from 'react';
import BankModal from './BankModal';
import { useDispatch, useSelector } from "react-redux";


export default function BankCard({ onBankChange }) {
    const auth = useSelector(state => state.auth);
    const [sampleBankes, setSampleBankes] = useState({});
    const [selectedBank, setSelectedBank] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAddBank, setShowAddBank] = useState(false);
    useEffect(()=>{
        setSampleBankes(auth.user?.bank_carts)
    },[auth.user])
    useEffect(()=>{
        if(sampleBankes && sampleBankes.length > 0 && sampleBankes[0]){
            setSelectedBank(sampleBankes[0])
            onBankChange(sampleBankes[0].id);
        }
    },[sampleBankes])

    function handleSelect(Bank) {
        setSelectedBank(Bank);
        setIsModalOpen(false);

        // 👇 وقتی انتخاب شد، آیدی آدرس رو به فرم اطلاع بده
        if (onBankChange) {
            onBankChange(Bank.id);
        }
    }

    return (
        <>
            <div className="border rounded-2xl p-4 space-y-2 shadow-sm">
                {selectedBank &&<>
                    <div className="flex justify-right items-center gap-2 text-blue-custom">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.17843 15.4872L6.7376 14.9874L6.73095 14.98L6.7241 14.9727L6.17843 15.4872ZM17.8216 15.4872L17.2759 14.9727L17.2691 14.98L17.2624 14.9874L17.8216 15.4872ZM12 22L11.4408 22.4998C11.5831 22.659 11.7865 22.75 12 22.75C12.2135 22.75 12.4169 22.659 12.5592 22.4998L12 22ZM4 10H4.75C4.75 5.99594 7.99594 2.75 12 2.75V2V1.25C7.16751 1.25 3.25 5.16751 3.25 10H4ZM12 2V2.75C16.0041 2.75 19.25 5.99594 19.25 10H20H20.75C20.75 5.16751 16.8325 1.25 12 1.25V2ZM6.17843 15.4872L6.7241 14.9727C5.49949 13.6739 4.75 11.9253 4.75 10H4H3.25C3.25 12.3229 4.15614 14.4357 5.63275 16.0018L6.17843 15.4872ZM20 10H19.25C19.25 11.9253 18.5005 13.6739 17.2759 14.9727L17.8216 15.4872L18.3672 16.0018C19.8439 14.4357 20.75 12.3229 20.75 10H20ZM12 22L12.5592 22.4998L18.3807 15.9871L17.8216 15.4872L17.2624 14.9874L11.4408 21.5002L12 22ZM12 22L12.5592 21.5002L6.7376 14.9874L6.17843 15.4872L5.61925 15.9871L11.4408 22.4998L12 22ZM15 10H14.25C14.25 11.2426 13.2426 12.25 12 12.25V13V13.75C14.0711 13.75 15.75 12.0711 15.75 10H15ZM12 13V12.25C10.7574 12.25 9.75 11.2426 9.75 10H9H8.25C8.25 12.0711 9.92893 13.75 12 13.75V13ZM9 10H9.75C9.75 8.75736 10.7574 7.75 12 7.75V7V6.25C9.92893 6.25 8.25 7.92893 8.25 10H9ZM12 7V7.75C13.2426 7.75 14.25 8.75736 14.25 10H15H15.75C15.75 7.92893 14.0711 6.25 12 6.25V7Z" fill="#3664FF" />
                        </svg>

                        <h3 className="text-sm font-bold">انتخاب حساب بانکی</h3>
                    </div>
                    <p className="text-gray-700 text-sm !mr-8">{selectedBank.bank_name_fa}</p>
                    <p className="text-gray-700 text-sm !mr-8">{selectedBank.cart_number}</p>
                    <p className="text-gray-700 text-sm !mr-8">{selectedBank.shaba_number}</p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center w-full text-center gap-1 text-blue-custom font-bold text-sm mt-4"
                    >

                        تغییر حساب بانکی
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33325 7.99998H10.6666M5.33325 7.99998L7.99992 10.6666M5.33325 7.99998L7.99992 5.33331M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z" stroke="#3664FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </> }
                {!selectedBank &&<>
                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                            setShowAddBank(true)
                        }}
                        className="flex items-center justify-center w-full text-center gap-1 text-blue-custom font-bold text-sm mt-4"
                    >

                       افزودن حساب بانکی
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33325 7.99998H10.6666M5.33325 7.99998L7.99992 10.6666M5.33325 7.99998L7.99992 5.33331M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z" stroke="#3664FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </>}
            </div>

            {isModalOpen && (
                <BankModal
                    bank_carts={sampleBankes}
                    onSelect={handleSelect}
                    showAddBank={showAddBank}
                    setShowAddBank={setShowAddBank}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}
