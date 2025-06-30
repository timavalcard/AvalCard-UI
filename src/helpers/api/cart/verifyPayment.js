import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function verifyPayment(transaction,setStatus) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('verify-payment',{ transaction },{
            headers: {
                Authorization: `${token}`,
            }
        });
        setStatus(response.data)
    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error(error);
        }
    }
    return articles;
}