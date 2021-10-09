import React from 'react';
import './index.css';

function LandingPager() {
    return (
        <div>
            <div className="header">
                <h1>mofish</h1>
                <div className="nav-menu">
                    <input type="text" placeholder="Search"/>
                    <nav>
                        <ul>
                            <li><a href="#0">in theater</a></li>
                            <li><a href="#0">comming soon</a></li>
                            <li><a href="#0">mdnight</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="principal"></div>
            <div className="detalle"></div>
            <div className="criticas"></div>
            <div className="footer"></div>
        </div>
        
    )
}

export default LandingPager;