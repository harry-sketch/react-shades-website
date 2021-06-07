import React from "react";
import { Link } from "react-router-dom";
import "../banner/Banner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="banner">
      <Carousel
        autoPlay={true}
        infiniteLoop
        interval={4000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div className="wrap">
          <img src="./images/banner/banner-1.jpg" alt="" />
          <div className="wrap__text">
            <h3>explore the Gradients</h3>
            <Link to="">Get Started</Link>
          </div>
        </div>
        <div className="wrap">
          <img src="./images/banner/banner-2.jpg" alt="" />
          <div className="wrap__text">
            <h3>choose the Gradients</h3>
            <Link to="">Get Started</Link>
          </div>
        </div>
        <div className="wrap">
          <img src="./images/banner/banner-3.jpg" alt="" />
          <div className="wrap__text">
            <h3>pick the Gradients</h3>
            <Link to="">Get Started</Link>
          </div>
        </div>
        <div className="wrap">
          <img src="./images/banner/banner-4.jpg" alt="" />
          <div className="wrap__text">
            <h3>shade the Gradients</h3>
            <Link to="">Get Started</Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
