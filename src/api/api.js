import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hufs-meotsa-13th.store/',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    if (config.url === '/dj/login/' || config.url === '/dj/registration/' || config.url === '/dj/logout/') {
        return config;
    }
    const token = localStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;