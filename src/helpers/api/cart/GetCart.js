import APIRequest from "../../../helpers/api/api";
import { cookies } from "next/headers";


export async function getCart() {
    let articles = null;
    try {
        const token = cookies().get("token")?.value;
        const response = await APIRequest.post('get-cart',{},{
            headers: {
                Authorization: `${token}`,
            }
        });

        return response.data

    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error(error);
        }
    }
    return articles;
}