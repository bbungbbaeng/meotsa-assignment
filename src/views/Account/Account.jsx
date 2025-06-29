import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import logout from '../../api/logoutAPI';
import './Account.css';

const Account = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <div className="account-root">
            <Header />
            <div className="account-page">
                <div className="account-wrapper">
                    <span className="account-head">당신의 계정 정보 . . .</span>
                    <span className="account-head2">(미구현)</span>
                    <div className="account-inf-and-logout">
                        <div className="account-information">
                            <span>ID : -</span>
                            <span>Nickname : -</span>
                            <span>University : -</span>
                            <span>Location : -</span>
                        </div>
                        <span className="logout" onClick={handleLogout}>로그아웃</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;