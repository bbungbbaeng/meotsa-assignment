import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import login from '../../api/loginAPI';
import './Login.css';

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!id.trim() && !pw.trim()) {
            setError('아이디 또는 패스워드를 모두 입력해주세요.');
            return;
        }
        if (!id.trim()) {
            setError('아이디를 입력해주세요.');
            return;
        }
        if (!pw.trim()) {
            setError('패스워드를 입력해주세요.');
            return;
        }

        setError('');
        
        const result = await login(id, pw);
        if (!result) {
            setError('존재하지 않는 계정입니다.');
            return;
        }

        const accessToken = result.access || result.token || '';
        const refreshToken = result.refresh || '';
        if (!accessToken) {
            setError('로그인 토큰을 가져올 수 없습니다.');
            return;
        }
        
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/');
    };

    return (
        <div className="login-root">
            <Header />
            <div className="login-page">
                <div className="login-wrapper">
                    <p className="login-hi">어서오세요^^</p>
                    <form className="login-container" onSubmit={handleLogin}>
                        <div className="login-id">
                            <span>ID :</span>
                            <div className="input-wrapper">
                                <input className="login-id-input" value={id} onChange={e => setId(e.target.value)} />
                                {id && (<span className="clear-icon" onClick={() => setId('')}>&times;</span>)}
                            </div>
                        </div>
                        <div className="login-pw">
                            <span>Password :</span>
                            <div className="input-wrapper">
                                <input className="login-pw-input" type={showPw ? 'text' : 'password'} value={pw} onChange={e => setPw(e.target.value)} />
                                {pw && (<><span className={`toggle-icon${showPw ? ' active' : ''}`} onClick={() => setShowPw(v => !v)}/> <span className="clear-icon" onClick={() => setPw('')}>&times;</span></>)}
                                {error && (<div className="error-message">{error}</div>)}
                            </div>
                        </div>
                        <button className="login-button" type="submit">로그인</button>
                    </form>
                    <div className="login-signup-wrapper">
                        <span className="login-ifyou">계정이 없다면 ☞ </span>
                        <Link to="/signup"><span className="login-signup">회원가입</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;