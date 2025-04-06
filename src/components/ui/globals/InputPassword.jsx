import Input from "@/components/ui/globals/Input";
import {useState} from "react";


export default function InputPassword({placeholder='Şifre',register, name, ...rest}){

    const [showPassword, setShowPassword] = useState(false);

    return(<Input
        placeholder={placeholder}
        {...register(name)}
        type={showPassword ? "text" : "password"}
        {...rest}
        icon={
            <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowPassword(prev => !prev)}
                className="cursor-pointer text-muted"
            >
                <path d="M9.99993 0.5C14.4933 0.5 18.2317 3.73313 19.0154 8C18.2317 12.2668 14.4933 15.5 9.99993 15.5C5.50644 15.5 1.76813 12.2668 0.984375 8C1.76813 3.73313 5.50644 0.5 9.99993 0.5ZM9.99993 13.8333C13.5296 13.8333 16.5499 11.3767 17.3144 8C16.5499 4.62336 13.5296 2.16667 9.99993 2.16667C6.47018 2.16667 3.44986 4.62336 2.68533 8C3.44986 11.3767 6.47018 13.8333 9.99993 13.8333ZM9.99993 11.75C7.92883 11.75 6.24989 10.0711 6.24989 8C6.24989 5.92893 7.92883 4.25 9.99993 4.25C12.0709 4.25 13.7499 5.92893 13.7499 8C13.7499 10.0711 12.0709 11.75 9.99993 11.75ZM9.99993 10.0833C11.1505 10.0833 12.0833 9.15058 12.0833 8C12.0833 6.84942 11.1505 5.91667 9.99993 5.91667C8.84934 5.91667 7.91656 6.84942 7.91656 8C7.91656 9.15058 8.84934 10.0833 9.99993 10.0833Z" fill="currentColor"/>
            </svg>
        }
    />);
}