import APIRequest from "./../api";
import getAuthToken from "../../functions/getAuthToken";

export async function fetchAddAddress(data,dispatch) {
    let user = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('add-address',{
            ...data,

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