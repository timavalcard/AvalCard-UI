'use client';

import Button from '@/components/ui/globals/Button';
import AddAddress from '@/components/ui/profile/forms/AddAddress';
import { useState } from 'react';

export default function AddressModal({ addresses, onSelect, onClose,showAddAddress, setShowAddAddress }) {


    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[999]">
            <div className="bg-white rounded-2xl p-6 w-full max-w-[500px] space-y-4 shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-right">انتخاب آدرس</h2>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            onClick={() => onSelect(addr)}
                            className="border rounded-lg p-3 hover:bg-blue-50 cursor-pointer transition"
                        >
                            <p className="text-sm font-bold">{addr.title}</p>
                            <p className="text-xs text-gray-500">{addr.address}</p>
                            <p className="text-xs text-gray-500">{addr.phone}</p>
                        </div>
                    ))}
                </div>

                { showAddAddress && <AddAddress showButton={false} isShow={showAddAddress} setIsShow={setShowAddAddress} />}

                <div className="flex gap-3 mt-4">
                    <Button
                        onClick={() => setShowAddAddress(true)}
                        size='full'
                        outline={'blue'}
                    >
                        افزودن آدرس جدید
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
