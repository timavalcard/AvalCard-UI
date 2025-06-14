import APIRequest from "../../helpers/api/api";
import getAuthToken from "../../helpers/functions/getAuthToken";

export async function getCurrencies() {
    let articles = null;
    try {
        const response = await APIRequest.post('get-currencies-price',{  });
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