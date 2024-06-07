import axios from 'axios';
import { getCsrfToken } from "./getCsrfToken.ts";

const $api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

$api.interceptors.request.use(config => {
    const token = getCsrfToken('csrftoken');
    if (token) {
        config.headers['X-CSRFToken'] = token;
    }

    const accessToken = localStorage.getItem('token');
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
});

$api.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        console.error('Unauthorized access - possibly invalid token');
    }

    return Promise.reject(error);
});

export default $api
