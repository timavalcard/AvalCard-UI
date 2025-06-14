import APIRequest from "../../../helpers/api/api";
import { cookies } from "next/headers";

export async function getCurrencyIncomeOrders() {
    let articles = null;
    const cookieStore = await cookies(); // این باید await بشه
    const token = cookieStore.get("token")?.value;
    try {
        const response = await APIRequest.get('currency-income-orders',{
            headers: {
                Authorization: `${token}`,
            }
        });
        return response.data.data

    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error("خطای ناشناخته:", error.message);
        }
    }
    return articles;
}