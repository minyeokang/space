import styles from './article.module.css'
function Article() {
    return (
        <div className={styles.article}>

            <h2>New Articles</h2>
            <ul>
                <li>
                    <div>
                        <img src="img/ariticle_1.png" alt="이미지1" />

                    </div>
                    <dl>
                        <dt>	&#91; 인터뷰 &#93; 집의 변주

                        </dt>
                        <dd>건축 입문자들의 가이드 </dd>

                    </dl>
                    <p>VIEW</p>
                </li>
                <li>
                    <div>
                        <img src="img/ariticle_2.png" alt="이미지1" />

                    </div>
                    <dl>
                        <dt>&#91; 에디토리얼 &#93;  대화시간
                        </dt>
                        <dd>브랜드가 일상이 되는 경험 </dd>

                    </dl>
                    <p>VIEW</p>
                </li>
                <li>
                    <div>
                        <img src="img/ariticle_3.png" alt="이미지1" />

                    </div>
                    <dl>
                        <dt>&#91; 동남아시아 건축가 &#93;
                        </dt>
                        <dd>독일 건축가의 발리 건축뷰 </dd>

                    </dl>
                    <p>VIEW</p>
                </li>

            </ul>


        </div>
    )
}
export default Article;