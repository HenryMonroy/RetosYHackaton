import React from 'react';

function LoginForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Hello.</h2>
                <h2>Welcome Back</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="email" name="username" id="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="form-group-pass">
                        <input type="password" name="password" id="password"/>
                        <a href="#0" className="Hide">Hide</a>
                    </div>
                </div>
                <p><a href="#0">Forgot Password?</a></p>
                <input type="submit" value="Login"/>
                <button>Create Account</button>
            </div>
        </form>
    )
}

export default LoginForm;
