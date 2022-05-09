function Footer() {
    return (
        <footer >
            <div className="inner">

                <div>
                    <h3>SPACE</h3>
                    <ul className='sns'>
                        <li><img src="img/icon/icon_facebook.png" alt="sns" /></li>
                        <li><img src="img/icon/icon_mail.png" alt="sns" /></li>
                        <li><img src="img/icon/icon_chat.png" alt="sns" /></li>
                    </ul>
                </div>
                <div className='changefont'>
                    <ul className='sitemap'>
                        <li>이용약관</li>
                        <li>개인정보취급방침</li>
                        <li>저작권</li>
                    </ul>
                    <address>부산시 중앙대로 508 사업자등록번호 206-41-3569-13</address>
                    <p className="copy">COPYRIGHTS ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;