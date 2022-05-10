import styles from './news.module.css'

function News(props) {
    return (
        <div className={styles.news}>
            <h1>WEEKLY NEWS</h1>
            <div className={styles.newsflex}>
                {
                    props.news.map((a, i) => {
                        return (
                            <div key={i}>
                                <img src={a.img} alt="news" />
                                <div>
                                    <h2>{a.h2}</h2>
                                </div>
                                <h3>{a.title}</h3>
                                <p className={styles.name}>{a.name}</p>
                                <p className={styles.padding}>padding</p>
                                <button onClick={() => {
                                    props.setNums(props.nums + i);
                                    props.setNewsClicked(true);
                                    alert('북마크 되었습니다')
                                }} >★</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );

}

export default News;