import React, { Component } from "react";

import ServicesSection from "./ServicesSection";
import SvgIcons from "../SvgIcons";

import "../pages.css";

export default class ServicesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="servicesPage">
        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <h1 className="bigTitle">Our Services </h1>
            <ServicesSection />
          </div>

          <div className="backSvg backLeftBottom noShowTablet">
            <SvgIcons
              dimension="400px"
              iconName="heartMessage"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
        </div>
      </div>
    );
  }
}
