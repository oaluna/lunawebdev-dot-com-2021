import React, { Component } from "react";
import { Link } from "react-router-dom";

import projectsData from "../Data/projectsData";
import SvgIcons from "../SvgIcons";
import "../components.css";

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProject: parseInt(this.props.match.params.Project, 10),
      nextProject: parseInt(this.props.match.params.Project, 10) + 1
    };
  }

  componentDidMount() {
    if (this.state.nextProject === projectsData.lenght - 1) {
      this.setState({
        nextProject: 0
      });
    }
  }

  render() {
    return (
      <div className="videoSection projectPage">
        <div className="videoSectionLeft">
          <div className="tikenModule">
            <div className="tiken firstTiken">
              <div className="tikenTop">
                <h2>
                  {" "}
                  {projectsData[this.state.currentProject].stat1.number}{" "}
                </h2>
              </div>
              <div className="tikenBottom">
                <h6> {projectsData[this.state.currentProject].stat1.text} </h6>
              </div>
            </div>
            <div className="tiken secondTiken">
              <div className="tikenTop">
                <h2>
                  {" "}
                  {projectsData[this.state.currentProject].stat2.number}{" "}
                </h2>
              </div>
              <div className="tikenBottom">
                <h6> {projectsData[this.state.currentProject].stat2.text} </h6>
              </div>
            </div>
            <div className="tiken thirdTiken">
              <div className="tikenTop">
                <h2>
                  {" "}
                  {projectsData[this.state.currentProject].stat3.number}{" "}
                </h2>
              </div>
              <div className="tikenBottom">
                <h6> {projectsData[this.state.currentProject].stat3.text} </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="projectOverlay"></div>

        <div
          className="fullScreenImage"
          style={{
            backgroundImage:
              "url(" + projectsData[this.state.currentProject].imageLarge + ")"
          }}
        ></div>

        <div className="videoSectionRight">
          <div className="seiteInfo">
            <div className="seiteTitle">
              <h5> {projectsData[this.state.currentProject].category} </h5>
              <h2>{projectsData[this.state.currentProject].title}</h2>
            </div>
            <div className="seiteText">
              <p>{projectsData[this.state.currentProject].text}</p>
            </div>
            <div className="seiteButtons">
              <button
                onClick={() => this.props.history.goBack()}
                className="circleBtn circleBtnDark"
              >
                <span
                  style={{
                    transform: "rotate(" + 180 + "deg)",
                    marginRight: "10px"
                  }}
                >
                  <SvgIcons
                    dimension="15px"
                    iconName="arrowRight"
                    fillColor="rgba('0, 0, 0, 1)"
                  />
                </span>
                <h4> GO BACK </h4>
              </button>
              <Link to={"/Contacts"}>
                <button className="simpleBtn simpleBtnDark">
                  <h4> CONTACT US </h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
