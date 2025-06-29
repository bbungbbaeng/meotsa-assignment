import api from './api';

const logout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        console.warn('로그아웃 토큰이 없습니다.');
        return null;
    }

    try {
        await api.post('/dj/logout/', { refresh: refreshToken});
        console.log('로그아웃 성공');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        console.log('토큰 제거 완료');
    } catch (error) {
        console.log('로그아웃 실패: ', error);
        return null;
    }
};

export default logout;