import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import VideoSection from "./VideoSection";
import ServicesSection from "./services/ServicesSection";
import Cards from "./cards/Cards";
import SvgIcons from "./SvgIcons";
import ContactForm from "./contact/ContactForm";

import "./pages.css";
import "./unterseiteInfo.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <div className="fullSection socialHeader">
<Fade right delay={100} duration={500}>
          <div className="socialHeaderTitle">
            <h1>
              {" "}
              Welcome! <br />I'm <span style={{ fontWeight: "900" }}>
                Oscar Luna
              </span>{" "}
            </h1>
            <h5>
              {" "}
              I'm a front-end web developer, former dancer, and tech blogger from San Francisco, CA. I'm in search of full-time work while increasing my reader count, honing my coding skills, and attending the occasional dance workshop. 
            </h5>
          </div>
</Fade>
<Fade right delay={100} duration={500}>
          <div className="socialHeaderCallToAction">
            <Link to={"/Contacts"}>
              <button className="simpleBtn simpleBtnDark">
                <h4> GET STARTED </h4>
              </button>
            </Link>
            <Link to={"/Contacts"}>
              <h6> Schedule a Virtual Consultation</h6>
            </Link>
          </div>
          </Fade>
          <div className="socialManagement">
          <Fade right delay={100} duration={500}>
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
            </Fade>
          </div>
        </div>

          <Fade left duration={300}>
        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
          <h1 className="bigTitle"> Projects </h1>
            <p>Some of the previous projects build when learning web development. <br /><strong>If you're on mobile, swipe left and right to view more.</strong></p>
            <Cards />
          </div>
          
          <div className="fullSectionContent limitWidthContent dritteBottom">
            <div className="unterseiteInfo">
            <div className="unterseiteTitle">
                <h5> Expertise </h5>
                <h2> Frontend Web Developer </h2>
              </div>
              <div className="unterseiteText">
           
                <p>
                  {" "}
                  I can create stunning, responsive, and semantic UI that adapts to any device screen size. I also have back-end development knowledge such as creating and aintaining relational and non-relational databases as well as deployment to platforms such as Vercel or Netlify.{" "}
                </p>
                
              </div>
              <div className="unterseiteButtons">
                <Link to={"/Projects"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE PAST PROJECTS </h4>
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
          </Fade>
<Fade left duration={300}>
        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <h1 className="bigTitle">Services </h1>
            <ServicesSection />
          </div>
          <div className="fullSectionContent limitWidthContent dritteBottom">
            <div className="unterseiteInfo">
              <div className="unterseiteTitle">
                <h5> Experience </h5>
                <h2> Over 2 Years of Experience </h2>
              </div>
              <div className="unterseiteText">
                <p>
                  {" "}
                  I am self-learned developer who got started in 2019. In the past few years I have become passionate about JavaScript Data Structures, their algorithms for searching, sorting, appending, and prepending data, and using that knowledge towards solving all kinds of problems through writing code.{" "}
                </p>
              </div>
              <div className="unterseiteButtons">
                <Link to={"/Projects"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE PAST PROJECTS </h4>
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
        </Fade>
        <VideoSection />
        <Fade up>
        <ContactForm />
        </Fade>
      </div>
    );
  }
}
