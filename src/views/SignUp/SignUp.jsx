import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import signUp from '../../api/signUpAPI';
import './SignUp.css';

const SignUp = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [cpw, setCpw] = useState('');
    const [showCpw, setShowCpw] = useState(false);
    const [nick, setNick] = useState('')
    const [univ, setUniv] = useState('');
    const [loc, setLoc] = useState('');

    const [error, setError] = useState('');
    const [cpwError, setCpwError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (cpw && pw !== cpw) {
            setCpwError('비밀번호가 일치하지 않습니다.');
        } else {
            setCpwError('');
        }
    }, [pw, cpw]);

    const handleSignup = async () => {
        if (!id.trim() || !pw.trim() || !cpw.trim() || !nick.trim() || !univ.trim() || !loc.trim()) {
            setError('기입 사항을 모두 입력해주세요.');
            return;
        }
        if (pw !== cpw) {
            setCpwError('비밀번호가 일치하지 않습니다.');
            return;
        }

        setError('');

        const result = await signUp(id, pw, cpw, nick, univ, loc);
        if (result) {
            navigate('/');
        } else {
            setError('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    }

    return (
        <div className="signup-root">
            <Header />
            <div className="signup-page">
                <div className="signup-wrapper">
                    <div className="signup-hi">환영합니다^^</div>
                    <div className="signup-container">
                        <div className="signup-id">
                            <span>ID :</span>
                            <div className="input-wrapper">
                                <input type="text" className="signup-id-input" value={id} onChange={e => setId(e.target.value)} />
                                {id && (<span className="clear-icon" onClick={() => setId('')}>&times;</span>)}
                            </div>
                        </div>
                        <div className="signup-pw">
                            <span>Password :</span>
                            <div className="input-wrapper">
                                <input type={showPw ? 'text' : 'password'} className="signup-pw-input" value={pw} onChange={e => setPw(e.target.value)} />
                                {pw && (<><span className={`toggle-icon${showPw ? ' active' : ''}`} onClick={() => setShowPw(v => !v)} /><span className='clear-icon' onClick={() => setPw('')}>&times;</span></>)}
                            </div>
                        </div>
                        <div className="signup-cpw">
                            <span>Confirm Password :</span>
                            <div className="input-wrapper">
                                <input type={showCpw ? 'text' : 'password'} className="signup-cpw-input" value={cpw} onChange={e => setCpw(e.target.value)} />
                                {cpw && (<><span className={`toggle-icon${showCpw ? ' active' : ''}`} onClick={() => setShowCpw(v => !v)} /><span className="clear-icon" onClick={() => setCpw('')}>&times;</span></>)}
                                {cpwError && <div className="cpw-error-message">{cpwError}</div>}
                            </div>
                        </div>
                        <div className="signup-nick">
                            <span>Nickname :</span>
                            <div className="input-wrapper">
                                <input type="text" className="signup-nick-input" value={nick} onChange={e => setNick(e.target.value)} />
                                {nick && (<span className="clear-icon" onClick={() => setNick('')}>&times;</span>)}
                            </div>
                        </div>
                        <div className="signup-univ">
                            <span>University :</span>
                            <div className="input-wrapper">
                                <input type="text" className="signup-univ-input" value={univ} onChange={e => setUniv(e.target.value)} />
                                {univ && (<span className="clear-icon" onClick={() => setUniv('')}>&times;</span>)}
                            </div>
                        </div>
                        <div className="signup-location">
                            <span>Location :</span>
                            <div className="input-wrapper">
                                <input type="text" className="signup-location-input" value={loc} onChange={e => setLoc(e.target.value)} />
                                {loc && (<span className="clear-icon" onClick={() => setLoc('')}>&times;</span>)}
                                {error && (<div className="error-message">{error}</div>)}
                            </div>
                        </div>
                        <button className="signup-button" onClick={handleSignup}>회원가입</button>
                    </div>
                    <div className="signup-login-wrapper">
                        <span className="signup-ifyou">이미 계정이 있다면 ☞ </span>
                        <NavLink to="/login" className={({ isActive }) => `login${isActive ? ' active-link' : ''}`}><span className="signup-login">로그인</span></NavLink>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default SignUp;