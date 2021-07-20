import React, { Component } from "react";
import { Link } from "react-router-dom";

import projectsData from "../Data/projectsData";

import FilterBlurImg from "../FilterBlurImg";

import "../components.css";
import "./Cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="vierCardModule">
        <div className="vierCardContent">
          <Link to={"/ProjectPage/0"} className="vierCard">
            <FilterBlurImg img={projectsData[0].imageCard} brightness={""} />
            <img
              src={projectsData[0].logoImg}
              alt="none"
              className="projectLogo"
            ></img>
          </Link>

          <Link to={"/ProjectPage/1"} className="vierCard">
            <FilterBlurImg img={projectsData[1].imageCard} brightness={""} />
            <img
              src={projectsData[1].logoImg}
              alt="none"
              className="projectLogo"
            ></img>
          </Link>

          <Link to={"/ProjectPage/3"} className="vierCard">
            <FilterBlurImg img={projectsData[3].imageCard} brightness={""} />
            <img
              src={projectsData[3].logoImg}
              alt="none"
              className="projectLogo"
            ></img>
          </Link>

          <Link to={"/Projects"} className="vierCard vierCardLast">
            <h3>
              {" "}
              View <br /> All Projects
            </h3>
            <button className="circleBtn circleBtnDark vierCircleButton">
              <span className="circleBtnIcon">+</span>
            </button>
            <FilterBlurImg
              img={
                "https://socialflowagency.com/wp-content/uploads/2020/10/Popular-Brands-Names_Handle-Branding.jpg"
              }
              brightness={""}
            />
          </Link>
        </div>
      </div>
    );
  }
}
