import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hufs-meotsa-13th.store/',
});

export default api;