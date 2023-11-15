import React from 'react';
import './style.css'

const Footer = () =>{
    return (
        <div className="footer-v1">
        <div className="footer-v11">
          <div className="divider" />


          <div className="px">
      <div className="logo1">
        <b className="travlog1">Travlog</b>
      </div>
      <div className="copyright">
        Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
      </div>
      <div className="social-media-container">
        <div className="social-media-icon-squarefaceb">
          <div className="social-media-icon" />
          <img className="facebook-icon" alt="" src="./img/facebook.svg" />
        </div>
        <div className="social-media-icon-squaretwitt">
          <div className="social-media-icon1" />
          <img className="twitter-icon" alt="" src="./img/twitter.svg" />
        </div>
        <img
          className="social-media-icon-squareinsta"
          alt=""
          src="./img/social-media-icon-squareinstagram.svg"
        />
        <div className="social-media-icon-squarelinke">
          <div className="social-media-icon-parent">
            <div className="social-media-icon2" />
            <img className="linkedin-icon" alt="" src="./img/linkedin.svg" />
          </div>
        </div>
        <div className="social-media-icon-squareyoutu">
          <div className="social-media-icon-group">
            <div className="social-media-icon3" />
            <img className="linkedin-icon" alt="" src="./img/youtube.svg" />
          </div>
        </div>
      </div>
    </div>

          <div className="footer-v1-child" />
        
          <div className="footer-right">
            <div className="footer-column">
              <div className="footer-title">Product</div>
              <div className="footer-links">
                <div className="link">
                  <div className="master-link">
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedpassword3.svg"
                    />
                    <div className="features">Features</div>
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedchevron-down3.svg"
                    />
                  </div>
                </div>
                <div className="link">
                  <div className="master-link">
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedpassword3.svg"
                    />
                    <div className="features">Pricing</div>
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedchevron-down3.svg"
                    />
                  </div>
                </div>
                <div className="link2">
                  <div className="master-link">
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedpassword3.svg"
                    />
                    <div className="features">
                      <span>{`Case `}</span>
                      <span className="studies">studies</span>
                    </div>
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedchevron-down3.svg"
                    />
                  </div>
                </div>
                <div className="link">
                  <div className="master-link">
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedpassword3.svg"
                    />
                    <div className="features">Reviews</div>
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedchevron-down3.svg"
                    />
                  </div>
                </div>
                <div className="link">
                  <div className="master-link">
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedpassword3.svg"
                    />
                    <div className="features">Updates</div>
                    <img
                      className="line-roundedpassword-icon2"
                      alt=""
                      src="./img/line-roundedchevron-down3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-content">
            <div className="footer-left">{`Copyright © 2023 `}</div>
            <div className="footer-right1">
              <span>{`All Rights Reserved | `}</span>
              <span className="terms-and-conditions">Terms and Conditions</span>
              <span>{` | `}</span>
              <span className="terms-and-conditions">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
        );
      };
  
  export default Footer;