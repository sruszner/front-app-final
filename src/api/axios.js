import axios from 'axios';
const BASE_URL = 'https://back-app-final-production.up.railway.app';
const BASE_URL_LOCAL = 'http://localhost:9000';

export default axios.create({
    baseURL: BASE_URL_LOCAL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Headers": "Content-Type"
    },
    withCredentials: true
});



