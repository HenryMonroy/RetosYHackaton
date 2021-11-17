import React from 'react';
import { Container } from './style';
import { items } from '../data/items';

const Cards = () => {
    return (
        <Container>
            <div class="left">
                <div class="description">
                    <div class="by">We Live By</div>
                    <div class="title">The Design Process</div>
                </div>
                <div class="arrow">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="rectangle"></div>
            </div>
            <div class="rigth">
                {items.map(item => (
                    <div class="card">
                        <div>
                            <img src={item.image} alt={item.title}/>
                            <div>{item.title}</div>
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Cards;
