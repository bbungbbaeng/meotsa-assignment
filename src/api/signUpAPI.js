import api from './api';

const signUp = async (id, pw, cpw, nick, univ, loc) => {
    const data = {
        username: id,
        password1: pw,
        password2: cpw,
        nickname: nick,
        university: univ,
        location: loc,
    };
    
    try {
        const response = await api.post('/dj/registration/', data);
        console.log('회원가입 성공: ', response.data);
        return response.data;
    } catch (error) {
        console.log('회원가입 실패: ', error);
        return null;
    }
};

export default signUp;