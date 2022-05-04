import styles from './project.module.css'

function Project() {
    return (
        <>
            <div className={styles.mainslide}>
                <div className={styles.slide_txt}>
                    <h2>Project</h2>
                    <p>낮은 것의 풍요로움</p>
                    <dl>
                        <dt>'보리'</dt>
                        <dd>By 아키후드</dd>
                    </dl>

                </div>

                <div className={styles.slide_img} >
                    <img src="img/project_bigl.jpg" alt="보리" />
                </div>
            </div >

            <div className={styles.intro}>
                <div className={styles.names}>
                    <p>Reporter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>최은화</span></p>
                    <p>Photographer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>박수환</span></p>
                    <p>Intervieweer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>강우현, 강영진</span></p>
                </div>
                <div className={styles.bio}>
                    <span>강우현, 강영진</span>은  현재 아키후드 건축사사무소에서<br />
                    ‘틈과 경계’, ‘친숙한 낯설음’ 등을 주제로 건축 활동을 하고 있다. <br />
                    대표작으로는 서림연가, 부암동 두집 등이 있다. 젊은건축가상과 <br />
                    신진건축사대상에서 대상을 받았으며<br />
                    한국건축문화대상, 서울시 건축상 등 다수의 상을 수상했다<br />

                </div>
            </div>


            <div className={styles.qna}>
                <img src="img/project_1.jpg" alt="사진" />
                <div>
                    <h2>Question</h2>
                    <p className={styles.bt}>“보리는 전라남도 영광의 백수해안도로에 위치한다.<br />
                        이곳의 지리적 특성은 어떠한가?”</p>
                    <h2 className={styles.an}>Answer</h2>
                    <p className={styles.an}>“ 해안도로를 따라 오른쪽에 바다를 끼고 현장으로<br /> 다가갔는데, 도로에서 3~4m 낮은 곳에 대지가 위<br /> 치해 있었다. 주위에 높은 건물이 없어 시원하게 바<br /> 다를 볼 수 있고, 절벽가여서 바다로 가까이 다가가<br /> 면 파도 소리까지 기분 좋게 들을 수 있었다. 대지<br /> 는 야트막한 경사지로 보리농사를 짓는 밭으로 사<br /> 용되고 있었다. ”</p>
                </div>
            </div>

            <div className={styles.qna} >
                <div>
                    <h2>Question</h2>
                    <p className={styles.bt}>“구불구불한 여정을 거쳐 도착한 내부 공간은 방향성이<br />  굉장히 명확하다. 건물의 배치, 바닥 레벨의 차이,<br />
                        직접 디자인한 가구의 형태와 배치 등 모든 것들이 바다<br /> 를 향하고 있다. 이곳에서 사람들이 어떤 경험을 하길 바<br /> 라며 계획했는가? ”</p>
                    <h2 className={styles.an}>Answer</h2>
                    <p className={styles.an}>“도심 속에 있는 카페들처럼 유명한 디저트를 먹기<br />위해서 오고, 친구를 만나 왁자지껄 떠들기 위해서<br /> 오고, 이런 것과는 거리가 멀다고 봤다.<br />
                        같이 온 사람과 나란히 앉아서 경치를 바라보며 느<br /> 긋하게 시간을 보내는 장면을 생각했다. ”</p>
                </div>
                <img src="img/project_2.jpg" alt="사진" />
            </div>
        </>
    );

}

export default Project;