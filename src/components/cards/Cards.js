import React, { Component } from "react";
import { Link } from "react-router-dom";

import projectsData from "../Data/pastProjectsData";

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
      <div className="CardModule">
        <div className="CardContent">
          <Link to={"/ProjectPage/0"} className="Card">
            <h5
              style={{
                position: "absolute",
                width: "100%",
                textAlign: "center",
                top: "50%",
                zIndex: 9999,
              }}
            >
              {projectsData[0].title}
            </h5>
            <FilterBlurImg img={projectsData[0].imageCard} brightness={""} />
          </Link>

          <Link to={"/ProjectPage/1"} className="Card">
            <h5
              style={{
                position: "absolute",
                width: "100%",
                textAlign: "center",
                top: "50%",
                zIndex: 9999,
              }}
            >
              {projectsData[1].title}
            </h5>
            <FilterBlurImg img={projectsData[1].imageCard} brightness={""} />
            <p style={{ color: "#000" }}>{projectsData[1].title}</p>
          </Link>

          <Link to={"/ProjectPage/3"} className="Card">
            <h5
              style={{
                position: "absolute",
                width: "100%",
                textAlign: "center",
                top: "50%",
                zIndex: 9999,
              }}
            >
              {projectsData[2].title}
            </h5>
            <FilterBlurImg img={projectsData[2].imageCard} brightness={""} />
            <img
              src={projectsData[2].logoImg}
              alt="none"
              className="projectLogo"
            ></img>
          </Link>

          <Link to={"/Projects"} className="Card CardLast">
            <h3 style={{ color: "#000" }}>
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
