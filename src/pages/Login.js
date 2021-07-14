import { Link } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {
    return (
        <>
            <div className="login">
                <div className="login-screen">
                    <div className="app-title">
                        <h1>Easyt-App</h1>
                    </div>

                    <div className="login-form">
                        <div className="control-group">
                            <input type="text" className="login-field" value="" placeholder="Usuario" id="login-name" />
                            <label className="login-field-icon fui-user" for="login-name"></label>
                        </div>

                        <div className="control-group">
                            <input type="password" className="login-field" value="" placeholder="Contraseña" id="login-pass" />
                            <label className="login-field-icon fui-lock" for="login-pass"></label>
                        </div>

                        <a className="btn btn-primary btn-large btn-block" id="btn1" href="">Login</a>
                        {/* <a className="btn btn-primary btn-large btn-block" id="btn2" href="/signup">Sign up</a> */}
                        {/* <a className="login-link" href="">Sign Up</a> */}
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;