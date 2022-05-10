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
  let [books] = useState([
    {
      id: 0,
      img: 'img/book/book1.png',
      title: 'BOOK No.552',
      price: '24,000원'
    },
    {
      id: 1,
      img: 'img/book/book2.png',
      title: 'BOOK No.553',
      price: '24,000원'
    },
    {
      id: 2,
      img: 'img/book/book3.png',
      title: 'BOOK No.554',
      price: '24,000원'
    },
    {
      id: 3,
      img: 'img/book/book4.png',
      title: 'BOOK No.555',
      price: '24,000원'
    },
    {
      id: 4,
      img: 'img/book/book5.png',
      title: 'BOOK No.556',
      price: '24,000원'
    },
    {
      id: 5,
      img: 'img/book/book6.png',
      title: 'BOOK No.557',
      price: '24,000원'
    }
  ])
  let [news] = useState([
    {
      id: 0,
      img: 'img/news/news1.png',
      h2: 'News',
      title: '수직으로 나열된 환대의 공간 \n르디투어',
      name: 'By. 김예람 기자'
    },
    {
      id: 1,
      img: 'img/news/news2.png',
      h2: 'Interview',
      title: '[동남아시아 건축가와의 대화] \n독일 건축가의 발리 건축',
      name: 'By. 방유경 기자'
    },
    {
      id: 2,
      img: 'img/news/news3.png',
      h2: 'Interview',
      title: '집의 근본, 집의 변주 \n건축 입문자들의 가이드',
      name: 'By. 최은화 기자'
    },
    {
      id: 3,
      img: 'img/news/news4.png',
      h2: 'Editorial',
      title: '끝나지 않은 대화 \n브랜드가 일상이 되는 경험',
      name: 'By. 오주연 기자'
    },
    {
      id: 4,
      img: 'img/news/news5.png',
      h2: 'News',
      title: '일상 속 어반 라운지를 꿈꾸다 \nDDP 살림터',
      name: 'By. 김예람 기자'
    },
    {
      id: 5,
      img: 'img/news/news6.png',
      h2: 'News',
      title: '공간 안에서 음표가 되는 가구들 \n사사건건 탐구해보기',
      name: 'By. 김예람 기자'
    }
  ])
  let [newsClicked, setNewsClicked] = useState(false);
  let [nums, setNums] = useState(0)
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
          hamClicked === true ?
            <div className='mgnb_wrap'>
              <ul className="mgnb">
                <li className='logo_mgnb' onClick={() => {
                  navigate("/");
                  setHamClicked(false);
                }}>SPACE</li>
                <li onClick={() => {
                  navigate("/project");
                  setHamClicked(false)
                }}>PROJECT</li>
                <li onClick={() => {
                  navigate("/news");
                  setHamClicked(false)
                }}>NEWS</li>

                <li onClick={() => {
                  navigate("/store");
                  setHamClicked(false)
                }}>STORE</li>
                <li onClick={() => {
                  navigate("/mypage");
                  setHamClicked(false)
                }}>MYPAGE </li>
                <li className='close_mgnb' onClick={() => { setHamClicked(false) }}> <i>Close</i> </li>
              </ul>
            </div>
            : null
        }
      </header>
      {
        isClicked === true ? <div className='login'>
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
        <Route path="/news" element={<News news={news} newsClicked={newsClicked} setNewsClicked={setNewsClicked} setNums={setNums} nums={nums} />} />
        <Route path="/store" element={<Store books={books} bookStore={bookStore} setBookStore={setBookStore} />} />
        <Route path="/mypage" element={<Mypage books={books} bookStore={bookStore} news={news} newsClicked={newsClicked} setNums={setNums} nums={nums} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
