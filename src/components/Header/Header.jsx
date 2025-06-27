import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><span className="main">김유민의 블로그 ...^^</span></Link>
            <div className="text-container">
                <NavLink to="/profile" className={({ isActive }) => `profile${isActive ? ' active-link' : ''}`}><span className="profile">프로필</span></NavLink>
                <span className="posts">글 목록</span>
                <NavLink to="/login" className={({ isActive }) => `login${isActive ? ' active-link' : ''}`}><span className="login">로그인</span></NavLink>
            </div>
        </div>
    )
}

export default Header;