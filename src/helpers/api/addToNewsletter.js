import APIRequest from "./api";

export async function addToNewsletter(email,setIsLoading,setEmail) {
    let newsletter = null;
    try {
        setIsLoading(true);
        const response = await APIRequest.post('add-newsletter',{ email });
        newsletter = await response.data;
        alert("عملیات موفقیت آمیز بود.")
        setEmail("")
    } catch (error) {
        if (error.response && error.response.status === 404) {
            newsletter = null
        } else {

            console.error(error);
        }
    }
    finally {
        setIsLoading(false);
    }
    return newsletter;

}