import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";

export async function fetchAddTicketAnswer(id,message,file) {
    let ticket = null;
    const token = getAuthToken();
    const fileData=file? file[0] : null
    try {
        const response = await APIRequest.post('answer-ticket',{
            id: id,
            file:fileData,
            message:message
        }, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        ticket = await response.data;
        ticket=ticket.data
        if(ticket){
            ticket=ticket.messages
        }
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