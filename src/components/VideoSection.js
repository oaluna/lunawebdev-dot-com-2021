import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./components.css";

export default class VideoSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openVideo() {
    console.log("clicked play button");
  }

  render() {
    return (
      <div className="videoSection">
        <div className="videoSectionLeft">
          <div className="tikenModule">
            <div className="tiken firstTiken">
              <div className="tikenTop">
                <h2> 30+ </h2>
              </div>
              <div className="tikenBottom">
                <h6> Tech books read so far </h6>
              </div>
            </div>
            <div className="tiken secondTiken">
              <div className="tikenTop">
                <h2> 12000+ </h2>
              </div>
              <div className="tikenBottom">
                <h6> Scatterbrained thoughts </h6>
              </div>
            </div>
            <div className="tiken thirdTiken">
              <div className="tikenTop">
                <h2> 10k+ </h2>
              </div>
              <div className="tikenBottom">
                <h6> Hours of Learning </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="videoOverlay"></div>
        <video loop playsInline autoPlay muted>
          <source
            src="https://www.pexels.com/video/854102/download/"
            type="video/mp4"
          />
          
          Your browser does not support the video tag.
        </video>

        <div className="videoSectionRight">
          <div className="seiteInfo">
            <div className="seiteTitle">
              <h5> Live Events </h5>
              <h2> We Take Your Brand In Tour With Influencers</h2>
            </div>
            <div className="seiteText">
            <h2>COMING SOON</h2>
              <p>
                {" "}
                Stay tuned for live coding in this space.<br />{" "}
              </p>
            </div>
            <div className="seiteButtons">
              <Link to={"/Contacts"}>
                <button className="circleBtn circleBtnDark">
                  <span className="circleBtnIcon">+</span>
                  <h4> FIND OUT MORE </h4>
                </button>
              </Link>
              <Link to={"/Contacts"}>
                <button className="simpleBtn simpleBtn">
                  <h4> CONTACT </h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
