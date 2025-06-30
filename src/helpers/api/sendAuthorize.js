import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";

export async function sendAuthorizeRequest(data,selfImage,nationalImage,dispatch) {
    let user = null;
    const token = getAuthToken();
    try {
        const selfImageData=selfImage? selfImage[0] : null
        const nationalImageData=nationalImage? nationalImage[0] : null
        const response = await APIRequest.post('authorize',{
            ...data,
                authorize_self_image:selfImageData,
                authorize_national_cart_image:nationalImageData,

        }, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'multipart/form-data',
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