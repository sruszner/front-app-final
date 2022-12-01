import axios from 'axios';
const BASE_URL = 'https://back-app-final-production.up.railway.app/';
const BASE_URL_lOCAL = 'http://localhost:9000/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    },
    withCredentials: true,
    sameSite: 'None',
    maxAge: 24 * 60 * 60 * 1000
});



