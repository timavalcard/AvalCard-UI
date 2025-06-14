import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function fetchAddInterPaymentOrder(data,currency_code,product_id,router) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('add-inter-payment-order',{
            ...data,
            currency_code,
            product_id,

        },{
            headers: {
                Authorization: `${token}`,
            }
        });
        const order = response.data
        if(order.data?.id){
            router.push(`/panel/orders/${order.data.id}`)
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