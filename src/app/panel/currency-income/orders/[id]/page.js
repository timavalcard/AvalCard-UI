
import React from "react";

import styles from './page.module.css'
import Label from "@/components/ui/globals/labelStatus/Label";
import Alert from "@/components/ui/globals/alert/Alert";
import UserFeedback from "@/components/ui/userFeedback/UserFeedback";
import { getOrder } from "@/helpers/api/cart/getOrder";
import { notFound } from 'next/navigation'
import OrderType from "@/components/ui/globals/labelStatus/OrderType";
import Table from "@/components/ui/panel/Table";
import Breadcrump from "@/components/layout/Breadcrump";
import OrderStatus from "../../../../../components/layout/panel/OrderStatus";
import {fetchGetCurrencyIncomeOrder} from "../../../../../helpers/api/currencyIncome/getOrder";


export const metadata = {
    title: 'جزئیات سفارش'
}

export default async function Page({ params }) {
    const { id } = params;

    const order = await fetchGetCurrencyIncomeOrder(id)
    if (!order) {
        notFound();
    }

    const breadcrump = [
        {
            title: 'نقد کردن درآمد ارزی',
            href: '/panel/currency-income'
        },
        {
            title: 'سفارشات',
            href: '/panel/currency-income/orders'
        },
        {
            title: order.id,
            href: '#'
        }
    ]
    const statusMap = {
        'on-hold': 1,
        'processing': 2,
        'completed': 3,
        'cancelled': 0,
        'failed': 0
    };
    return (
        <>
            <Breadcrump items={breadcrump} />
                <div className="text-lg font-bold mt-custom-3">
                سفارش {order.id}
                </div>
            <div className="mt-custom-2 section">


                <OrderStatus currentStep={statusMap[order.status] ?? 0} />
                <div className="max-w-2xl mx-auto mt-10">
                    <Table>
                        <thead className="">
                            <tr>
                                <th> شناسه سفارش</th>
                                <th> قیمت
                                    {" "}{order.factor?.currency}{" "}
                                    زمان سفارش</th>
                                <th> زمان سفارش </th>
                                <th>کارمزد</th>
                                <th> مجموع مبلغ</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr key={order.id} className="">
                                <td>{order.id}</td>
                                <td>{order.factor?.unit_price}</td>
                                <td className="!text-[10px]">{order.created_at}</td>
                                <td className="">{order.factor?.fee_amount?.toLocaleString("fa") + " تومان "}</td>
                                <td className="">{order.price}</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    );
}
