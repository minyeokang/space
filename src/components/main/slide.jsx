import styles from './slide.module.css'
import { useNavigate } from 'react-router-dom'

function Slide() {
    let navigate = useNavigate();
    return (
        <div className={styles.mainslide}>
            <div className={styles.slide_txt}>
                <h2>Project</h2>
                <p>낮은 것의 풍요로움</p>
                <dl>
                    <dt>'보리'</dt>
                    <dd>By 아키후드</dd>
                </dl>
                <div className={styles.more} onClick={() => {
                    navigate("/project");
                }}>More</div>
            </div>

            <div className={styles.slide_img} onClick={() => {
                navigate("/project")
            }} >
                <img src="img/project_small.jpg" alt="보리" />
            </div>

        </div >
    )
}
export default Slide;