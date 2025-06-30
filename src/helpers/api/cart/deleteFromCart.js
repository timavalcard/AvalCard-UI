import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function deleteFromCart(product_id,variation_id,dispatch) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.delete('delete-from-cart', {
            data: { product_id, variation_id },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
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