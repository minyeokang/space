import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from './components/main/main'
import Footer from './components/footer'
import Project from './components/project'
import News from './components/news'
import Store from './components/store'
import Mypage from './components/mypage'
import React, { useState } from "react";

function App() {
  let navigate = useNavigate();
  let [isClicked, setisClicked] = useState(false);
  let [hamClicked, setHamClicked] = useState(false);
  let [bookStore, setBookStore] = useState(false);
  let [books, setBooks] = useState([
    {
      id: 0,
      img: 'img/book1.png',
      title: 'BOOK No.552',
      price: '24,000원'
    },
    {
      id: 1,
      img: 'img/book2.png',
      title: 'BOOK No.553',
      price: '24,000원'
    },
    {
      id: 2,
      img: 'img/book3.png',
      title: 'BOOK No.554',
      price: '24,000원'
    },
    {
      id: 3,
      img: 'img/book4.png',
      title: 'BOOK No.555',
      price: '24,000원'
    },
    {
      id: 4,
      img: 'img/book5.png',
      title: 'BOOK No.556',
      price: '24,000원'
    },
    {
      id: 5,
      img: 'img/book6.png',
      title: 'BOOK No.557',
      price: '24,000원'
    }
  ])
  return (
    <div className="App">
      <header>
        <ul className="gnb">
          <li className="ham" onClick={() => {
            setHamClicked(true)
          }}><img src="img/icon/icon_ham.png" alt="ham" />
          </li>
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

        <div className='login_ico' onClick={() => { setisClicked(!isClicked) }}><img src="img/icon/icon_login.png" alt="login" /></div>
        {
          hamClicked == true ?
            <div className='mgnb_wrap'>
              <ul className="mgnb">
                <li className='logo_mgnb' onClick={() => {
                  navigate("/");
                }}>SPACE</li>
                <li onClick={() => {
                  navigate("/project");
                }}>PROJECT</li>
                <li onClick={() => {
                  navigate("/news");
                }}>NEWS</li>

                <li onClick={() => {
                  navigate("/store");
                }}>STORE</li>
                <li onClick={() => {
                  navigate("/mypage");
                }}>MYPAGE </li>
                <li className='close_mgnb' onClick={() => { setHamClicked(false) }}> <i>Close</i> </li>
              </ul>
            </div>
            : null
        }
      </header>
      {
        isClicked == true ? <div className='login'>
          <div className="box">
            <dl>
              <dt className="login_txt">Login</dt>
              <dd className="login_txt">For more service</dd>
            </dl>
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
        <Route path="/store" element={<Store books={books} bookStore={bookStore} setBookStore={setBookStore} />} />
        <Route path="/mypage" element={<Mypage books={books} bookStore={bookStore} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
