"use client"
import React,{useState} from "react";

import Label from "@/components/ui/globals/labelStatus/Label";
import UserFeedback from "@/components/ui/userFeedback/UserFeedback";
import OrderType from "../../../../components/ui/globals/labelStatus/OrderType";
import Table from "@/components/ui/panel/Table";
import Payment from "../../../../components/ui/panel/cart/Payment";
import {payBuyProductOrder} from "../../../../helpers/api/buyProduct/payOrder";
import Button from "../../../../components/ui/globals/Button";
import { useSearchParams } from 'next/navigation';
import DiscountedCodeOnOrder from "../../../../components/ui/panel/DiscountedCodeOnOrder";




export default async function GiftCartOrder({ orderData }) {
    const searchParams = useSearchParams();
    const [active, setActive] = useState('zarinpal')
    const [walletFail, setWalletFail] = useState(false)
    const isFail = searchParams.get('fail')
    const [order, setOrder] = useState(orderData)
    const isSuccess = searchParams.get('success');

    const handlePayOrder = async ()=>{
        await payBuyProductOrder(order.id,active,setWalletFail)
    }
    const Content = () => {
        return (
            <>
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

                {order.post_tracking_code &&
                <div className="flex justify-center">
                    <div style={{whiteSpace:"break-spaces"}} className="mt-custom-3 px-5 py-4 !leading-7 w-auto bg-greenLight text-white text-sm rounded-2lg">
                        کد گیفت کارت : <br/>
                        {order.post_tracking_code}
                    </div>
                </div>

                }

                <div className="mt-custom-4 section">
                    <div className="huge-text-little-bold flex items-center gap-1.5">

                        <div className="mt-1 text-xs">
                            جزییات سفارش
                        </div>
                    </div>
                    <div>
                        <Table>
                            <thead className="">
                            <tr>
                                <th> شماره سفارش </th>
                                <th> زمان سفارش </th>
                                <th> نوع سقارش </th>
                                <th>کارمزد</th>
                                <th>ارزش افزوده</th>
                                <th> قیمت کل </th>
                                {order.coupon_discount &&<th>مبلغ کوپن تخفیف</th> }
                                <th> وضعیت سفارش </th>

                            </tr>
                            </thead>

                            <tbody>

                            <tr key={order.id} className="">
                                <td>{order.id}</td>
                                <td className="!text-[10px]">{order.created_at}</td>
                                <td className=""><OrderType order_type={order.order_type} /></td>
                                <td className="">{order.factor?.fee}</td>
                                <td className="">{order.factor?.ten_percent}</td>
                                <td className="">{order.price}</td>
                                {order.coupon_discount &&<td className="">{order.coupon_discount}</td> }
                                <td>
                                    <Label status={order.status} />
                                </td>
                            </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className="flex justify-center">

                        {(order.status == "processing" || order.status == "completed") && <div className="mt-custom-3 px-5 py-4 !leading-7 w-auto bg-greenLight text-white text-sm rounded-2lg">
                            سفارش شما
                            {" "}
                            در تاریخ
                            {" "}
                            {order.created_at}
                            {" "}
                            با موفقیت انجام شده است.
                        </div>}
                    </div>
                </div>


                  <div className="mt-custom-4 section">
                            <div className="huge-text-little-bold flex items-center gap-1.5">

                                <div className="mt-1 text-xs">
                                    جزییات گیفت کارت ها
                                </div>
                            </div>
                            <div>
                                <Table>
                                    <thead className="">
                                    <tr>
                                        <th> نام گیفت کارت </th>
                                        {order.variations && <th> متغیر </th>}
                                        <th> تعداد </th>
                                        <th> قیمت </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {order.factor?.products.length > 0 && order.factor?.products.map((item)=>{
                                        return (

                                            <tr key={order.id} className="">
                                                <td className="">{item.title}</td>
                                                <td className="" dangerouslySetInnerHTML={{__html:item.variations}}></td>
                                                <td className="">{item.quantity}</td>
                                                <td className="">{item.price}</td>
                                            </tr>
                                        )

                                    })}

                                    </tbody>
                                </Table>
                            </div>

                        </div>







                {/* <div className="mt-custom-2">
                <Alert message={'برای این سفارش درخواست فاکتور رسمی صادر نگردیده است.'} type={'warning'} />
            </div>

            <div className="mt-custom-2">
                <Alert message={'ایا میخواهید این سفارش حذف شود ؟'} type={'danger'} />
            </div>*/}

                {(order.status == "completed"  || order.status == "processing" )&&<div className="mt-custom-3 section">

                        {order.post_tracking_code &&
                            <div className="flex justify-center">
                                <div style={{whiteSpace:"break-spaces"}} className="mt-custom-3 px-5 py-4 !leading-7 w-auto bg-greenLight text-white text-sm rounded-2lg">
                                    کد گیفت کارت : <br/>
                                    {order.post_tracking_code}
                                </div>
                            </div>

                        }

                    <div>
                        <table className={'custom-tabel'}>
                            <thead className="">
                            <tr>
                                <th> مجموع هزینه گیفت کارت (تومان) </th>

                                {order.coupon_discount && <th>مقدار تخفیف کوپن</th>}
                            </tr>
                            </thead>

                            <tbody>
                            <tr className="">
                                <td className="">
                                    {order.price}
                                </td>
                                {order.coupon_discount && <td>
                                    {order.coupon_discount}
                                </td> }
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-muted-2 text-xs">
                        مبلغ نهایی شامل هزینه تبدیل ارز و کارمزد و موارد دیگر است.
                    </div>

                </div> }
                {order.status == "pending" &&
                <>
                    <div className="mt-custom-4">
                        <DiscountedCodeOnOrder coupon={order.coupon_name} coupon_discount={order.coupon_discount} order_id={order.id} setOrder={setOrder} />
                        <div className="mt-custom-4">
                            <Payment walletFail={walletFail} setActive={setActive} active={active}/>
                        </div>
                        <Button onClick={()=>{handlePayOrder()}} gradient={'blue'} size='xl' className={"mx-auto mt-custom-4"}>
                            پرداخت و نهایی کردن سفارش
                        </Button>
                    </div>
                </>
                }
                {!order.comment && order.status == "completed" && <div className="mt-custom-4">
                    <UserFeedback order_id={order.id} />
                </div>}
            </>
        );
    }

    return (
        <>
            <Content />
        </>
    );
}
