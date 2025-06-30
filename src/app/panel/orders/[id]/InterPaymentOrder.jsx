"use client"

import OrderStatus from "@/components/layout/panel/OrderStatus";
import Table from "@/components/ui/panel/Table";
import Link from "next/link";
import Alert from "../../../../components/ui/globals/alert/Alert";
import Button from "../../../../components/ui/globals/Button";
import {payBuyProductOrder} from "../../../../helpers/api/buyProduct/payOrder";
import Payment from "../../../../components/ui/panel/cart/Payment";
import { useState,useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import {payInterPaymentOrder} from "../../../../helpers/api/interPayment/payOrder";
import DiscountedCodeOnOrder from "../../../../components/ui/panel/DiscountedCodeOnOrder";

export default function InterPaymentOrder({orderData}) {
    const searchParams = useSearchParams();
    const isFail = searchParams.get('fail')
    const [order, setOrder] = useState(orderData)
    const isSuccess = searchParams.get('success');
    const [active, setActive] = useState('zarinpal')
    const [walletFail, setWalletFail] = useState(false)
    const statusMap = {
        'on-hold': 1,
        'pending': 1,
        'processing': 2,
        'completed': 3,
        'cancelled': 0,
        'failed': 0
    };


    const handlePayOrder = async ()=>{
        await payInterPaymentOrder(order.id,active,setWalletFail)
    }
    return (
        <div>
            <div className="text-lg font-bold mt-custom-3">
                سفارش {order.id}
            </div>
            <div className="mt-custom-2 section">
                {isSuccess && (
                    <div className="mt-4 mb-5 rounded-2xl bg-green-100 border border-green-400 text-green-800 px-6 py-4 text-sm shadow-md transition-opacity duration-500">
                        <p className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            سفارش شما با موفقیت پرداخت شد.
                        </p>
                    </div>
                )}
                {isFail && (
                    <div className="mt-4 mb-5 rounded-2xl bg-red-100 border border-red-400 text-red-800 px-6 py-4 text-sm shadow-md transition-opacity duration-500">
                        <p className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            متاسفانه مشکلی در پرداخت شما پیش آمده است. لطفاً دوباره تلاش کنید.
                        </p>
                    </div>
                )}

                <OrderStatus status={order.status} currentStep={statusMap[order.status] ?? 0} />
                <div className="max-w-3xl mx-auto mt-10">
                    <Table>
                        <thead className="">
                            <tr>
                                <th> محصول ثبت شده</th>
                                <th> شناسه سفارش</th>
                                <th> قیمت
                                    {" "}{order.factor?.currency}{" "}
                                    زمان سفارش
                                    </th>
                                <th> زمان سفارش </th>
                                <th>کارمزد</th>
                                <th>ارزش افزوده</th>
                                <th> مجموع مبلغ</th>
                                {order.coupon_discount &&<th>مبلغ کوپن تخفیف</th> }

                            </tr>
                        </thead>

                        <tbody>

                            <tr key={order.id} className="">
                                <td>
                                    <div>
                                        {order.factor?.product_name}
                                    </div>

                                </td>
                                <td>
                                    {order.id}
                                </td>
                                <td>{order.factor?.unit_price}</td>
                                <td className="!text-[10px]">{order.created_at}</td>
                                <td className="">{order.factor?.fee}</td>
                                <td className="">{order.factor?.ten_percent}</td>
                                <td className="">{order.price}</td>
                                {order.coupon_discount &&<td className="">{order.coupon_discount}</td> }
                            </tr>
                            
                            <tr key={order.id} className="font-bold">
                                <td>
                                    توضیحات:
                                </td>
                                <td colSpan={5} className="text-right">
                                    {order.factor?.des}
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                    {order.comment && order.status != "completed"  && order.status != "processing" &&<Alert
                        className="!py-5 !gap-2 mt-5 mb-5"
                        type="warning"
                        message={order.comment}
                    />}

                    {order.status == "pending" &&<>
                        <DiscountedCodeOnOrder coupon={order.coupon_name} coupon_discount={order.coupon_discount} order_id={order.id} setOrder={setOrder} />
                        <div className="mt-custom-4">
                            <Payment walletFail={walletFail} setActive={setActive} active={active}/>
                        </div>
                        <Button onClick={()=>{handlePayOrder()}} gradient={'blue'} size='full'>
                            پرداخت و نهایی کردن سفارش
                        </Button>
                    </>}
                </div>
            </div>
        </div>
    );
}