import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";

export default async function fetchIncreaseWallet(price) {
    let transaction = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('increase-wallet',{ price }, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        document.documentElement.innerHTML = response.data;
        setTimeout(() => {
            const form = document.querySelector('form');
            if (form) {
                form.submit();
            } else {
                console.error('فرم پیدا نشد!');
            }
        }, 0);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            transaction = null
        } else {

            console.error(error);
        }
    }
    console.log(transaction)
    return transaction;

}