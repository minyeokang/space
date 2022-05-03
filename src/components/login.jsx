function Login() {
    return (
        <div className='login'>
            <div className="box">
                <p className="login_txt">Login<br className="under600" /> <span>For more <br className="under" />service</span></p>
                <div>
                    <form >

                        <input type="text" placeholder='ID' className="id" />
                        <input type="password" placeholder='Password' className="pw" />

                        <p className="join">Not a member yet?<span>join</span></p>
                    </form>
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}
export default Login;