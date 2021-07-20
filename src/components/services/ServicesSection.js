import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./servicesSection.css";
import "../components.css";

import SvgIcons from "../SvgIcons";

export default class ServicesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highliht: 1,
      activeStyle: null,
      passiveStyle: null
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    /*let activeStyle = {
      width: "45%"
    };

    let passiveStyle = {
      width: "26%"
    };

    this.setState({
      activeStyle: activeStyle,
      passiveStyle: passiveStyle
    });

    this.handleMouseOver(1);*/
  }

  handleMouseOver(currentHighlight) {
    /* console.log(currentHighlight);
    this.setState({
      highlight: currentHighlight
    });*/
  }

  render() {
    return (
      <div className="servicesContainer">
        <Link
          to={"/InfluencerMarketing"}
          className="socialPostContainer socialPost1 redGradientBack"
          onMouseOver={() => this.handleMouseOver(1)}
          style={
            this.state.highlight === 1
              ? this.state.activeStyle
              : this.state.passiveStyle
          }
        >
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
              <SvgIcons dimension="60px" iconName="photo" fillColor="#fff" />
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
            <h2> Influencer Marketing </h2>
          </div>
          <button className="circleBtn circleBtnLight plusButton">
            <span className="circleBtnIcon">+</span>
          </button>
        </Link>

        <Link
          to={"/DigitalCreations"}
          className="socialPostContainer socialPost2 pinkGradientBack"
          onMouseOver={() => this.handleMouseOver(2)}
          style={
            this.state.highlight === 2
              ? this.state.activeStyle
              : this.state.passiveStyle
          }
        >
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
            <h2> Digital Creations </h2>
          </div>

          <button className="circleBtn circleBtnLight plusButton">
            <span className="circleBtnIcon">+</span>
          </button>
        </Link>
        <Link
          to={"/SocialMediaManagement"}
          className="socialPostContainer socialPost3 violetGradientBack"
          onMouseOver={() => this.handleMouseOver(3)}
          style={
            this.state.highlight === 3
              ? this.state.activeStyle
              : this.state.passiveStyle
          }
        >
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
                  fillColor="#fff"
                />{" "}
              </div>
              <div className="iconBox youtubeBox">
                {" "}
                <SvgIcons
                  dimension="100px"
                  iconName="youtube"
                  fillColor="#fff"
                />{" "}
              </div>
              <div className="iconBox facebookBox">
                {" "}
                <SvgIcons
                  dimension="100px"
                  iconName="facebook"
                  fillColor="#fff"
                />{" "}
              </div>
            </div>
          </div>
          <div className="serviceName">
            <h5> Socialmedia </h5>
            <h2> Management </h2>
          </div>
          <button className="circleBtn circleBtnLight plusButton">
            <span className="circleBtnIcon">+</span>
          </button>
        </Link>
      </div>
    );
  }
}
