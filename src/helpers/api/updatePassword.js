import APIRequest from "./api";
import getAuthToken from "../../helpers/functions/getAuthToken";

export async function updatePassword(email,password,setIsLoading,router) {

    let send = null;

    try {
        const token = getAuthToken();
        const response = await APIRequest.post('reset-password-update',{ email,password },{
            headers: {
                Authorization: `${token}`,
            }
        });
        send = await response.data;
        setIsLoading(false)
        alert("parola başarıyla değiştirildi")
        router.push('/login');
    } catch (error) {
        if (error.response && error.response.status === 404) {
            send = null
        } else {

            console.error(error);
        }
    }

    return send;

}