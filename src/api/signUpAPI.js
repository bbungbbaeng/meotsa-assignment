import api from './api';

const signUp = async (id, pw, cpw, email, location) => {
    const data = {
        username: id,
        password: pw,
        confirmpassword: cpw,
        email: email,
        location: location,
    };
    
    try {
        const response = await api.post('/dj/registration', data);
        console.log('회원가입 성공: ', response.data);
        return response.data;
    } catch (error) {
        console.log('회원가입 실패: ', error);
        return null;
    }
};

export default signUpAPI;