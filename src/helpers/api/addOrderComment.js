import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";

export default async function fetchAddOrderComment(data,id) {
    let article = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('order-comment',{ ...data,id }, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        article = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            article = null
        } else {

            console.error(error);
        }
    }
    console.log(article)
    return article;

}