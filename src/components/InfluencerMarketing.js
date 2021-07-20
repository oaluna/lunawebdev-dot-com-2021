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
                <h3>Influencer Selection</h3>
                <p>
                  {" "}
                  We can offer you a roster of influencers working exclusiveley
                  with us nand/r find someone specific you are looking for.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="management"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Campaign Management</h3>
                <p>
                  {" "}
                  Our team will manage the influencers chosen and make sure they
                  post the right contents at the right time.
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
                  Our esclusive influencers do their best to create the content
                  that follows the guidelines while being relevant to thei
                  audience.{" "}
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="analytics"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Campaign Reporting</h3>
                <p>
                  {" "}
                  Your campaign results will be collected in real time and at
                  the end of the perios you will receive a full report of the
                  content posted and relative statistics.
                </p>
              </div>

              <div className="serviceDetailsCard serviceDetailsCardLast">
                <SvgIcons
                  dimension="50px"
                  iconName="heartMessage"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Can't Find What Your Are Looking For?</h3>
                <p> Get in touch and let us know what you need. </p>
                <Link to={"/Contacts"}>
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
