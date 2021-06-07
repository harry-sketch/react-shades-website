import React from 'react';
import Card from '../card/Card';
import "../showcase/Showcase.css";


function Showcase() {
    return (
        
        <div className="showcase">
        <h3>Unlimited <span>Diversities</span></h3>
        <div className="showcase__card">
            <Card img="./images/card/card-3.png"/>
            <Card img="./images/card/card-4.png"/>
            <Card img="./images/card/card-1.png"/>
            <Card img="./images/card/card-2.png"/>
            <Card img="./images/card/card-5.png"/>
            <Card img="./images/card/card-6.png"/>
            </div>
        </div>
    )
}

export default Showcase;
