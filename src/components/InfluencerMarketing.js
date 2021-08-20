import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./servicesSection.css";
import "./components.css";

import SvgIcons from "./SvgIcons";

export default class InfluencerMarketing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="servicePage">
        <div className="fullSection">
          <div className="socialPostContainer limitWidthContent transparentBlueGradientBack">
            <div className="socialPostFull">
              <div className="socialPost">
                <div className="socialPost3D" />
                <div className="socialProfile">
                  {" "}
                  <SvgIcons
                    dimension="25px"
                    iconName="user"
                    fillColor="#fff"
                  />{" "}
                </div>
                <div className="socialImageContainer">
                  <SvgIcons
                    dimension="60px"
                    iconName="photo"
                    fillColor="#fff"
                  />
                </div>
                <div className="socialAction socialLike">
                  {" "}
                  <SvgIcons
                    dimension="12px"
                    iconName="heart"
                    fillColor="#fff"
                  />{" "}
                </div>
                <div className="socialAction socialComment">
                  {" "}
                  <SvgIcons
                    dimension="12px"
                    iconName="comment"
                    fillColor="#fff"
                  />{" "}
                </div>
                <div className="socialAction socialShare">
                  {" "}
                  <SvgIcons
                    dimension="12px"
                    iconName="send"
                    fillColor="#fff"
                  />{" "}
                </div>
              </div>
              <div className="serviceName">
                <h5> Advertising </h5>
                <h1> Influencer Marketing </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <div className="serviceDetailsGrid">
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="influencer"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Front-end Development</h3>
                <p>
                  {" "}
                  I am a self-taught developer with 2 years of experience.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="management"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Blogger on Medium</h3>
                <p>
                  {" "}
                  I am a writer for 3 publications on Medium, and in the past month my following has grown by over 1500 readers, and counting.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="videoEdit"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Quality contents</h3>
                <p>
                  {" "}
                  When I'm not working on code I'm either reading about it or writing a blog post about it.{" "}
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="analytics"
                  fillColor="rgba(189, 202, 251, 1)"
                />

              </div>

              <div className="serviceDetailsCard serviceDetailsCardLast">
                <SvgIcons
                  dimension="50px"
                  iconName="heartMessage"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Want to hire me?</h3>
                <p> Proceed to the Contact section to get in touch. </p>
                <Link to={"/Contact"}>
                  <button className="simpleBtn simpleBtnDark">
                    <h4> CONTACT US </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="backSvg backRightTop">
            <SvgIcons
              dimension="200px"
              iconName="star"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
          <div
            className="backSvg noShowTablet"
            style={{
              bottom: "5%",
              left: "15%",
              transform: "rotate(-15deg)"
            }}
          >
            <SvgIcons
              dimension="250px"
              iconName="ideaGear"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
        </div>
      </div>
    );
  }
}
