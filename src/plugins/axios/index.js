import axios from "axios";


const config = {
    baseURL: 'http://localhost:8080/api',
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control,
};

export const _axios = axios.create(config);
