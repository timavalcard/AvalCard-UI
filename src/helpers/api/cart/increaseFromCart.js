import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function increaseFromCart(product_id,variation_id,dispatch) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('increase-cart',{ product_id,variation_id },{
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