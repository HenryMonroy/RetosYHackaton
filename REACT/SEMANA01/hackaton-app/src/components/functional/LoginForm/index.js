import React from 'react';
import './index.css';

function LoginForm() {
    return (
        <div>
            <input type="checkbox" id="switch"/>
            <div className="app">
                <div className="body">
                    <div className="phone">
                        <div class="menu">
                            <div className="time">9:41</div>
                            <div class="icons">
                                <div class="network">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-antenna-bars-5" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="6" y1="18" x2="6" y2="15" />
                                        <line x1="10" y1="18" x2="10" y2="12" />
                                        <line x1="14" y1="18" x2="14" y2="9" />
                                        <line x1="18" y1="18" x2="18" y2="6" />
                                    </svg>
                                </div>
                                <div class="wifi">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="12" y1="18" x2="12.01" y2="18" />
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
                                    </svg>
                                </div>
                                <div class="battery">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-battery-4" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
                                        <line x1="7" y1="10" x2="7" y2="14" />
                                        <line x1="10" y1="10" x2="10" y2="14" />
                                        <line x1="13" y1="10" x2="13" y2="14" />
                                        <line x1="16" y1="10" x2="16" y2="14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <h1 className="heading">Hello.<br/>Welcome Back</h1>
                            <div className="input-block">
                                <label htmlFor="username" className="input-label">Username</label>
                                <input type="email" name="username" id="username" placeholder="Username"/>
                            </div>
                            <div className="input-block">
                                <label htmlFor="password" className="input-label">Password</label>
                                <div class="input-password">
                                    <input type="password" name="password" id="password" placeholder="Password"/>
                                    <button>Show</button>
                                </div>
                                <a href="#0">Forgot Password?</a>
                            </div>
                            <div className="button-block">
                                <button className="input-button">Login</button>
                            </div>
                            <div className="ref-account">
                                <a href="#0">Create Account</a>
                            </div>
                            <label for="switch" className="label-switch">
                                <div class="toggle"></div>
                                <div class="names">
                                    <p class="light">Light</p>
                                    <p class="dark">Dark</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
