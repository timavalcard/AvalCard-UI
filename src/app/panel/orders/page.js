
import React from "react";

import styles from './page.module.css'
import Tabs from "@/components/ui/panel/orders/Tabs";
import Label from "@/components/ui/globals/labelStatus/Label";
import Link from "next/link";
import Table from "@/components/ui/panel/Table";
import { getOrders } from "../../../helpers/api/cart/getOrders";
import OrderType from "../../../components/ui/globals/labelStatus/OrderType";
import Breadcrump from "@/components/layout/Breadcrump";

export const metadata = {
  title: 'سفارشات'
}

const breadcrump = [{
  title: 'سفارشات',
  href: '#'
}]

export default async function Page() {


  const orders = await getOrders()
  return (

    <>
      <Breadcrump items={breadcrump} />
      {/*<Tabs />*/}
      <div className="mt-custom-4">
        <Table>
          <thead className="">
            <tr>
              <th>ردیف</th>
              <th>شماره سفارش</th>
              <th>مبلغ درخواست</th>
              {/*<th> نام سفارش </th>*/}
              <th>نوع سفارش</th>
              <th>تاریخ ثبت سفارش</th>
              <th>وضعیت پرداخت</th>
              <th>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {orders && orders.length && orders.map((order, index) => (
              <tr key={order.id} className="">
                <td className="!text-xs">{index + 1}</td>
                <td>{order.id}</td>
                <td className="!text-xs !text-black">{order.price}</td>
                {/*<td className="!text-xs !text-black">
                  {order.order_title}
                </td>*/}
                <td className="!text-xs !text-black">
                  <OrderType order_type={order.order_type} />
                </td>
                <td>{order.created_at}</td>
                <td>
                  <Label status={order.status} />
                </td>
                <td>
                  <Link href={`/panel/orders/${order.id}`} className="flex items-center align-middle gap-1 cursor-pointer text-center justify-center transition-all !text-[#909090] hover:!text-[#3b3b3b]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.29248 4.0394V8.0394M4.29248 6.0394H8.29248M11.2925 6.0394C11.2925 8.80082 9.0539 11.0394 6.29248 11.0394C3.53106 11.0394 1.29248 8.80082 1.29248 6.0394C1.29248 3.27797 3.53106 1.0394 6.29248 1.0394C9.0539 1.0394 11.2925 3.27797 11.2925 6.0394Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    جزئیات
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
