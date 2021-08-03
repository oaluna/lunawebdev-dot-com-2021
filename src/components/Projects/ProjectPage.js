import React, { Component } from "react";
import { Link } from "react-router-dom";

import projectsData from "../Data/projectsData.js";
import SvgIcons from "../SvgIcons.js";
import "../components.css";
import "../underSideInfo.css";

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProject: parseInt(this.props.match.params.Project, 10),
      nextProject: parseInt(this.props.match.params.Project, 10) + 1,
    };
  }

  componentDidMount() {
    if (this.state.nextProject === projectsData.length - 1) {
      this.setState({
        nextProject: 0,
      });
    }
  }

  render() {
    return (
      <div className="videoSection">
        <div className="videoSectionLeft"></div>
        <div className="projectOverlay"></div>

        <div
          className="fullScreenImage"
          style={{
            zIndex: -1,
            backgroundImage:
              "url(" + projectsData[this.state.currentProject].imageLarge + ")",
          }}
        ></div>

        <div className="videoSectionRight">
          <div className="sideInfo">
            <div className="sideTitle">
              <h5> {projectsData[this.state.currentProject].category} </h5>
              <h2>{projectsData[this.state.currentProject].title}</h2>
            </div>
            <div className="sideText">
              <p>{projectsData[this.state.currentProject].text}</p>
            </div>
            <div className="sideButtons">
              <button
                onClick={() => this.props.history.goBack()}
                className="circleBtn circleBtnDark"
              >
                <span
                  style={{
                    transform: "rotate(" + 180 + "deg)",
                    marginRight: "10px",
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
              <a href={projectsData[this.state.currentProject].url}>
                <button className="simpleBtn simpleBtnDark">
                  <h4>DEMO</h4>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
