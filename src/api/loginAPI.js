import api from './api';

const login = async (id, pw) => {
    const data = {
        username: id,
        password: pw,
    };

    try {
        const response = await api.post('/dj/login', data);
        console.log("로그인 성공: ", response.data);
        return response.data;
    } catch (error) {
        console.log("로그인 실패: ", error)
        return null;
    }
};

export default login;