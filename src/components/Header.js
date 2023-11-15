import React from 'react';
import './style.css'

const Header = () =>{
    return (
        <div lassName="landing-page">
        <div className="navbar">
        <div className="logo">
        <b className="travlog">Travlog</b>
        </div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="about">Destinations</div>
          <div className="about">Packages</div>
          <div className="about">Blog</div>
          <div className="about">Contact Us</div>
        </div>
        <div className="frame-container">
          <div className="log-in-wrapper">
            <div className="log-in">Log In</div>
          </div>
          <div className="sign-up-wrapper">
            <div className="log-in">Sign Up</div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Header;