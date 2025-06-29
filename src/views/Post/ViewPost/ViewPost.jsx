import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../../../components/Header/Header';
import { getPost, deletePost } from '../../../api/postAPI';
import './ViewPost.css';

const ViewPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({ title: '', body: ''});
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await getPost(id);
            if (data) setPost(data);
        })();
    }, [id]);

    const handleDelete = async () => {
        try {
            await deletePost(id);
            navigate('/postlist');
        } catch (error) {
            console.log('글 삭제 실패:', error);
        }
    }

    const handleUpdate = () => {
        navigate(`/updatepost/${id}`);
    };

    return (
        <div className="viewpost-root">
            <Header />
            <div className="viewpost-page">
                <div className="viewpost-title">{post.title}</div>
                <div className="viewpost-meta">
                    <span className="viewpost-author">작성자 : (미구현)</span>
                    <div className="action-buttons">
                        <span className="update-button" onClick={handleUpdate}>수정하기</span>
                        <span className="delete-button" onClick={handleDelete}>삭제하기</span>
                    </div>
                </div>
                <p className="viewpost-body">{post.body}</p>
            </div>
        </div>
    );
};

export default ViewPost;