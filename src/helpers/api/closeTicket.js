import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";

export async function fetchCloseTicket(id) {
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('close-ticket',{ id: id, }, {
            headers: {
                Authorization: `${token}`,
            }
        });

    } catch (error) {
        if (error.response && error.response.status === 404) {
        } else {

            console.error(error);
        }
    }

}