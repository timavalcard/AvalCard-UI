import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function fetchAddBuyProductOrder(data,currency_code,rialAmount,shippingCostInToman,fullPrice,addressId,product_id,ten_percent,fee_amount,fee_percent,router) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('add-buy-product-order',{
            ...data,
            currency_code,
            product_id,
            ten_percent,
            rialAmount,
            shippingCostInToman,
            fullPrice,
            addressId,
            fee_amount,
            fee_percent

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