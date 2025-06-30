import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";
import { cookies } from "next/headers";

export default async function fetchWalletTransactions() {
    let transaction = null;
    const token = cookies().get("token")?.value;
    try {
        const response = await APIRequest.post('wallet-transactions',{}, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        transaction = await response.data;
        transaction =  transaction.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            transaction = null
        } else {

            console.error(error);
        }
    }
    console.log(transaction)
    return transaction;

}