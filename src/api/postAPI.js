import api from './api';

export const getPosts = async () => {
    try {
        const response = await api.get('/blog/');
        return response.data;
    } catch (error) {
        console.error('글 전체 조회 중 에러 발생', error);
        return [];
    }
};

export const getPost = async (id) => {
    try {
        const response = await api.get(`/blog/${id}/`);
        return response.data;
    } catch (error) {
        console.error('글 상세 조회 중 에러 발생', error);
        return null;
    }
};

export const createPost = async (title, body) => {
    try {
        const response = await api.post('/blog/', { title, body });
        return response.data;
    } catch (error) {
        console.error('글 작성 중 에러', error);
        throw error;
    }
};

export const deletePost = async (id) => {
    try {
        await api.delete(`/blog/${id}/`);
        console.log('글 삭제 완료:', id);
    } catch (error) {
        console.error('글 삭제 중 에러', error);
        throw error;
    }
};

export const updatePost = async (id, title, body) => {
    try {
        const response = await api.put(`/blog/${id}/`, { title, body });
        return response.data;
    } catch (error) {
        console.error('글 수정 중 에러', error);
        throw error;
    }
};