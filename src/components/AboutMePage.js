import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faMedium,
  faDev,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import aboutMeData from "./Data/aboutMeData";
import styled, { keyframes } from "styled-components";

export default class AboutMePage extends Component {
  state = {
    pageAuthor: parseInt(this.props.match.params.AboutMe, 1),
  };

  render() {
    return (
      <StyledAboutMePage>
        <AboutMePageHeader>
          <div className="aboutMeTitle">
            <h3>AboutMe</h3>
          </div>
          <div className="aboutMeName">
            <h1>{aboutMeData.name}</h1>
          </div>
          <div className="socialBoxAboutMe">
            <a href={aboutMeData.facebookLink}>
              <FontAwesomeIcon style={{width: "64px", height: "64px", marginRight: "20px", marginTop: "20px"}} icon={faFacebookSquare} />
            </a>
            <a href={aboutMeData.linkedinLink}>
              <FontAwesomeIcon style={{width: "64px", height: "64px", marginRight: "20px", marginTop: "20px"}} icon={faLinkedin} />
            </a>
            <a href={aboutMeData.mediumLink}>
              <FontAwesomeIcon style={{width: "64px", height: "64px", marginRight: "20px", marginTop: "20px"}} icon={faMedium} />
            </a>
            <a href={aboutMeData.devLink}>
              <FontAwesomeIcon style={{width: "64px", height: "64px", marginRight: "20px", marginTop: "20px"}} icon={faDev} />
            </a>
            <a href={aboutMeData.twitterLink}>
              <FontAwesomeIcon style={{width: "64px", height: "64px", marginRight: "20px", marginTop: "20px"}} icon={faTwitter} />
            </a>
            <a href={aboutMeData.githubLink}>
              <FontAwesomeIcon style={{width: "64px", height: "64px", marginRight: "20px", marginTop: "20px"}} icon={faGithub} />
            </a>
          </div>
        </AboutMePageHeader>
        <br />
        <AboutMePageBody>
          <AboutMeText>
            <h5>{aboutMeData.text}</h5>
          </AboutMeText>
        </AboutMePageBody>
      </StyledAboutMePage>
    );
  }
}

const textPopUpTop = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
   opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            opacity: 1;
   }
`;

const StyledAboutMePage = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 90vh;
  color: #fff;
  margin: 0;
`;
const AboutMePageHeader = styled.div`
  text-align: left;
  margin: 15px;
  animation: ${textPopUpTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
`;
const AboutMePageBody = styled.div`
  width: 40vw;
`;

const AboutMeText = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin: 15px;
  animation: ${textPopUpTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
`;
