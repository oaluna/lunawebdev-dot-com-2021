import React, { Component } from "react";
import { Link } from "react-router-dom";
import SkillsPage from './SkillsPage'
import VideoSection from "./VideoSection";
import ServicesSection from "./ServicesSection";
import VierCards from "./ViewCards";
import SvgIcons from "./SvgIcons";
import ContactForm from "./ContactForm";

import "./pages.css";
import "./siteInfo.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <div className="fullSection socialHeader">
          
          <div className="socialHeaderTitle">
            <h1>
              {" "}
              Hello! I'm <span style={{ fontWeight: "900", padding: '0 15px' }}>
                {" "}Oscar Luna
              </span>{" "}
            </h1>
            <h6>
              {" "}
             I'm a front-end web developer, former dancer, and tech blogger from San Francisco, CA. I'm in search of full-time work while increasing my reader count, honing my coding skills, and attending the occasional dance workshop. 
            </h6>
          </div>
          <div className="socialHeaderCallToAction">
            <Link to={"/Contacts"}>
              <button className="simpleBtn simpleBtnDark">
                <h4>GET STARTED</h4>
              </button>
            </Link>
            <Link to={"/Contacts"}>
              <h6> Schedule a Virtual Consultation</h6>
            </Link>
          </div>
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
        </div>
<div className="fullSection">
  <div className="fullSectionContent limitWidthContent">
    <SkillsPage />
  </div>
</div>
        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <h1 className="bigTitle"> Projects </h1>
            <p>Some of the previous projects build when learning web development. <br /><strong>If you're on mobile, swipe left and right to view more.</strong></p>
            <VierCards />
          </div>
          <div className="fullSectionContent limitWidthContent dritteBottom">
            <div className="untersiteInfo">
              <div className="untersiteTitle">
                <h5> Expertise </h5>
                <h2> Front-end Web Develpment </h2>
              </div>
              <div className="untersiteText">
                <p>
                  {" "}
                  I can create stunning, responsive, and semantic UI that adapts to any device screen size. I also have back-end development knowledge such as creating and aintaining relational and non-relational databases as well as deployment to platforms such as Vercel or Netlify.{" "}
                </p>
              </div>
              <div className="untersiteButtons">
                <Link to={"/Projects"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE CASE HISTORY</h4>
                  </button>
                </Link>
                <Link to={"/Contacts"}>
                  <button className="simpleBtn simpleBtnDark">
                    <h4> CONTACT US </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="backSvg backRightBottom">
            <SvgIcons
              dimension="600px"
              iconName="star"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
        </div>

        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <h1 className="bigTitle">Services</h1>
            <ServicesSection />
          </div>
          <div className="fullSectionContent limitWidthContent dritteBottom">
            <div className="untersiteInfo">
              <div className="untersiteTitle">
                <h5> Experience </h5>
                <h2> Self-learned since August 2019 </h2>
              </div>
              <div className="untersiteText">
                <p>
                  {" "}
                  I am self-learned developer who got started in 2019. In the past few years I have become passionate about JavaScript Data Structures, their algorithms for searching, sorting, appending, and prepending data, and using that knowledge towards solving all kinds of problems through writing code.{" "}
                </p>
              </div>
              <div className="untersiteButtons">
                <Link to={"/Projects"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE CASE HISTORY </h4>
                  </button>
                </Link>
                <Link to={"/Services"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE SERVICES </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="backSvg backLeftBottom noShowTablet">
            <SvgIcons
              dimension="400px"
              iconName="heartMessage"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
        </div>
        <VideoSection />
        <ContactForm />
      </div>
    );
  }
}
