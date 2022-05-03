import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Main from './components/main'
import Footer from './components/footer'
import Project from './components/project'
import News from './components/news'
import Store from './components/store'
import Mypage from './components/mypage'
import React, { useState } from "react";

function App() {
  let navigate = useNavigate();
  let [isClicked, setisClicked] = useState(false);
  return (
    <div className="App">
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

        <div className="mgnb_wrap">
          <ul className="mgnb">
            <li>PROJECT</li>
            <li>NEWS</li>
            <li>STORE</li>
            <li>MYPAGE</li>
          </ul>
        </div>

      </header>
      {
        isClicked == true ? <div className='login'>
          <div className="box">
            <p className="login_txt">Login<br className="under600" /> <span>For more <br className="under" />service</span></p>
            <div>
              <form >

                <input type="text" placeholder='ID' className="id" />
                <input type="password" placeholder='Password' className="pw" />

                <p className="join">Not a member yet?<span>join</span></p>
              </form>
            </div>
            <button onClick={() => { setisClicked(false) }}>Login</button>
          </div>
        </div> : null
      }
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
