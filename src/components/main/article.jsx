import styles from './article.module.css'
function Article() {
    return (
        <div className={styles.article}>

            <h2>New Articles</h2>
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
    )
}
export default Article;