import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../../components/Header/Header';
import { createPost } from '../../../api/postAPI';
import './WritePost.css';

const WritePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() && !body.trim()) {
            setError('제목과 본문을 작성해주세요.');
            return;
        }
        if (!title.trim()) {
            setError('제목을 작성해주세요');
            return;
        }
        if (!body.trim()) {
            setError('본문을 작성해주세요.');
            return;
        }
        setError('');

        try {
            await createPost(title, body);
            navigate('/postlist');
        } catch {
            alert('글 작성에 실패했습니다.')
        }
    };

    return (
        <div className="writepost-root">
            <Header />
            <form className="writepost-page" onSubmit={handleSubmit}>
                <div className="title-group">
                    <label htmlFor="title">제목</label>
                    <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="body-group">
                    <label htmlFor="body">본문</label>
                    <div className="input-wrapper">
                        <textarea id="body" value={body} onChange={e => setBody(e.target.value)} />
                        {error && <div className="error-message">{error}</div>}
                    </div>
                </div>
                <div className="button-group">
                    <button className="write-button" type="submit">업로드</button>
                </div>
            </form>
        </div>
    );
};

export default WritePost;