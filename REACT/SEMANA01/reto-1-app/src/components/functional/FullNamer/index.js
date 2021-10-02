import React from "react";
import './index.css'

function FullNamer() {
    return(
        <div className='container'>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name='fullname' id='fullname'/>
        </div>
    )
}

export default FullNamer;