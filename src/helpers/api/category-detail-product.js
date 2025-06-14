import APIRequest from "./api";

export async function fetchCategoryWithProducts(slug,limit=-1,page=1) {
    let category = null;
    try {
        const response = await APIRequest.post('product-category-detail' , {slug,limit,page});
         category = await response.data.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
             category = null
        } else {

            console.error(error);
        }
    }
    return category;




}