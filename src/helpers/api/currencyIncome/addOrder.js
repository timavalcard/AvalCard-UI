import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function fetchAddCurrencyIncomeOrder(data,currency_code,bankId,router) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('add-currency-income-order',{ ...data,bankId,currency_code },{
            headers: {
                Authorization: `${token}`,
            }
        });
        const order = response.data
        if(order.data?.id){
            router.push(`/panel/currency-income/orders/${order.data.id}`)
        }

    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error(error);
        }
    }
    return articles;
}