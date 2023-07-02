import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Discover, Apply, Succeed.
        </h1>
        <p className="primary-text">
        At HireNow, we believe that every individual has unique talents and potential waiting to be discovered. Our mission is to empower individuals in their career journeys by connecting them recruiters. 
        </p>
        <div className="about-buttons-container">
          <Link to={`/register`}>
          <button className="secondary-button">Join Us</button>
          </Link>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;