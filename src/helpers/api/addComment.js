import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";

export default async function fetchAddComment(data,article_id) {
    let article = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('add-comment',{ ...data,article_id }, {
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