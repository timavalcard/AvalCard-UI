import APIRequest from "../../helpers/api/api";

export async function addFormEntrance(formData,setShowFeedback) {
    let form = null;
    try {
        const response = await APIRequest.post('add-form-entrance',{ ...formData });
        form = await response.data;
        setShowFeedback(true)

    } catch (error) {
        if (error.response && error.response.status === 404) {
            form = null
        } else {

            console.error(error);
        }
    }

    return form;

}