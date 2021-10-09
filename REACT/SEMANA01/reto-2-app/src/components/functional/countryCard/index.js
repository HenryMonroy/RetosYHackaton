import React from 'react';

const CountryCard = (props) => {
    const { name, image} = props;
    return (
        <div className="item">
            <div className="item-position">
                <img src={image} alt={name} className="item-image"/>
            </div>
            <div className="item-detail">
                <h2>{name}</h2>
            </div>
        </div>
        
    )
};

export default CountryCard;