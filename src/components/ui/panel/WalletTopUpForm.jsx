'use client';

import { useEffect, useState } from 'react';
import Button from '../globals/Button';
import increaseWallet from "../../../helpers/api/increaseWallet";
import { useSearchParams } from 'next/navigation';

const amounts = [500000, 1000000, 5000000, 10000000];

export default function WalletTopUpForm() {
    const searchParams = useSearchParams();
    const isSuccess = searchParams.get('success');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)


    const isFail = searchParams.get('fail')
    const handleSelectAmount = (value) => {
        setAmount(value.toLocaleString());
    };

    const handleInputChange = (e) => {
        let rawValue = e.target.value.replace(/,/g, '');
        
        if (!/^\d*$/.test(rawValue)) return;
        if (rawValue > 10000000) {
            rawValue = 10000000;
        }
        setAmount(Number(rawValue).toLocaleString());
    };

    useEffect(() => {
        if (!amount) {
            return;
        }
        if(Number(amount.replace(/,/g, '')) > 10000000 || Number(amount.replace(/,/g, '')) < 500000){
            setError(true)
        }else{
            setError(false)
        }
    }, [amount])

    const handleIncreaseWallet=async ()=>{
        if(Number(amount.replace(/,/g, '')) > 10000000 || Number(amount.replace(/,/g, '')) < 500000){
            setError(true)
            return;
        }
        setLoading(true);
        setError(false)
        const numericValue = Number(amount.replace(/,/g, ''));
       await increaseWallet(numericValue)
       setLoading(false);
    }

    return (
        <div className="section text-center !sticky top-2">
            {isSuccess && (
                <div className="mt-4 mb-5 rounded-2xl bg-green-100 border border-green-400 text-green-800 px-6 py-4 text-sm shadow-md transition-opacity duration-500">
                    <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                       کیف پول شما با موفقیت شارژ شد.
                    </p>
                </div>
            )}
            {isFail && (
                <div className="mt-4 mb-5 rounded-2xl bg-red-100 border border-red-400 text-red-800 px-6 py-4 text-sm shadow-md transition-opacity duration-500">
                    <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        متاسفانه مشکلی در شارژ کیف پول شما پیش آمده است. لطفاً دوباره تلاش کنید.
                    </p>
                </div>
            )}
            <h2 className="text-lg text-blue-custom font-semibold mb-6">افزایش موجودی کیف پول</h2>
            <div className=" mb-6">
                <svg className='w-full' preserveAspectRatio='none' height="2" viewBox="0 0 342 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.75" y1="1.25" x2="341.25" y2="1.24997" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 5" />
                </svg>
            </div>

            <div className="mb-4">
                <label className="block font-bold text-sm mb-3">مبلغ دلخواه</label>
                <div className={`flex border rounded-lg overflow-hidden mb-2 transition-all ${error && 'border-red-500'}`}>
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 text-right outline-none"
                        placeholder="مبلغ واریز"
                        value={amount}
                        onChange={handleInputChange}
                        max={10000000}
                        min={500000}
                    />
                    <span className="bg-gray-100 px-4 py-2 text-gray-500">تومان</span>
                </div>
                <p className={`text-xxs text-gray-400 ${error && 'text-red-500'}`}>مقدار وارد شده می‌بایست بین ۵۰۰,۰۰۰ تا ۱۰,۰۰۰,۰۰۰ تومان باشد.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
                {amounts.map((amt) => (
                    <button
                        key={amt}
                        onClick={() => handleSelectAmount(amt)}
                        className="border border-gray-300 text-xs rounded-lg py-2 hover:bg-gray-100"
                    >
                        {amt.toLocaleString()} تومان
                    </button>
                ))}
            </div>

            <Button onClick={()=>{handleIncreaseWallet();}} loading={loading} gradient={'blue'} size='full'>
            تایید و پرداخت
            </Button>

        </div>
    );
}
