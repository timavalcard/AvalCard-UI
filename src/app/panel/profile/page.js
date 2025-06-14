import React from "react";


import { useSelector } from 'react-redux';
import PageClient from "./pageClient"
import Breadcrump from "@/components/layout/Breadcrump";
export const metadata = {
    title: 'پروفایل'
}

const breadcrump = [{
    title: 'حساب کاربری',
    href: '#'
}]

export default function Page() {

    return (
        <>
            <Breadcrump items={breadcrump} />
            <PageClient />
        </>
    );
}
