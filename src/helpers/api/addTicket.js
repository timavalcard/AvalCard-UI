import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";

export async function fetchAddTicket(subject,department,message,file) {
    let ticket = null;
    const token = getAuthToken();
    try {
        const fileData=file? file[0] : null
        const response = await APIRequest.post('add-ticket',{

            subject:subject,
            department:department,
                file:fileData,
            message:message
        }, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            }
            );
        ticket = await response.data;
        ticket=ticket.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            ticket = null
        } else {

            console.error(error);
        }
    }
    console.log(ticket)
    return ticket;

}