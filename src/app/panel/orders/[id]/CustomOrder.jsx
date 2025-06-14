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
import DiscountedCodeOnOrder from "../../../../components/ui/panel/DiscountedCodeOnOrder";

export default function CustomOrder({orderData}) {
    const searchParams = useSearchParams();
    const isFail = searchParams.get('fail')

    const isSuccess = searchParams.get('success');
    const [active, setActive] = useState('zarinpal')
    const [order, setOrder] = useState(orderData)
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
        await payBuyProductOrder(order.id,active,setWalletFail)
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

                                <th> وزن محصول</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr key={order.id} className="">
                                <td><a target={"_blank"} href={order.factor?.link} className="flex items-center text-blue-custom gap-1">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1033_3169)">
                                                <path d="M6.66668 8.66673C6.95298 9.04948 7.31825 9.36618 7.73771 9.59535C8.15717 9.82452 8.62102 9.9608 9.09778 9.99495C9.57454 10.0291 10.0531 9.9603 10.5009 9.79325C10.9487 9.62619 11.3554 9.36477 11.6933 9.02673L13.6933 7.02673C14.3005 6.39805 14.6365 5.55604 14.6289 4.68205C14.6213 3.80807 14.2708 2.97202 13.6527 2.354C13.0347 1.73597 12.1987 1.38541 11.3247 1.37781C10.4507 1.37022 9.60869 1.7062 8.98001 2.31339L7.83334 3.45339M9.33334 7.33339C9.04704 6.95064 8.68177 6.63394 8.26231 6.40477C7.84285 6.17559 7.37901 6.03931 6.90224 6.00517C6.42548 5.97102 5.94695 6.03981 5.49911 6.20687C5.05128 6.37393 4.6446 6.63534 4.30668 6.97339L2.30668 8.97339C1.69948 9.60207 1.3635 10.4441 1.3711 11.3181C1.37869 12.1921 1.72926 13.0281 2.34728 13.6461C2.96531 14.2641 3.80135 14.6147 4.67534 14.6223C5.54933 14.6299 6.39134 14.2939 7.02001 13.6867L8.16001 12.5467" stroke="#3664FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1033_3169">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div>
                                        لینک محصول
                                    </div>
                                </a>
                                </td>
                                <td>
                                    {order.id}
                                </td>
                                <td>{order.factor?.unit_price}</td>
                                <td className="!text-[10px]">{order.created_at}</td>
                                <td className="">{order.factor?.fee_amount  ? order.factor?.fee_amount.toLocaleString("fa") + " تومان " : ""}</td>
                                <td className="">{order.factor?.ten_percent  ? order.factor?.ten_percent.toLocaleString("fa") : ""}</td>
                                <td className="">{order.price}</td>
                                <td className="">{order.factor?.weight} {order.factor?.weightUnit}</td>
                            </tr>

                            <tr key={order.id} className="font-bold">
                                <td>
                                    توضیحات:
                                </td>
                                <td colSpan={5} className="!text-right !justify-start">
                                    <div className="!text-right ml-auto">
                                    {order.factor?.des}
                                    </div>
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