import React from 'react';
import './index.css'

const CountryCard = (props) => {
    const { name, image} = props;
    return (
        <div className="item">
            <div className="item-position" style={{backgroundImage: `url(${image})`}}>
                <h1 className="shadow">{name}</h1>
            </div>
        </div>
        
    )
};

export default CountryCard;