import APIRequest from "./../api";
import getAuthToken from "../../functions/getAuthToken";

export async function fetchUpdatePassword(data,setPasswordInCorrect,setShowFeedback) {
    let user = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('update-password',{
            ...data,


        }, {
                headers: {
                    Authorization: `${token}`,
                }
            }
            );
        if(response.data.fail){
            setPasswordInCorrect(true)
        } else{
            setShowFeedback(true)
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