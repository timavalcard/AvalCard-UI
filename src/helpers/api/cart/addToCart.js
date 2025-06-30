import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function addToCart(product_id,variation_id=null,quantity=1,setIsAddedToCart=null) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('add-to-cart',{ product_id,variation_id,quantity},{
            headers: {
                Authorization: `${token}`,
            }
        });
    if (setIsAddedToCart){
        setIsAddedToCart(true)
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