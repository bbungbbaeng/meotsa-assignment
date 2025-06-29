import React, {useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('accessToken')));

    useEffect(() => {
        setIsLoggedIn(Boolean(localStorage.getItem('accessToken')));
    }, [location]);

    return (
        <div className="header">
            <Link to="/"><span className="main">김유민의 블로그 ...^^</span></Link>
            <div className="text-container">
                <NavLink to="/profile" className={({ isActive }) => `profile${isActive ? ' active-link' : ''}`}><span className="profile">프로필</span></NavLink>
                <span className="posts">글 목록</span>
                <NavLink to={isLoggedIn ? '/account' : '/login'} className={({ isActive }) => `login${isActive ? ' active-link' : ''}`}><span className="login">{isLoggedIn ? '계정' : '로그인'}</span></NavLink>
            </div>
        </div>
    )
}

export default Header;