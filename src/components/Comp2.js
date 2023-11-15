import React from 'react';
import './style.css'

const Comp2 = () =>{
    return (
        <div className="features1">
      <div className="featurescenter-transparent">
        <img className="card-icon" alt="" src="./img/card@2x.png" />
        <div className="h3-feature-title">Easy Booking</div>
        <div className="paragraph-feature-description">
          Embrace life's vastness, venture forth,
        </div>
      </div>
      <div className="featurescenter-transparent1">
        <img
          className="travel-anywhere-in-the-world-w"
          alt=""
          src="./img/travel-anywhere-in-the-world-with-a-suitcase@2x.png"
        />
        <div className="h3-feature-title1">Lot of choices</div>
        <div className="paragraph-feature-description1">
          Embrace life's vastness, venture forth,
        </div>
        <img
          className="travel-anywhere-in-the-world-w1"
          alt=""
          src="./img/travel-anywhere-in-the-world-with-a-suitcase1@2x.png"
        />
      </div>
      <div className="featurescenter">
        <img
          className="yellow-paper-airplane"
          alt=""
          src="./img/yellow-paper-airplane@2x.png"
        />
        <div className="h3-feature-title">Best Tour Guide</div>
        <div className="paragraph-feature-description">
          Embrace life's vastness, venture forth,
        </div>
      </div>
      <div className="what-we-serve-parent">
        <div className="what-we-serve">WHAT WE SERVE</div>
        <b className="top-values-for-container">
          <p className="top-values">{`Top Values `}</p>
          <p className="top-values">For You</p>
        </b>
        <div className="paragraph-feature-description3">
          Embrace life's vastness, venture forth,
        </div>
      </div>
    </div>
    );
};

export default Comp2;