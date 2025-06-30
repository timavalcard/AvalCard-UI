'use client';

import Button from '@/components/ui/globals/Button';
import AddBankCard from '@/components/ui/profile/forms/AddBankCard';
import { useState } from 'react';

export default function BankModal({ bank_carts, onSelect, onClose,showAddBank, setShowAddBank }) {


    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[999]">
            <div className="bg-white rounded-2xl p-6 w-full max-w-[500px] space-y-4 shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-right">انتخاب حساب بانکی</h2>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                    {bank_carts.map((addr) => (
                        <div
                            key={addr.id}
                            onClick={() => onSelect(addr)}
                            className="border rounded-lg p-3 hover:bg-blue-50 cursor-pointer transition"
                        >
                            <p className="text-sm font-bold">{addr.bank_name_fa}</p>
                            <p className="text-xs text-gray-500">{addr.cart_number}</p>
                            <p className="text-xs text-gray-500">{addr.shaba_number}</p>
                        </div>
                    ))}
                </div>

                { showAddBank && <AddBankCard showButton={false} isShow={showAddBank} setIsShow={setShowAddBank} />}

                <div className="flex gap-3 mt-4">
                    <Button
                        onClick={() => setShowAddBank(true)}
                        size='full'
                        outline={'blue'}
                    >
                        افزودن حساب بانکی جدید
                    </Button>
                    <Button
                        onClick={onClose}
                        size='full'
                    >
                        بستن
                    </Button>
                </div>
            </div>
        </div>
    );
}
