import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function Main() {
    let navigate = useNavigate();
    return (
        <>
            <div className='reader'>
                <div className="headertop">
                    <p>Become a Reader!</p>
                    <div>
                        <input type="text" placeholder='Email' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="mainslide ">
                <div className="slide_txt">
                    <h2>Project</h2>
                    <p>낮은 것의 풍요로움</p>
                    <dl>
                        <dt>'보리'</dt>
                        <dd>By 아키후드</dd>
                    </dl>
                    <div className='more'>More</div>
                </div>

                <div className="slide_img">
                    <img src="img/project_small.jpg" alt="보리" />
                </div>

            </div>
            <div className="article">

                <h2>New Articles</h2>
                <ul>
                    <li>
                        <div>
                            <img src="img/ariticle_1.png" alt="이미지1" />
                            <button className='selected'>★</button>
                        </div>
                        <dl>
                            <dt>	&#91; 인터뷰 &#93; 집의 근본, 집의 변주

                            </dt>
                            <dd>건축 입문자들의 가이드 </dd>

                        </dl>
                        <p>VIEW</p>
                    </li>
                    <li>
                        <div>
                            <img src="img/ariticle_1.png" alt="이미지1" />
                            <button >★</button>
                        </div>
                        <dl>
                            <dt>	&#91; 인터뷰 &#93; 집의 근본, 집의 변주

                            </dt>
                            <dd>건축 입문자들의 가이드 </dd>

                        </dl>
                        <p>VIEW</p>
                    </li>
                    <li>
                        <div>
                            <img src="img/ariticle_1.png" alt="이미지1" />
                            <button>★</button>
                        </div>
                        <dl>
                            <dt>	&#91; 인터뷰 &#93; 집의 근본, 집의 변주

                            </dt>
                            <dd>건축 입문자들의 가이드 </dd>

                        </dl>
                        <p>VIEW</p>
                    </li>

                </ul>


            </div>
            <div className="book inner">
                <div className="newbook">
                    <h2>SPACE'S NEW BOOK</h2>
                    <div className="book_divide">
                        <div>
                            <dl>
                                <dt>BOOK No.503</dt>
                                <dd>사라진 건물과<br />식제된 시간의 재구성</dd>
                            </dl>
                            <div className="more">More</div>

                        </div>

                        <img src="img/book.png" alt="book" />
                    </div>
                </div>

                <div className="oldbook">
                    <img src="img/roundbook.png" alt="book" />
                    <p>스페이스를 구독하고<br />
                        이달의 책과 잡지를 <br />
                        편리하게 받아보세요.</p>
                    <div>SUBSCRIBE</div>
                </div>
            </div>


        </>
    )
}
export default Main;