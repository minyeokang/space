import styles from './news.module.css'

function News() {
    return (
        <div className={styles.news}>
            <h1>WEEKLY NEWS</h1>
            <ul>
                <li>
                    <div>
                        <img src="img/ariticle_1.png" alt="이미지1" />
                        <button className={styles.selected}>★</button>
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
    );

}

export default News;