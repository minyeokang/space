import styles from './reader.module.css'
function Reader() {
    return (
        <div className={styles.reader}>
            <div className={styles.headertop}>
                <p>Become a Reader!</p>
                <div>
                    <input type="text" placeholder='Email' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}
export default Reader;