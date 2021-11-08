import React from 'react';
import './index.css';
import { furnitures } from '../../data/furnitures';

const FurnitureCard = () => {
    return(
        <div className="cards">
            {furnitures.map(furniture => (
                <div key={furniture.id}>
                    <div class="furniture">
                        <img src={furniture.image} alt={furniture.name}/>
                        <div class="furniture-container">
                            <div class="title">{furniture.name}</div>
                            <p>{furniture.detail}</p>
                            <div class="footer">
                                <div className="type">{furniture.type}</div>
                                <div className="price">{furniture.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FurnitureCard;