import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./services/servicesSection.css";
import "./components.css";

import SvgIcons from "./SvgIcons";

export default class DigitalCreations extends Component {
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
              <div className="digitalCreations">
                <div className="digitalPc">
                  <div className="searchBox">
                    <SvgIcons
                      dimension="12px"
                      iconName="web"
                      fillColor="rgba(252, 197, 215, 1)"
                    />
                  </div>
                  <div className="webBox">
                    <SvgIcons
                      dimension="60px"
                      iconName="photo"
                      fillColor="rgba(252, 197, 215, 1)"
                    />
                  </div>
                </div>
                <div className="digitalPhone">
                  <div className="phoneBox">
                    <SvgIcons
                      dimension="60px"
                      iconName="appstore"
                      fillColor="rgba(252, 197, 215, 1)"
                    />
                  </div>
                </div>
              </div>
              <div className="serviceName">
                <h5> Websites & more... </h5>
                <h1> Digital Creations </h1>
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
                  iconName="domain"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Stunning, Responsive UI</h3>
                <p>
                  {" "}
                  I can create UI that looks good on any device.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="design"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Prototyping</h3>
                <p>
                  {" "}
                  I use prototyping tools like Figma and Editor X to prototype UI for my projects.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="responsive"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Swift, Secure Performance</h3>
                <p>
                  {" "}
                  I ensure that my code is optimized and can provide the best Lighthouse score it can before going into deployment.
                </p>
              </div>
              <div className="serviceDetailsCard">
                <SvgIcons
                  dimension="50px"
                  iconName="database"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Database management</h3>
                <p>
                  {" "}
                  I can create and manage relational and non-relational databases such as MongoDB, NoSQL, and Apollo GraphQL.{" "}
                </p>
              </div>
              <div className="serviceDetailsCard serviceDetailsCardLast">
                <SvgIcons
                  dimension="50px"
                  iconName="heartMessage"
                  fillColor="rgba(189, 202, 251, 1)"
                />
                <h3>Want to hire me?</h3>
                <p> Proceed to the contact page to get started. </p>
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
