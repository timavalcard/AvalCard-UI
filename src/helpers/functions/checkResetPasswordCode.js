import APIRequest from "../api/api";

export default async function checkResetPasswordCode(mobile,password,code,setErrorCode,router){
    try {
        const response = await APIRequest.post('reset-password-check-code', { mobile,password,code });
        let valid= await response.success
        let valid2= await response.data.valid.success
        let valid3= await response.data.valid

        if(valid2 || valid3 == true){
        router.push("/login")

        } else{
            if(setErrorCode){
                setErrorCode(true)
            }

        }


    } catch (error) {
        console.error('Error checking code existence:', error);
        return false;
    }
}