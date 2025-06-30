import APIRequest from "../../../helpers/api/api";
import { cookies } from "next/headers";

export async function fetchGetCurrencyIncomeOrder(id) {
    let articles = null;
        const token = cookies().get("token")?.value;

    try {
        const response = await APIRequest.get('currency-income-order-detail',{
            params: { id: id },
            headers: {
                Authorization: `${token}`,
            }
        });
        console.log(response)
        return response.data.data

    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error(error);
        }
    }
    return articles;
}