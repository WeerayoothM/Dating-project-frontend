import React from 'react';

function Login() {
    return (

        <main className="main">
            <div className="wrapper">
                <div className="card">
                    <div className="title">
                        <h1 className="title title-large">Sign In</h1>
                        <p className="title title-subs">New user? <span><a href="/register" className="linktext">Create an account</a></span></p>
                    </div>
                    <form className="form">
                        <div className="form-group">
                            <input type="email" name="email" id="email" className="input-field" placeholder="Email address" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" className="input-field" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <a href="/home" className="linktext">Forgot Password</a>
                            <input type="button" name="submit" className="input-submit" defaultValue="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login
