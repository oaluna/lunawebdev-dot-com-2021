import React from "react";
import { stackList } from "../Projects/projectsData";
import {
  // Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper
} from "./AboutElements";
//import FrameTwo from "../../assets/frameTwo.svg";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            Hello! My name is <strong>Oscar Luna</strong>. I'm a full-stack
            developer from San Francisco, CA. I have 3 years of experience as a
            web developer. I'm currently freelancing for clients on Upwork. I'm
            also a tech blogger on Medium.
          </div>
          <div className="AboutBio tagline2">
            I have a thorough understanding of web technologies. Some of the
            ones I commonly work with:
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
