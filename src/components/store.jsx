import styles from './store.module.css'
function Store(props) {

    return (
        <div className={styles.store}>
            <h1>STORE</h1>
            <div className={styles.flex}>
                <div className={styles.txt}>
                    <p>SPACE'S NEW BOOK</p>
                    <img src="img/book.png" alt="book" />
                </div>
                <div className={styles.table}>
                    <dl>
                        <dt>BOOK No.503</dt>
                        <dd>사라진 건물과 삭제된 시간의 재구성</dd>
                    </dl>
                    <table>
                        <tr>
                            <th>Frame</th>
                            <td>사라진 근대건축</td>
                        </tr>
                        <tr>
                            <th>Publisher</th>
                            <td>CNB 미디어</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>24,000원</td>
                        </tr>
                    </table>
                    <div className='btn'>구매하기</div>
                    <div className='btn' onClick={() => {
                        props.setBookStore(true)
                        alert('장바구니에 추가되었습니다')
                    }}>장바구니</div>
                </div>
            </div>
            <div className={styles.bookflex}>
                {
                    props.books.map((a, i) => {
                        return (
                            <div>
                                <img src={a.img} alt="book" />
                                <p>{a.title} <span>{a.price}</span></p>

                            </div>
                        )
                    })
                }
            </div>





        </div>
    )

}

export default Store;