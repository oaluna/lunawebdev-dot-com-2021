import React from "react";
import { FaLinkedin, FaDev, FaMedium, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: aliceblue;
    transition: 0.2s ease-in;
    &:hover {
      color: skyblue;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/oscar-a-luna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/oaluna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="https://dev.to/oaluna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev />
          </a>
        </li>
        <li className="item">
          <a
            href="https://medium.com/@oaluna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />
          </a>
        </li>
        <li className="item">
          <a
            href="https://instagram.com/LunaWebDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
