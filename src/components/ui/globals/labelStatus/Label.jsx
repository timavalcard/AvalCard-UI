export default function Label({ status }) {

    const getStatusClasses = (status) => {
        switch (status) {
            case "پاسخ داده شده":
            case "باز":

                return (
                    <div className="flex items-center justify-center gap-1 text-[#89D64F]">
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.24" d="M20.2632 12.6473C20.2632 17.0656 16.6815 20.6473 12.2632 20.6473C7.84491 20.6473 4.26318 17.0656 4.26318 12.6473C4.26318 8.229 7.84491 4.64728 12.2632 4.64728C16.6815 4.64728 20.2632 8.229 20.2632 12.6473Z" fill="currentColor" />
                                <path d="M15.488 10.2229C15.7223 10.4573 15.7223 10.8372 15.488 11.0715L11.488 15.0715C11.2537 15.3058 10.8738 15.3058 10.6395 15.0715L9.03951 13.4715C8.80519 13.2372 8.80519 12.8573 9.03951 12.6229C9.27382 12.3886 9.65372 12.3886 9.88803 12.6229L11.0638 13.7987L12.8516 12.0108L14.6395 10.2229C14.8738 9.98863 15.2537 9.98863 15.488 10.2229Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            پاسخ داده شده
                        </div>
                    </div>
                );

            case "بسته":
            case "بسته شده":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#FF4D4D]">
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.24" d="M15.9995 8.7442C15.9995 13.1625 12.4178 16.7442 7.99951 16.7442C3.58123 16.7442 -0.000488281 13.1625 -0.000488281 8.7442C-0.000488281 4.32592 3.58123 0.744202 7.99951 0.744202C12.4178 0.744202 15.9995 4.32592 15.9995 8.7442Z" fill="#FF4D4D" />
                                <path d="M5.57564 6.31987C5.80995 6.08556 6.18985 6.08556 6.42417 6.31987L7.99991 7.89561L9.57564 6.31989C9.80995 6.08557 10.1899 6.08557 10.4242 6.31989C10.6585 6.5542 10.6585 6.9341 10.4242 7.16842L8.84844 8.74414L10.4241 10.3199C10.6585 10.5542 10.6585 10.9341 10.4241 11.1684C10.1898 11.4027 9.80994 11.4027 9.57562 11.1684L7.99991 9.59267L6.42418 11.1684C6.18987 11.4027 5.80997 11.4027 5.57566 11.1684C5.34134 10.9341 5.34134 10.5542 5.57566 10.3199L7.15138 8.74414L5.57564 7.1684C5.34132 6.93408 5.34132 6.55419 5.57564 6.31987Z" fill="#FF4D4D" />
                            </svg>

                        </div>
                        <div>
                            {status}
                        </div>
                    </div>
                );
            case "processing":
                return (
                    <div className="flex items-center justify-center gap-1 text-blue-custom">
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.24" d="M20.2632 12.6473C20.2632 17.0656 16.6815 20.6473 12.2632 20.6473C7.84491 20.6473 4.26318 17.0656 4.26318 12.6473C4.26318 8.229 7.84491 4.64728 12.2632 4.64728C16.6815 4.64728 20.2632 8.229 20.2632 12.6473Z" fill="currentColor" />
                                <path d="M15.488 10.2229C15.7223 10.4573 15.7223 10.8372 15.488 11.0715L11.488 15.0715C11.2537 15.3058 10.8738 15.3058 10.6395 15.0715L9.03951 13.4715C8.80519 13.2372 8.80519 12.8573 9.03951 12.6229C9.27382 12.3886 9.65372 12.3886 9.88803 12.6229L11.0638 13.7987L12.8516 12.0108L14.6395 10.2229C14.8738 9.98863 15.2537 9.98863 15.488 10.2229Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            در حال انجام
                        </div>
                    </div>
                );
            case "completed":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#89D64F]">
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.24" d="M20.2632 12.6473C20.2632 17.0656 16.6815 20.6473 12.2632 20.6473C7.84491 20.6473 4.26318 17.0656 4.26318 12.6473C4.26318 8.229 7.84491 4.64728 12.2632 4.64728C16.6815 4.64728 20.2632 8.229 20.2632 12.6473Z" fill="currentColor" />
                                <path d="M15.488 10.2229C15.7223 10.4573 15.7223 10.8372 15.488 11.0715L11.488 15.0715C11.2537 15.3058 10.8738 15.3058 10.6395 15.0715L9.03951 13.4715C8.80519 13.2372 8.80519 12.8573 9.03951 12.6229C9.27382 12.3886 9.65372 12.3886 9.88803 12.6229L11.0638 13.7987L12.8516 12.0108L14.6395 10.2229C14.8738 9.98863 15.2537 9.98863 15.488 10.2229Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            کامل شده
                        </div>
                    </div>
                );

            case "ناموفق":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#FF4D4D]">
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.24" d="M15.9995 8.29498C15.9995 12.7133 12.4178 16.295 7.99951 16.295C3.58123 16.295 -0.000488281 12.7133 -0.000488281 8.29498C-0.000488281 3.8767 3.58123 0.294983 7.99951 0.294983C12.4178 0.294983 15.9995 3.8767 15.9995 8.29498Z" fill="currentColor" />
                            </svg>

                        </div>
                        <div>
                            {status}
                        </div>
                    </div>
                );
            case "failed":
            case "cancelled":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#FF4D4D]">
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.24" d="M15.9995 8.7442C15.9995 13.1625 12.4178 16.7442 7.99951 16.7442C3.58123 16.7442 -0.000488281 13.1625 -0.000488281 8.7442C-0.000488281 4.32592 3.58123 0.744202 7.99951 0.744202C12.4178 0.744202 15.9995 4.32592 15.9995 8.7442Z" fill="#FF4D4D" />
                                <path d="M5.57564 6.31987C5.80995 6.08556 6.18985 6.08556 6.42417 6.31987L7.99991 7.89561L9.57564 6.31989C9.80995 6.08557 10.1899 6.08557 10.4242 6.31989C10.6585 6.5542 10.6585 6.9341 10.4242 7.16842L8.84844 8.74414L10.4241 10.3199C10.6585 10.5542 10.6585 10.9341 10.4241 11.1684C10.1898 11.4027 9.80994 11.4027 9.57562 11.1684L7.99991 9.59267L6.42418 11.1684C6.18987 11.4027 5.80997 11.4027 5.57566 11.1684C5.34134 10.9341 5.34134 10.5542 5.57566 10.3199L7.15138 8.74414L5.57564 7.1684C5.34132 6.93408 5.34132 6.55419 5.57564 6.31987Z" fill="#FF4D4D" />
                            </svg>

                        </div>
                        <div>
                            لغو شده
                        </div>
                    </div>
                );
            case "در حال پردازش":
            case "در حال بررسی":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#FFB200]">
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8.79492" r="8" fill="#FFCF5E" fill-opacity="0.4" />
                                <g clip-path="url(#clip0_208_340)">
                                    <path d="M7.99954 5.76453C7.40021 5.76453 6.81433 5.94225 6.316 6.27522C5.81767 6.6082 5.42926 7.08147 5.19991 7.63518C4.97055 8.1889 4.91054 8.79819 5.02747 9.38601C5.14439 9.97383 5.433 10.5138 5.85679 10.9376C6.28059 11.3614 6.82054 11.65 7.40836 11.7669C7.99618 11.8838 8.60547 11.8238 9.15919 11.5945C9.7129 11.3651 10.1862 10.9767 10.5191 10.4784C10.8521 9.98004 11.0298 9.39417 11.0298 8.79483" stroke="#FFB300" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_208_340">
                                        <rect width="7.27273" height="7.27273" fill="white" transform="translate(4.36328 5.15848)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div>
                            {status}
                        </div>
                    </div>
                );
            case "pending":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#FFB200]">
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8.79492" r="8" fill="#FFCF5E" fill-opacity="0.4" />
                                <g clip-path="url(#clip0_208_340)">
                                    <path d="M7.99954 5.76453C7.40021 5.76453 6.81433 5.94225 6.316 6.27522C5.81767 6.6082 5.42926 7.08147 5.19991 7.63518C4.97055 8.1889 4.91054 8.79819 5.02747 9.38601C5.14439 9.97383 5.433 10.5138 5.85679 10.9376C6.28059 11.3614 6.82054 11.65 7.40836 11.7669C7.99618 11.8838 8.60547 11.8238 9.15919 11.5945C9.7129 11.3651 10.1862 10.9767 10.5191 10.4784C10.8521 9.98004 11.0298 9.39417 11.0298 8.79483" stroke="#FFB300" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_208_340">
                                        <rect width="7.27273" height="7.27273" fill="white" transform="translate(4.36328 5.15848)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div>
                            در انتظار پرداخت
                        </div>
                    </div>
                );


            case "در انتظار پاسخ کاربر":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#FFB200]">
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8.79492" r="8" fill="#FFCF5E" fill-opacity="0.4" />
                                <g clip-path="url(#clip0_208_340)">
                                    <path d="M7.99954 5.76453C7.40021 5.76453 6.81433 5.94225 6.316 6.27522C5.81767 6.6082 5.42926 7.08147 5.19991 7.63518C4.97055 8.1889 4.91054 8.79819 5.02747 9.38601C5.14439 9.97383 5.433 10.5138 5.85679 10.9376C6.28059 11.3614 6.82054 11.65 7.40836 11.7669C7.99618 11.8838 8.60547 11.8238 9.15919 11.5945C9.7129 11.3651 10.1862 10.9767 10.5191 10.4784C10.8521 9.98004 11.0298 9.39417 11.0298 8.79483" stroke="#FFB300" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_208_340">
                                        <rect width="7.27273" height="7.27273" fill="white" transform="translate(4.36328 5.15848)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div>
                            در انتظار پاسخ کاربر
                        </div>
                    </div>
                );
            case "on-hold":
                return (
                    <div className="flex items-center justify-center gap-1 text-[#FFB200]">
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8.79492" r="8" fill="#FFCF5E" fill-opacity="0.4" />
                                <g clip-path="url(#clip0_208_340)">
                                    <path d="M7.99954 5.76453C7.40021 5.76453 6.81433 5.94225 6.316 6.27522C5.81767 6.6082 5.42926 7.08147 5.19991 7.63518C4.97055 8.1889 4.91054 8.79819 5.02747 9.38601C5.14439 9.97383 5.433 10.5138 5.85679 10.9376C6.28059 11.3614 6.82054 11.65 7.40836 11.7669C7.99618 11.8838 8.60547 11.8238 9.15919 11.5945C9.7129 11.3651 10.1862 10.9767 10.5191 10.4784C10.8521 9.98004 11.0298 9.39417 11.0298 8.79483" stroke="#FFB300" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_208_340">
                                        <rect width="7.27273" height="7.27273" fill="white" transform="translate(4.36328 5.15848)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div>
                            در حال بررسی
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center gap-1 text-[#89D64F]">
                        <div>
                            ---
                        </div>
                    </div>
                );
        }
    };


    return getStatusClasses(status);
}