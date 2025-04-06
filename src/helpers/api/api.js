import axios from 'axios';

const APIRequest = axios.create({
    baseURL: 'https://admin.avalcard.com/api/',

});

export default APIRequest;