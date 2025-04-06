
import React from "react";

import styles from './page.module.css'
import Label from "@/components/ui/globals/labelStatus/Label";
import Alert from "@/components/ui/globals/alert/Alert";
import UserFeedback from "@/components/ui/userFeedback/UserFeedback";


export const metadata = {
    title: 'جزئیات سفارش'
}

export default function Page() {

    const orders = [
        {
            id: 1,
            orderNumber: "۲۵۸۷۸۴",
            requestType: "pubg mobile",
            orderType: 'گیفت کارت',
            amount: "۳۵,۰۰۰ تومان",
            regen: "امریکا",
            paymentDate: "23 اسفند 1404 ساعت 14:25",
            status: "موفق",
        }
    ];



    return (
        <>
            <div className="mt-custom-4 section">
                <div className="huge-text-little-bold flex items-center gap-1.5">
                    <div>
                        <img src="/images/img.svg" />
                    </div>
                    <div className="mt-1 text-xs">
                        اکانت یک ماهه CANVA
                    </div>
                </div>
                <div>
                    <table className={'custom-tabel'}>
                        <thead className="">
                            <tr>
                                <th> نام سفارش </th>
                                <th> شماره سفارش </th>
                                <th> زمان سفارش </th>
                                <th> نوع سقارش </th>
                                <th> ریجن </th>
                                <th> قیمت محصول </th>
                                <th> وضعیت سفارش </th>

                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order.id} className="">
                                    <td className="">{order.requestType}</td>
                                    <td>{order.orderNumber}</td>
                                    <td className="!text-[10px]">{order.paymentDate}</td>
                                    <td className="">{order.orderType}</td>
                                    <td className="">{order.regen}</td>
                                    <td className="">{order.amount}</td>
                                    <td>
                                        <Label status={order.status} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center">

                    <div className="mt-custom-3 p-5 w-auto bg-greenLight text-white text-xs rounded-2lg">
                        سفارش شما با عنوان خرید گیفت کارت PUBG MOBILE در تاریخ 23 اسفند 1404 در ساعت 14:25 با موفقیت انجام شده است.
                    </div>
                </div>
            </div>

            <div className="mt-custom-2">
                <Alert message={'برای این سفارش درخواست فاکتور رسمی صادر نگردیده است.'} type={'warning'} />
            </div>

            <div className="mt-custom-2">
                <Alert message={'ایا میخواهید این سفارش حذف شود ؟'} type={'danger'} />
            </div>

            <div className="mt-custom-3 section">
                <div className="huge-text-little-bold flex items-center gap-1.5">
                    <div>
                        <img src="/images/img.svg" />
                    </div>
                    <div className="mt-1 text-xs">
                        کد گیفت کارت :DFRH549HT645
                    </div>
                </div>
                <div>
                    <table className={'custom-tabel'}>
                        <thead className="">
                            <tr>
                                <th> مجموع هزینه خدمات (ریال) </th>
                                <th> مجموع هزینه خدمات به حروف </th>
                                <th> مبلغ پرداخت شده (ریال) </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="">
                                <td className="">
                                    987.525
                                </td>
                                <td className="">
                                    نهصد و هشتاد و هفت هزار و بیست و پنج
                                </td>
                                <td>
                                    987.525
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-muted-2 text-xs">
                    مبلغ نهایی شامل هزینه تبدیل ارز و کارمزد و موارد دیگر است.
                </div>

            </div>

            <div className="mt-custom-4">
                <UserFeedback />
            </div>

        </>
    );
}
