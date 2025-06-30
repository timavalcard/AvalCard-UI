import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";
import {getCart} from "./GetCartFromUi";

export async function applyCoupon(coupon,setCouponResponseData,setCart,setCodeIsvalid) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('apply-coupon',{ coupon:coupon },{
            headers: {
                Authorization: `${token}`,
            }
        });
        console.log(response.data)

        if(response.data.type !=="error"){

            const cart = await getCart()

            setCart(cart)
            setCodeIsvalid(true)
        } else{
            setCouponResponseData(response.data.message)
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