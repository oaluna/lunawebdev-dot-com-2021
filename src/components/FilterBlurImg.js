import React, { Component } from "react";

import "./components.css";

export default class FilterBlurImg extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="filterBlurImgContainer">
        <div
          className="filterBlurImg"
          style={{
            backgroundImage: "url(" + this.props.img + ")"
          }}
        ></div>
        <div
          className={
            this.props.brightness === "dark"
              ? "filterBlurImg filterBlurImgBottom filterDark"
              : this.props.brightness === "light"
              ? "filterBlurImg filterBlurImgBottom filterLight"
              : "filterBlurImg filterBlurImgBottom"
          }
          style={{
            backgroundImage: "url(" + this.props.img + ")"
          }}
        ></div>
      </div>
    );
  }
}
