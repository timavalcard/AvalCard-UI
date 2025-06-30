import APIRequest from "./../api";
import getAuthToken from "../../functions/getAuthToken";

export async function fetchUpdateProfile(data,file,dispatch) {
    let user = null;
    const token = getAuthToken();
    try {
        const fileData=file? file[0] : null
        const response = await APIRequest.post('update-profile',{
            ...data,
                file:fileData,

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