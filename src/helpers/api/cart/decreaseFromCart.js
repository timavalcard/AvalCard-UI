import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function decreaseFromCart(product_id,variation_id=null,dispatch) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('decrease-cart',{ product_id,variation_id },{
            headers: {
                Authorization: `${token}`,
            }
        });
        console.log(response.data)
        const user = await response.data.data;
        if(user){
            dispatch({ type: 'LOGIN',user:user });
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