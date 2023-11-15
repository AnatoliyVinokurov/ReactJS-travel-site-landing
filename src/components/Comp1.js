import React from 'react';
import './style.css'

const Comp1 = () =>{
    return (
        <div className="hero">
        <div className="hero-child" />
        <div className="widewrapping">
          <div className="widewrapping-child" />
          <div className="frame-div">
            <div className="explore-the-world-parent">
              <b className="explore-the-world">Explore the world!</b>
              <img className="work-1-icon" alt="" src="./img/work-1.svg" />
            </div>
            <div className="travel-top-destination-container">
              <p className="travel-top-destination">
                <span className="travel">{`Travel `}</span>
                <span>top destination</span>
                <span className="travel">{` `}</span>
              </p>
              <p className="of-the-world">of the world</p>
            </div>
            <div className="where-adventure-meets">
              Where adventure meets comfort. We create unforgettable travel
              experiences
            </div>
            <div className="frame-parent1">
              <div className="get-started-wrapper">
                <div className="get-started">Get Started</div>
              </div>
              <div className="play-circle5-1-parent">
                <img className="work-1-icon" alt="" src="./img/playcircle5-1.svg" />
                <div className="get-started">Watch Demo</div>
              </div>
            </div>
          </div>
        </div>
        <img className="layer-icon" alt="" src="./img/layer.svg" />
        <img className="vector-icon" alt="" src="./img/vector.svg" />
        <div className="location-1-parent">
          <img className="work-1-icon" alt="" src="./img/location-1.svg" />
          <div className="get-started">Top Places</div>
        </div>
        <img className="vector-icon1" alt="" src="./img/vector1.svg" />
        <div className="card-02">
          <div className="card-02-child" />
          <div className="div1">5000+</div>
          <div className="customers">Customers</div>
          <img className="group-icon" alt="" src="./img/group.svg" />
        </div>
        <div className="hero-inner">
          <div className="group-parent1">
            <img className="frame-child1" alt="" src="./img/group-2.svg" />
            <img className="group-icon1" alt="" src="./img/group1.svg" />
            <img className="group-icon2" alt="" src="./img/group2.svg" />
            <img className="frame-child2" alt="" src="./img/group-9235.svg" />
            <img className="frame-child3" alt="" src="./img/group-3.svg" />
          </div>
        </div>
        <img
          className="menina-de-cabelos-escuros-com-icon"
          alt=""
          src="./img/meninadecabelosescuroscomoculosechapeudepalhadetemingressosemalaazulretratodeviajanteemumlindovestidoretronaparedelilastransformed-1@2x.png"
        />
        <div className="location-1-group">
          <img className="work-1-icon" alt="" src="./img/location-11.svg" />
          <div className="get-started">Top Hotels</div>
        </div>
      </div>
    );
};

export default Comp1;