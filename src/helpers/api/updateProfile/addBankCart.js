import APIRequest from "./../api";
import getAuthToken from "../../functions/getAuthToken";
export async function fetchAddBankCart(data,cart,dispatch) {
    let user = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('add-bank-cart',{
            ...data,
                cart

        }, {
                headers: {
                    Authorization: `${token}`,
                }
            }
            );
        user = await response.data;
        user=user.data
        if(user){
            dispatch({ type: 'LOGIN',user:user });
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            user = null
        } else {

            console.error(error);
        }
    }
    console.log(user)
    return user;

}