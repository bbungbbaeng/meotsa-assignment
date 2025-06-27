import React from 'react';

import Header from '../../components/Header/Header';
import './Login.css';

const Login = () => {
    return (
        <div className="login-root">
            <Header />
            <div className="login-page">
                <div className="login-wrapper">
                    <p className="login-hi">어서오세요^^</p>
                    <div className="login-container">
                        <div className="login-id">
                            <span>ID :</span>
                            <input className="login-id-input" />
                        </div>
                        <div className="login-pw">
                            <span>Password :</span>
                            <input type="password" className="login-pw-input" />
                        </div>
                        <button className="login-button">로그인</button>
                    </div>
                    <div className="signup-wrapper">
                        <span className="login-ifyou">계정이 없다면 ☞ </span>
                        <span className="login-signup">회원가입</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;