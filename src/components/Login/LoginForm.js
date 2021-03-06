
import { Input, notification } from 'antd';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../config/axios';
import LocalStorageService from '../../services/localStorage'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onFinish = (e) => {
        e.preventDefault();
        axios.post('/auth/login', { email, password })
            .then(res => {
                notification.success({
                    description: "Login success"
                })
                LocalStorageService.setToken(res.data.token);
                props.history.push('/dashboard');

            })
            .catch(err => {
                console.log(err)
                notification.error({
                    description: "Login failed"
                })
            })
    };


    return (
        <main className="main">
            <div className="wrapper">
                <div className="card">
                    <div className="title">
                        <h1 className="title title-large">Sign In</h1>
                        <p className="title title-subs">New user? <span><a href="/register" className="linktext">Create an account</a></span></p>
                    </div>

                    <form className="form" onSubmit={onFinish}>
                        <div className="form-group">
                            <Input className="input-field" bordered={false} values={email} onChange={onChangeEmail} placeholder={"Email address"} required />
                            {/* <input value={email} onChange={onChangeEmail} type="email" name="email" id="email" className="input-field" placeholder="Email address" /> */}
                        </div>
                        <div className="form-group">
                            <Input.Password className="input-field" bordered={false} values={password} onChange={onChangePassword} placeholder={"Password"} required />
                            {/* <input values={password} onChange={onChangePassword} type="password" name="password" id="password" className="input-field" placeholder="Password" /> */}
                        </div>
                        <div className="form-group">
                            <a href="/home" className="linktext">Forgot Password</a>
                            <button className="input-submit" type="submit" >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default withRouter(Login)
