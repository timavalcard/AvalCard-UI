
import React from "react";

import styles from './page.module.css'
import Tabs from "@/components/ui/panel/orders/Tabs";
import Label from "@/components/ui/globals/labelStatus/Label";
import Link from "next/link";
import Table from "@/components/ui/panel/Table";

export const metadata = {
  title: 'سفارشات'
}

export default function Page() {

  const orders = [
    {
      id: 1,
      orderNumber: "۲۵۸۷۸۴",
      requestType: "pubg mobile",
      orderType: 'گیفت کارت',
      amount: "۳۵,۰۰۰ تومان",
      paymentDate: "23 اسفند 1404 ساعت 14:25",
      status: "موفق",
    },
    {
      id: 2,
      orderNumber: "۶۵۳۴۲۳",
      requestType: "pubg mobile",
      orderType: 'گیم کارت',
      amount: "۱۲,۰۰۰ تومان",
      paymentDate: "23 اسفند 1404 ساعت 14:25",
      status: "ناموفق",
    },
    {
      id: 3,
      orderNumber: "۴۷۵۸۷۴",
      requestType: "pubg mobile",
      orderType: 'نقد کردن',
      amount: "۱۰۰,۰۰۰ تومان",
      paymentDate: "23 اسفند 1404 ساعت 14:25",
      status: "در حال پردازش",
    },
    {
      id: 4,
      orderNumber: "۹۲۵۸۷۴",
      requestType: "pubg mobile",
      orderType: 'گیفت کارت',
      amount: "۲۰۰,۰۰۰ تومان",
      paymentDate: "23 اسفند 1404 ساعت 14:25",
      status: "موفق",
    },
    {
      id: 5,
      orderNumber: "۵۸۷۹۶۱",
      requestType: "pubg mobile",
      orderType: 'گیفت کارت',
      amount: "۵۰,۰۰۰ تومان",
      paymentDate: "23 اسفند 1404 ساعت 14:25",
      status: "موفق",
    },
  ];

  return (
    <>
      <Tabs />
      <div className="mt-custom-4">
        <Table>
          <thead className="">
            <tr>
              <th>ردیف</th>
              <th>شماره سفارش</th>
              <th>نوع درخواست</th>
              <th>مبلغ درخواست</th>
              <th>نوع سفارش</th>
              <th>تاریخ پرداخت</th>
              <th>وضعیت پرداخت</th>
              <th>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="">
                <td className="!text-xs">{index + 1}</td>
                <td>{order.orderNumber}</td>
                <td className="!text-[#858585]">{order.requestType}</td>
                <td className="!text-xs !text-black">{order.amount}</td>
                <td className="!text-xs !text-black">{order.orderType}</td>
                <td>{order.paymentDate}</td>
                <td>
                  <Label status={order.status} />
                </td>
                <td>
                  <Link href={'/panel/orders/test'} className="flex items-center align-middle gap-1 cursor-pointer text-center justify-center transition-all !text-[#909090] hover:!text-[#3b3b3b]">
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
