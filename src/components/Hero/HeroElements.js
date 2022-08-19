import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding: 4rem 1rem 10rem 1rem;
  margin: 5rem auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 80%;
  height: 100vh;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 700px;
  }
  @media (min-width: 992px) {
    max-width: 900px;
  }
  @media (min-width: 1200px) {
    max-width: 80%;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 0vh;
    align-items: center;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  max-width: 70%;
  z-index: 10;

  img {
    height: 7rem;
    margin: 2rem 0;
  }

  h1 {
    font-size: 4rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 700;
    line-height: 1;
    text-align: left;
    @media screen and (min-width: 1900px) {
      font-size: 10rem;
      margin-top: 8rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 6rem;
    }
    @media screen and (min-width: 300px) {
      width: 100vw;
      margin-left: 1em;
      align-items: flex-start;
    }
    @media screen and (min-width: 768px) {
      line-height: 1.2;

      max-width: 40vw;
      margin-left: 0;
    }
  }

  h5 {
    font-size: 1.5rem;
    color: #f6f6f6;
    font-weight: 400;
    @media screen and (max-width: 767px) {
      width: 100vw;
      text-align: left;
      margin-left: 3em;
    }
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
    @media (max-width: 800px) {
      width: 100vh;
    }
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;
export const HeroImgContainer = styled.div`
  background: linear-gradient(
    132deg,
    rgba(251, 51, 255, 0.51),
    rgba(78, 83, 190, 0.46),
    rgba(5, 0, 255, 0.41),
    rgba(48, 255, 255, 0.36)
  );
  border-radius: 60%;
  @media screen and (min-width: 300px) {
    max-width: 100vw;
    transform: scale(1.3);
    right: 0;
    top: 5em;
    z-index: 0;
    position: absolute;
    overflow-y: hidden;
  }
  @media screen and (min-width: 568px) {
    width: 35%;
    left: 35em;
    transform: scale(0.9);
  }
  @media screen and (min-width: 1000px) {
    width: 45%;
    top: 7em;
    left: 30em;
    right: 0;
    transform: scale(0.75);
  }
  @media screen and (min-width: 1300px) {
    left: 50em;
    top: 0em;
  }
  @media screen and (min-width: 1900px) {
    left: 65em;
  }
`;
export const Image = styled.img`
  height: 600px;
  width: auto;
  z-index: 0 !important;
  opacity: 0.55;
  transform: scale(1.5);

  position: absolute;
  &.IllustrationTop {
    top: -20rem;
    left: 0rem;
    transform: scale(1.5);
  }
  &.IllustrationBottom {
    right: 0;
    top: 8rem;
  }
  @media (max-width: 992px) {
    &.IllustrationTop {
      transform: scale(1.5);
      left: -5rem;
      top: -20rem;
    }
  }
  @media (max-width: 1025px) {
    &.IllustrationBottom {
      top: 0rem;
    }
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
