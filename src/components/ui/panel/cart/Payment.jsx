"use client"
import { useState } from "react";
import PaymentItem from "../../globals/PaymentItem";
import TitleWithBorder from "@/components/layout/TitleWithBorder";
import Input from "../../globals/Input";
import Button from "../../globals/Button";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Alert from "@/components/ui/globals/alert/Alert";

export default function Payment({active,setActive,walletFail}) {
    const auth = useSelector(state => state.auth);


    return (
        <div className="space-y-6">
            <div className="section">
                <TitleWithBorder>
                    روش های پرداخت
                </TitleWithBorder>
                <div className="space-y-4">
                    <PaymentItem
                        title={'درگاه زرین پال'}
                        des={'امکان پرداخت با تمام کارت های عضو شتاب'}
                        img={'/images/zarinpall.webp'}
                        active={active === 'zarinpal'}
                        onClick={() => setActive('zarinpal')}
                    />
                    <PaymentItem
                        title={'درگاه زیبال'}
                        des={'امکان پرداخت با تمام کارت های عضو شتاب'}
                        img={'/images/zibal.jpg'}
                        active={active === 'zibal'}
                        onClick={() => setActive('zibal')}
                    />
                    {auth.user?.wallet_amount > 0 &&<PaymentItem
                        title={'کیف پول اول کارت '}
                        des={auth.user?.wallet}
                        img={'/images/wallet.webp'}
                        active={active === 'wallet'}
                        onClick={() => setActive('wallet')}
                    />}

                    {walletFail && <Alert className="!text-lg" allowClose={true} type={'warning'}>
                        موجودی کیف پول شما کافی نیست برای شارز کردن کیف پول خود
                        {" "}<Link href={"/panel/wallet"}>
                            اینجا کلیک کنید
                        </Link>
                    </Alert>

                    }

                </div>
            </div>

            
        </div>
    );
}