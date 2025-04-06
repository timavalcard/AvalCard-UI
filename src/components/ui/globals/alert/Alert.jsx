// components/Alert.js
import React from 'react';

const Alert = ({ type, message, className }) => {

    const baseClass = '';

    let alertClass = '';
    switch (type) {
        case 'danger':
            alertClass = 'text-custom-red bg-custom-red-light';
            break;
        case 'success':
            alertClass = 'bg-green-100 text-green-700 border border-green-400';
            break;
        case 'warning':
            alertClass = 'bg-custom-yellow-light text-custom-yellow';
            break;
        default:
            alertClass = 'bg-blue-100 text-blue-700 border border-blue-400';
            break;
    }

    let icon = '';
    switch (type) {
        case 'danger':
            icon = (
                <svg className='me-[2px]' width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.333 11.0049C21.333 16.5277 16.8559 21.0049 11.333 21.0049C5.81016 21.0049 1.33301 16.5277 1.33301 11.0049C1.33301 5.48204 5.81016 1.00488 11.333 1.00488C16.8559 1.00488 21.333 5.48204 21.333 11.0049Z" stroke="#FF4D4D" stroke-width="2" stroke-linecap="round"/>
<path d="M8.10053 7.77264C8.41295 7.46023 8.91948 7.46023 9.2319 7.77264L11.3329 9.87364L13.4339 7.77267C13.7463 7.46025 14.2528 7.46025 14.5652 7.77267C14.8776 8.08509 14.8776 8.59162 14.5652 8.90404L12.4643 11.005L14.5652 13.106C14.8776 13.4184 14.8776 13.9249 14.5652 14.2373C14.2528 14.5497 13.7463 14.5497 13.4338 14.2373L11.3329 12.1364L9.23192 14.2373C8.9195 14.5498 8.41297 14.5498 8.10055 14.2373C7.78813 13.9249 7.78813 13.4184 8.10055 13.106L10.2015 11.005L8.10053 8.90402C7.78811 8.5916 7.78811 8.08506 8.10053 7.77264Z" fill="#FF4D4D"/>
</svg>
            );
            break;
        case 'success':
            icon = 'bg-green-100 text-green-700 border border-green-400';
            break;
        case 'warning':
            icon = (
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8633 8.35303V12.353M12.8633 16.353H12.8733M22.8633 12.353C22.8633 17.8759 18.3861 22.353 12.8633 22.353C7.34043 22.353 2.86328 17.8759 2.86328 12.353C2.86328 6.83018 7.34043 2.35303 12.8633 2.35303C18.3861 2.35303 22.8633 6.83018 22.8633 12.353Z" stroke="#FF7B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            );
            break;
        default:
            icon = 'bg-blue-100 text-blue-700 border border-blue-400';
            break;
    }



    return (
        <div className={`flex items-center py-[14px] gap-1 text-xs px-5 rounded-2lg ${alertClass} ${className}`}>
            <div>
            {icon}
            </div>
            <div className="text-xs font-medium">
                {message}
            </div>
        </div>
    );
};

export default Alert;
