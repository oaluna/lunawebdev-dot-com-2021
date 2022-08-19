import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2000 !important;
  position: relative;
`;

export const NavLink = styled(ScrollLink)`
  color: aliceblue;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  z-index: 100;
  &:hover {
    color: skyblue;
  }
`;
export const LogoContainer = styled(LinkRouter)`
  img {
    width: 175px;
    height: auto;
  }
  @media (max-width: 768px) {
    img {
      align-items: flex-start;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 100;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
