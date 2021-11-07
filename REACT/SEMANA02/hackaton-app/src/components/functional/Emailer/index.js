import React, { useState, useRef } from 'react';
import './index.css';
import video from '../../../video/youbase.mp4';

function Emailer() {
    const [email, setEmail] = useState('');
    const vidRef = useRef(null);

    const handlePlayVideo = () => {
        vidRef.current.play();
    }

    const validate = () => {
        if (email.length === 0) {
            alert('no ha ingresado ningun email');
            return;
        } else if (/\*/.test(email)) {
            alert('El (*) no es valido para el email');
            return;
        } else if (!/\@/.test(email)) {
            alert('El formato del email no es correcto');
            return;
        }
    }

    return (
        <>
            <div className="container">
                <div className="left-bg">
                    <div className="partial-container-left">
                        <h1>YouBase</h1>
                        <h2>Connect to people, not platforms.</h2>
                        <p>Person-mediate health data exchange is the future of Health IT and precision medicine. YouBase was built to take us there.</p>
                        <div className="sign">
                            <p>Sign up for out beta list to learn more.</p>
                            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter you email..."/>
                            <button type="submit" onClick={validate}>get started</button>
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
                                <li>
                                    <a className="have-menu" href="#0">
                                        about
                                    </a>
                                    <ul>
                                        <li><a href="#0">US</a></li>
                                    </ul>
                                </li>
                                <li><a className="button" href="#0">contact</a></li>
                            </ul>
                        </nav>
                        <div class="container-video">
                            <video ref={vidRef} src={video} width="1000"/>
                        </div>
                    </div>
                </div>
            </div>
            <a class="play-btn" href="#0" onClick={handlePlayVideo}></a>
        </>
    )
}

export default Emailer;