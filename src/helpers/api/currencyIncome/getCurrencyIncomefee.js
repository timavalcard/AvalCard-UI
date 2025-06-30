import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function getCurrencyIncomeFee() {
    let articles = null;
    try {
        const response = await APIRequest.get('get-currency-income-fee',{  });
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