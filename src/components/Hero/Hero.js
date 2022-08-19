import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { Parallax } from "react-scroll-parallax";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  HeroImgContainer,
  ScrollDown,
  ScrollLink
} from "./HeroElements";
import IllustrationTop from "../../assets/IllustrationTop.svg";
import IllustrationBottom from "../../assets/IllustrationBottom.svg";
//import logo from "../../assets/oscarArmandoLunaLogo.svg";

const imgLink =
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1660766725/4125_1458_2155_lsjtuy.png";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  //const { ref } = useParallax({translateY: [-500, 'easeInQuint']});

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Parallax speed={-500}>
        <Image className="IllustrationTop" src={IllustrationTop} alt="top" />
      </Parallax>
      <Parallax speed={-550}>
        <Image
          className="IllustrationBottom"
          src={IllustrationBottom}
          alt="bottom"
        />
      </Parallax>

      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1 className="text-left">Oscar Armando Luna</h1>
            <h5>Full-stack Developer</h5>
            <h5>San Francisco, CA</h5>
          </HeroLeft>
          <HeroRight>
            <HeroImgContainer>
              <img src={imgLink} alt="me" />
            </HeroImgContainer>
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            <button className="btn PrimaryBtn">Fet Started</button>
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
