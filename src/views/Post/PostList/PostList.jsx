import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../../../components/Header/Header';
import { getPosts } from '../../../api/postAPI';
import './PostList.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');
    const isLoggedIn = Boolean(token);

    useEffect(() => {
        (async () => {
            const data = await getPosts();
            setPosts(data);
        })();
    }, []);

    return (
        <>
            <div className="postlist-root">
                <Header />
                <div className="postlist-page">
                    {posts.length === 0 ? (
                        <div className="no-posts">
                            <p className="no-posts-text">
                                {isLoggedIn ? '작성된 글이 없습니다.' : '글은 로그인 후 보실 수 있습니다.'}
                            </p>
                        </div>
                    ) : (
                        <div className="posts-container">
                            {posts.map(post => (
                                <div className="post-card" key={post.id}>
                                    <p className="post-title">{post.title}</p>
                                    <p className="post-body">{post.body}</p>
                                    <button className="post-button" onClick={() => navigate(`/viewpost/${post.id}`)}>글 보기</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {isLoggedIn && createPortal(<button className="add-post-button" onClick={() => navigate('/writepost')}>글 작성</button>, document.body)}
        </>
    );
};

export default PostList;