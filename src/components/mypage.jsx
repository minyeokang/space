import styles from './mypage.module.css'
function Mypage(props) {
    return (
        <div className={styles.mypage}>
            <div className='login'>
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
                    <button>Login</button>
                </div>
            </div>
            <h1>SUBSCRIPTION</h1>
            <div className={styles.flex}>
                <dl>
                    <dt><img src="img/icon/subs.png" alt="subs" /></dt>
                    <dd>정기구독 신청</dd>
                </dl>



                <div >
                    <h3>구독혜택</h3>
                    <p>할일된 가격으로 매달 편리하게 책을 받아보실 수 있습니다.</p>
                    <p>E-매거진 서비스를 무료로 이용하실 수 있습니다.</p>
                    <span>매월 24,000원</span> <span>1년 240,000원</span><span>1년 240,000원</span>
                </div>

            </div>
            <div className={styles.checkout}>
                <div>
                    <h1>CHECK OUT</h1>
                    {
                        props.bookStore === true ?
                            <div className={styles.devide}>
                                <img src="img/book.png" alt="book" />
                                <dl>
                                    <dt>BOOK No.503</dt>
                                    <dd>Price <span>24,000원</span></dd>
                                    <dd className='btn'>구매하기</dd>
                                </dl>

                            </div>

                            : null
                    }
                </div>
                <div className={styles.fav}>
                    <h1>FAVORITES</h1>
                    <dl>
                        <dt>BOOK No.503</dt>
                        <dd>Price <span>24,000원</span></dd>
                        <dd className='btn'>구매하기</dd>
                    </dl>
                </div>
            </div>



        </div>
    )

}

export default Mypage;