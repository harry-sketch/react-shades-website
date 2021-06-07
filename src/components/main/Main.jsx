import React from 'react';
import "../main/Main.css";
import Banner from "../banner/Banner";
import Showcase from '../showcase/Showcase';
import Compare from '../compare/Compare';
import Intro from '../intro/Intro';
import Sign from '../sign/Sign';

function Main() {
    return (
        <div className="main">
          <Banner/>
          <Showcase/>
          <Compare/>
          <Intro/>
          <Sign/>
        </div>
    )
}

export default Main;
