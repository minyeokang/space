import { useNavigate } from 'react-router-dom';
import styles from './book.module.css'
function Book() {
    let navigate = useNavigate();
    return (
        <div className={styles.book}>
            <div className={styles.newbook}>
                <h2>SPACE'S NEW BOOK</h2>
                <div className={styles.book_divide}>
                    <div>
                        <dl>
                            <dt>BOOK No.503</dt>
                            <dd>사라진 건물과<br />식제된 시간의 재구성</dd>
                        </dl>
                        <div className={styles.more} onClick={() => {
                            navigate("/store")
                        }}>More</div>

                    </div>

                    <img src="img/book.png" alt="book" />
                </div>
            </div>

            <div className={styles.oldbook}>
                <img src="img/roundbook.png" alt="book" />
                <p>스페이스를 구독하고<br />
                    이달의 책과 잡지를 <br />
                    편리하게 받아보세요.</p>
                <div>SUBSCRIBE</div>
            </div>
        </div>
    )
}
export default Book;