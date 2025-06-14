import APIRequest from "../../helpers/api/api";

export async function fetchSearch(title) {
    let articles = null;
    try {
        const response = await APIRequest.post('search',{ title });
         articles = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error(error);
        }
    }
    return articles;
}