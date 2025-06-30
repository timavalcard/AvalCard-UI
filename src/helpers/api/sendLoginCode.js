import APIRequest from "./api";
import getAuthToken from "../../helpers/functions/getAuthToken";

export async function sendLoginCode(mobile,next) {
    let send = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('login-send-code',{ mobile },{
            headers: {
                Authorization: `${token}`,
            }
        });
        send = await response.data;
        if(send){
            next()
        } else{
            alert("شماره همراه یا ایمیل یافت نشد")
        }
        return  send

    } catch (error) {
        if (error.response && error.response.status === 404) {
            send = null
        } else {

            console.error(error);
        }
    }

    return send;

}