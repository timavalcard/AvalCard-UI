"use client"

import { useState,useEffect } from "react";
import Total from "./Total";
import PriceDollar from "../../globals/PriceDollar";
import CartItems from "./CartItems";
import Payment from "./Payment";
import DiscountedCode from "./DiscountedCode";
import {addOrder} from "../../../../helpers/api/cart/addOrder";
import { useRouter } from "next/navigation";


export default function Content({cart}) {
    const router = useRouter();
    const [payment, setPayment] = useState(false);
    const [cartData, setCart] = useState(cart);
    const [active, setActive] = useState('zarinpal')
    const [walletFail, setWalletFail] = useState(false)
    const next = async () => {
        if(!payment){
        setPayment(true)

        } else{
            const order = await addOrder(active,cartData.ten_percent,cartData.fees,setWalletFail)

            if(order.id){
                //router.push(`/panel/orders/${order.id}`)
            }
        }
    };



    return (
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-custom-3">
            <div className="md:col-span-8">
                {
                    <div className={`${payment ? 'hidden' : 'FadeInAnimate'}`}>
                        <CartItems setCart={setCart} data={cartData.products} />
                    </div>
                }
                {
                    <div className={`${!payment ? 'hidden' : 'FadeInAnimate'}`}>
                        <Payment walletFail={walletFail}  setActive={setActive} active={active}/>

                        <DiscountedCode
                        setCart={setCart}
                        data={cartData.products}
                        />
                    </div>
                }
            </div>
            <div className="md:col-span-4 space-y-3.5">
                <Total
                    price_without_fee={cartData.cart_products_total_price_without_fee}
                    items={cartData.products}
                    totalPrice={cartData.cart_total_price}
                    ten_percent={cartData.ten_percent}
                    fees={cartData.fees}
                    cart_products_offer_price={cartData.cart_products_offer_price}
                    cart_full_price={cartData.cart_full_price}
                    total={cartData.cart_products_total_number}
                    coupon_amount={cartData.coupon_amount}
                    next={next}
                />

                <PriceDollar dollar={cartData.dollar} />
            </div>
        </div>
    );
}
