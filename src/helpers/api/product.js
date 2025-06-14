import APIRequest from "../../helpers/api/api";

export async function fetchProduct(slug) {
    console.log(slug)
    let product = {
        product:null,
        related_products:null
    };

    try {
        const response = await APIRequest.get('product', {
            params: { slug: slug }
        });
        console.log(response)
        if(response.data.product){
        product = await response.data;

        }

    } catch (error) {
        if (error.response && error.response.status === 404) {

        } else {

            console.error(error);
        }
    }
    return product;

}