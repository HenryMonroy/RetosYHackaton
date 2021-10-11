import React from 'react';
import './index.css';

function Menu () {
    return (
        <div className="menu">
            <h1>mofish</h1>
            <div className="nav-menu">
                <nav>
                    <ul>
                        <li><a href="#0">in theater</a></li>
                        <li><a href="#0">comming soon</a></li>
                        <li><a href="#0">mdnight</a></li>
                    </ul>
                </nav>
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Menu;