import React from 'react'
import NavBar from './NavBar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { Login } from './Login';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          THE PERFECT PLACE TO GET HIRED!
          </h1>
          <p className="primary-text">
          Connecting Talent with Opportunity, Empowering Careers: Your Pathway to Success.
          </p>
          <Link to= {`/register`}>
            <button className="secondary-button" >
              Register Now <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}


export default Home