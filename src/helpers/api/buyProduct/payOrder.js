import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function payBuyProductOrder(id,payment,setWalletFail=()=>{}) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('pay-order',{ id,payment },{
            headers: {
                Authorization: `${token}`,
            }
        });
        if(response.data.url){
            window.location=response.data.url
        } else if(response.data.wallet_fail){
            setWalletFail(true)
        }  else{
            document.documentElement.innerHTML = response.data;
            setTimeout(() => {
                const form = document.querySelector('form');
                if (form) {
                    form.submit();
                } else {
                    console.error('فرم پیدا نشد!');
                }
            }, 0);
            console.log(response)
        }

    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error(error);
        }
    }
    return articles;
}