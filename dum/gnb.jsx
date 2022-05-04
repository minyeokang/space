import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Login from '../src/components/login'

function Gnb() {
    let navigate = useNavigate();
    let [isClicked, setisClicked] = useState(false);
    return (
        <header>
            <ul className="gnb">
                <li className="ham"><img src="img/icon_ham.png" alt="ham" /></li>
                <li onClick={() => {
                    navigate("/project");
                }}>PROJECT</li>
                <li onClick={() => {
                    navigate("/news");
                }}>NEWS</li>
                <li className='logo' onClick={() => {
                    navigate("/");
                }}>SPACE</li>
                <li onClick={() => {
                    navigate("/store");
                }}>STORE</li>
                <li onClick={() => {
                    navigate("/mypage");
                }}>MYPAGE </li>

            </ul>
            <div className='ham'></div>
            <div className='login_ico' onClick={() => { setisClicked(!isClicked) }}><img src="img/icon_login.png" alt="login" /></div>
            {
                isClicked == true ? <Login /> : null
            }
            <div className="mgnb_wrap">
                <ul className="mgnb">
                    <li>PROJECT</li>
                    <li>NEWS</li>
                    <li>STORE</li>
                    <li>MYPAGE</li>
                </ul>
            </div>

        </header>
    )
}
export default Gnb;