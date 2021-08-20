import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./services/servicesSection.css";
import "./components.css";

import SvgIcons from "./SvgIcons";

export default class SocialMediaManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="servicePage">
        <div className="fullSection">
          <div
            to={"/SocialMediaManagement"}
            className="socialPostContainer limitWidthContent transparentBlueGradientBack"
          >
            <div className={"socialPostFull"}>
              <div className="socialManagement">
                <div className="socialManagementContent">
                  <div className="iconBox instaBox">
                    {" "}
                    <SvgIcons
                      dimension="100px"
                      iconName="instagram"
                      fillColor="#fff"
                    />{" "}
                  </div>
                  <div className="iconBox tiktokBox">
                    {" "}
                    <SvgIcons
                      dimension="100px"
                      iconName="tiktok"
                      fillColor="fff"
                    />{" "}
                  </div>
                  <div className="iconBox youtubeBox">
                    {" "}
                    <SvgIcons
                      dimension="100px"
                      iconName="youtube"
                      fillColor="fff"
                    />{" "}
                  </div>
                  <div className="iconBox facebookBox">
                    {" "}
                    <SvgIcons
                      dimension="100px"
                      iconName="facebook"
                      fillColor="fff"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="serviceName">
                <h5> Socialmedia </h5>
                <h1> Management </h1>
              </div>
              <button className="circleBtn circleBtnLight plusButton">
                <span className="circleBtnIcon">+</span>
              </button>
            </div>
          </div>
        </div>

        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <div className="serviceDetailsGrid">
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="design"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Design Language</h3>
                <p>
                  {" "}
                  Your online content should be instantly recognizable and be an
                  extension of your design lenguage.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="videoEdit"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Originale Content</h3>
                <p>
                  {" "}
                  Just reposting for the millionth time a stock photo with you
                  logo slapped on it isn't gona cut the line in today's world.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="quality"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Quality Posts</h3>
                <p>
                  {" "}
                  We offer a range of possibilities for creating contents for
                  your socialmedias, photoshoots, product reviews, curated
                  videos, unique tags, influencer created content and much more.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="analytics"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3> Analytics</h3>
                <p>
                  {" "}
                  Everything needs to be accounted for the result it brings and
                  no one can do tht without some well organized interactions
                  report.
                </p>
              </div>

              <div className="serviceDetailsCard serviceDetailsCardLast">
                <h3>Can't Find What Your Are Looking For?</h3>
                <p> Get in touch and let us know what you need. </p>
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
