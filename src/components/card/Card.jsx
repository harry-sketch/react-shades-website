import React from 'react';
import {Link} from "react-router-dom";
import "../card/Card.css";

function Card({img,heading,para,link}) {
    return (
        <div className="card">
        <img src= {img} alt="card" />
              <div className="card__content">
                  <h1>{heading}</h1>
                  <p>{para}</p>
                  <Link to="">{link}</Link>
              </div>
        </div>
    )
}

export default Card;
