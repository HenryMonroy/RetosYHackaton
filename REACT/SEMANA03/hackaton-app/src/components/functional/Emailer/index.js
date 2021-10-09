import React from 'react';
import './index.css';

function Emailer() {
    return (
        <div className="container">
            <div className="left-bg">
                <div className="partial-container-left">
                    <h1>YouBase</h1>
                    <h2>Connect to people, not platforms.</h2>
                    <p>Person-mediate health data exchange is the future of Health IT and precision medicine. YouBase was built to take us there.</p>
                    <div className="sign">
                        <p>Sign up for out beta list to learn more.</p>
                        <input type="text" placeholder="Enter you email..."/>
                        <button>get started</button>
                    </div>
                </div>
            </div>
            <div className="right-bg">
                <div className="partial-container-right">
                    <nav className="container-nav">
                        <ul>
                            <li><a href="#0">solution</a></li>
                            <li><a href="#0">partners</a></li>
                            <li><a href="#0">patient</a></li>
                            <li><a href="#0">about</a>
                                <ul>
                                    <li><a href="#0">US</a></li>
                                </ul>
                            </li>
                            <li><a href="#0">contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Emailer;