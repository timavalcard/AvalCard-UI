import APIRequest from "./api";
import Cookies from "js-cookie";

export async function  registerAndSencCode(email, password,name) {
    try {
        const response = await APIRequest.post('register', { email, password,name });
        const data = response.data;
    } catch (error) {
        // پردازش خطا و ارسال به Redux

    }
}