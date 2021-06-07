import React from 'react';
import Card from '../card/Card';
import "../intro/Intro.css";

function Intro() {
    return (
        <>
        <h3 className="intro__heading">Virtual <span>Shades</span></h3>
        <div className="intro">
            <Card img="./images/intro-1.png"
                  heading ="Different Shades"
                  para ="Lorem ipsum dolor sit amet"
                  link="Checkout"
            />
            <Card img="./images/intro-2.png"
                  heading ="Availability of Shades  "
                  para ="Lorem ipsum dolor sit amet"
                  link="Availablity"
            />
            <Card img="./images/intro-3.png"
                  heading ="Take a Test"
                  para ="Lorem ipsum dolor sit amet"
                  link="Schedule"
            />
            <Card img="./images/intro-4.png"
                heading ="Possibilities"
                  para ="Lorem ipsum dolor sit amet"
                  link="See More"
            />
        </div>
        </>
    )
}

export default Intro;
