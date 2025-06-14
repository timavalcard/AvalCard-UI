import React from "react";

import styles from './page.module.css'
import Label from "@/components/ui/globals/labelStatus/Label";
import Alert from "@/components/ui/globals/alert/Alert";
import UserFeedback from "@/components/ui/userFeedback/UserFeedback";
import { getOrder } from "../../../../helpers/api/cart/getOrder";
import { notFound } from 'next/navigation'
import OrderType from "../../../../components/ui/globals/labelStatus/OrderType";
import Table from "@/components/ui/panel/Table";
import Breadcrump from "@/components/layout/Breadcrump";
import CustomOrder from "./CustomOrder";
import InterPaymentOrder from "./InterPaymentOrder";
import GiftCartOrder from "./GiftCartOrder";


export const metadata = {
    title: 'جزئیات سفارش'
}

export default async function Page({ params }) {
    const { id } = params;

    const order = await getOrder(id)
    if (!order) {
        notFound();
    }

    const breadcrump = [{
        title: 'سفارشات',
        href: '/panel/orders'
    },
    {
        title: order.id,
        href: '#'
    }
    ]


    return (
        <>
            <Breadcrump items={breadcrump} />

            {
                order.order_type === 'buy_product' ? (
                    <CustomOrder orderData={order} />
                ) : order.order_type === 'inter_payment' ? (
                    <InterPaymentOrder orderData={order} />
                ) : (
                    <GiftCartOrder orderData={order}/>
                )
            }


        </>
    );
}
