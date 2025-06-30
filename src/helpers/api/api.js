import axios from 'axios';

const APIRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// اضافه کردن هدر X-Referer-URL به همه درخواست‌ها
APIRequest.interceptors.request.use(config => {
    if (typeof window !== 'undefined') {
        config.headers['X-Referer-URL'] = window.location.href;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default APIRequest;
