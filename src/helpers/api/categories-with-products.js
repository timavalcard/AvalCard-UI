import APIRequest from "./api";

export async function fetchCategoriesWithProducts(product_type) {
    let categories = null;
    try {
        const response = await APIRequest.get('categories-with-products',{
            params:{
                product_type:product_type
            }
        });
         categories = await response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            categories = null
        } else {

            console.error(error);
        }
    }
    return categories;
}