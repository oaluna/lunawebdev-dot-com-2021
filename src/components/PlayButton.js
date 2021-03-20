import React, { Component } from "react";

import "./components.css";

export default class PlayButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonStyle: null,
      buttonIconStyle: null,
      initialButtonStyle: null,
      initialButtoniconStyle: null,
      iconDimRateo: this.props.iconDimRateo,
      radius: this.props.radius,
      minDimension: this.props.mindimension,
      maxDimension: this.props.maxDimension,
      color: this.props.color,
      returnValue: this.props.returnValue
    };

    this.followMouse = this.followMouse.bind(this);
    this.resetButtonPos = this.resetButtonPos.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let initialButtonStyle = {
      transform: "translate(0px,0px)",
      width: this.props.minDimension + "px",
      height: this.props.minDimension + "px",
      borderColor: this.props.color
    };
    let initialButtoniconStyle = {
      transform: "translate(0px,0px)",
      fontSize: this.state.minDimension / this.state.iconDimRateo + "px",
      color: this.props.color
    };

    this.setState({
      buttonStyle: initialButtonStyle,
      buttonIconStyle: initialButtoniconStyle,
      initialButtonStyle: initialButtonStyle,
      initialButtoniconStyle: initialButtoniconStyle
    });
  }

  followMouse(e) {
    var xPos = e.clientX - e.currentTarget.getBoundingClientRect().left;
    var yPos = e.clientY - e.currentTarget.getBoundingClientRect().top;
    var width = e.currentTarget.offsetWidth;
    var height = e.currentTarget.offsetHeight;

    var xDist = 0;
    var yDist = 0;

    if (xPos > width / 2) {
      xDist = (xPos - width / 2) / (width / 2);
    } else {
      xDist = -(width / 2 - xPos) / (width / 2);
    }

    if (yPos > height / 2) {
      yDist = (yPos - height / 2) / (height / 2);
    } else {
      yDist = -(height / 2 - yPos) / (height / 2);
    }

    var xDistCircle = Math.round(xDist * this.state.radius);
    var yDistCircle = Math.round(yDist * this.state.radius);
    var xDistIcon = Math.round(
      xDist * (this.state.radius / this.state.iconDimRateo)
    );
    var yDistIcon = Math.round(
      yDist * (this.state.radius / this.state.iconDimRateo)
    );

    let buttonStyle = {
      transform: "translate(" + xDistCircle + "px, " + yDistCircle + "px)",
      width: this.state.maxDimension + "px",
      height: this.state.maxDimension + "px",
      borderColor: this.state.color
    };

    let buttonIconStyle = {
      transform: "translate(" + xDistIcon + "px, " + yDistIcon + "px)",
      fontSize: this.state.maxDimension / this.state.iconDimRateo + "px",
      color: this.state.color
    };

    this.setState({
      buttonStyle: buttonStyle,
      buttonIconStyle: buttonIconStyle
    });
  }

  resetButtonPos(e) {
    this.setState({
      buttonStyle: this.state.initialButtonStyle,
      buttonIconStyle: this.state.initialButtoniconStyle
    });
  }

  handleClick() {
    this.props.handleClick(this.state.returnValue);
  }

  render() {
    return (
      <div
        className="playButtonContainer"
        onMouseMove={this.followMouse}
        onMouseLeave={this.resetButtonPos}
      >
        <div
          className="playButton animBottomUp delay3"
          style={this.state.buttonStyle}
          onClick={this.handleClick}
        >
          <span
            className={this.props.icon + " animBottomUp delay5"}
            style={this.state.buttonIconStyle}
          />
        </div>
      </div>
    );
  }
}
