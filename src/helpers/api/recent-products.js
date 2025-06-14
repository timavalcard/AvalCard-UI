import APIRequest from "../../helpers/api/api";

export async function fetchRecentProducts(limit,product_type="",page=1) {
    let products = null;
    try {
        const response = await APIRequest.get('recent-products', {
            params: {
                limit,
                product_type,
                page
            }
        });
        products = await response.data.products;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            products = null
        } else {

            console.error(error);
        }
    }
    return products;
}