import React, { Component } from "react";
import { Link } from "react-router-dom";

import projectsData from "./Data/pastProjectsData";

import FilterBlurImg from "./FilterBlurImg";
import SvgIcons from "./SvgIcons";

import "./pages.css";

export default class CaseHistoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var projectsCards = projectsData.map((item) => {
      return (
        <Link to={"/ProjectPage/" + (item.id - 1)} className="Card">
          <FilterBlurImg img={item.imageCard} brightness={"dark"} />
          <img src={item.logoImg} alt="none" className="projectLogo"></img>
        </Link>
      );
    });

    return (
      <div className="caseHistoryPage">
        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <h1 className="bigTitle"> Past Projects </h1>
            <div className="projectsCards">{projectsCards}</div>
          </div>
          <div className="backSvg backRightTop">
            <SvgIcons
              dimension="400px"
              iconName="star"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
          <div className="backSvg backLeftBottom">
            <SvgIcons
              dimension="300px"
              iconName="heartMessage"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
        </div>
      </div>
    );
  }
}
