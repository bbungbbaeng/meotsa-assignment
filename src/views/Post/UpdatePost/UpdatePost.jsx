import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../../../components/Header/Header';
import { getPost, updatePost } from '../../../api/postAPI';
import './UpdatePost.css';

const UpdatePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            const data = await getPost(id);
            if (data) {
                setTitle(data.title);
                setBody(data.body);
            }
            window.scrollTo(0, 0);
        })();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() && !body.trim()) {
            setError('제목과 본문을 작성해주세요.');
            return;
        }
        if (!title.trim()) {
            setError('제목을 작성해주세요.');
            return;
        }
        if (!body.trim()) {
            setError('본문을 작성해주세요.');
            return;
        }
        setError('');

        try {
            await updatePost(id, title, body);
            navigate(`/viewpost/${id}`);
        } catch (error) {
            console.log('글 수정 실패: ', error);
        }
    };

    return (
        <div className="editpost-root">
            <Header />
            <form action="" className="editpost-page" onSubmit={handleSubmit}>
                <div className="title-group">
                    <label htmlFor="title">제목</label>
                    <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="body-group">
                    <label htmlFor="body">본문</label>
                    <div className="input-wrapper">
                        <textarea id="body" value={body} onChange={e => setBody(e.target.value)}/>
                        {error && <div className="error-message">{error}</div>}
                    </div>
                </div>
                <div className="button-group">
                    <button className="edit-button" type="submit">수정하기</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePost;