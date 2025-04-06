import APIRequest from "../api/api";

export default async function checkChangeEmailCode(email,code){
    try {
        const response = await APIRequest.post('reset-password-check-code', { email,code });
        return response.data.valid;

    } catch (error) {
        console.error('Error checking code existence:', error);
        return false;
    }
}