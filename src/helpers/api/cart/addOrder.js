import APIRequest from "../../../helpers/api/api";
import getAuthToken from "../../../helpers/functions/getAuthToken";

export async function addOrder(payment,ten_percent,fee,setWalletFail=()=>{}) {
    let articles = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('add-order',{ gateway_name:payment,fee,ten_percent },{
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