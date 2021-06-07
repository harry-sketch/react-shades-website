import React from "react";
import { Link } from "react-router-dom";
import "../compare/Compare.css";
import CompareIcon from "@material-ui/icons/Compare";

function Compare() {
  return (
    <>
      <div className="compare">
        <div className="compare__left">
          <h2>Set a</h2>
          <h1>Comparision</h1>
          <Link to="">Want to do</Link>
        </div>
        <div className="compare__right">
          <CompareIcon />
          <p>Just Compare</p>
        </div>
      </div>
      <div className="compare__second">
        <div className="comapare__img">
          <img src="./images/center.jpg" alt="center" />

          <div className="compare__secondInside">
            <h1>
              Use <span>Pick-a-Color</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates culpa iure non velit facilis officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, sed?
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compare;
