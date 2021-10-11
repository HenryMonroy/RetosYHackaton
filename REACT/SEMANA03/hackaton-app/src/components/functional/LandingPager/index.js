import React from 'react';
import './index.css';
import Menu from '../Menu';
import Banner from '../Banner';

function LandingPager() {
    return (
        <div>
            <div className="menu-header">
                <Menu/>
            </div>
            <div className="principal">
                <Banner/>
            </div>
            <div className="detalle"></div>
            <div className="criticas"></div>
            <div className="footer"></div>
        </div>
        
    )
}

export default LandingPager;