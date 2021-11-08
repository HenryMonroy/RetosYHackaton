import React, { useState } from 'react';
import './index.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const validate = (event) => {
        event.preventDefault();
        if(!username || !password) {
            setIsEmpty(true);
            return;
        }

        setIsEmpty(false);
    }

    return (
        <div className="login-container">
            <h1 class="greeting">Welcome home, Martin</h1>
            <form action="" className="form-login">
                <label htmlFor="" className="label-user">
                    <span className="icon">
                        {username ?
                            <svg class="w-6 h-6" fill="#83D855" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            :
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                        }
                    </span>
                    <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        autoComplete="off"
                        onChange={(event) => setUsername(event.target.value)}/>
                </label>
                <label htmlFor="" className="label-user">
                    <span className="icon">
                        {password ? 
                             <svg class="w-6 h-6" fill="#83D855" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                             : 
                             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                        }
                    </span>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <div className="button-container">
                    <button
                        type="submit"
                        className="button-sigin"
                        onClick={validate}>
                        <span className="text">
                            sign in
                        </span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dddddd" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>
                        </span>
                    </button>
                </div>
                {isEmpty && (
                    <div>*Debe llenar todos los campos para poder loguearse</div>
                )}
            </form>
        </div>
    );
};

export default Login;
