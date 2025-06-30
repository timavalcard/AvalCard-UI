import APIRequest from "../../helpers/api/api";
import getAuthToken from "../../helpers/functions/getAuthToken";

export async function applyCouponOnOrder(coupon,id,setCouponResponseData,setOrder,setCodeIsvalid) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('apply-coupon-on-order',{ id,coupon:coupon },{
            headers: {
                Authorization: `${token}`,
            }
        });
        console.log(response.data)

        if(response.data.type !=="error"){
            setCodeIsvalid(true)
            setOrder(response.data.data)
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