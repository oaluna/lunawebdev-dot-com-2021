import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faMedium, faDev, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import SvgIcons from "../SvgIcons";

import "./headBar.css";
import { Link } from "react-router-dom";

export default function HeadBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu(value) {
    setIsOpen(value);
  }

  return (
    <div
    className={
      isOpen
        ? 'headBarContainer headBarContainerActive'
        : props.isTop
        ? 'headBarContainer headBarContainerTop'
        : 'headBarContainer'
    }>
    <div className='headBar limitWidthContent'>
      <Link
        to='/'
       >
        <div className="logoWrapper">
          <SvgIcons
            iconName='oscarArmandoLunaLogo'
            className="OscarArmandoLunaLogo"

          />
        </div>
      </Link>
      <div className='headBarButton' onClick={() => handleMenu(!isOpen)}>
        <button
          className='circleBtn circleBtnDark'>
          <span className='headBarButtonContent circleBtnIcon'>+</span>
        </button>
      </div>
    </div>
    <div className='headBarMenu'>
      <div className='headBarMenuItems'>
        <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
          <Link to={'/'}>
            <h6>HOME</h6>
          </Link>
        </h2>
        <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
          <Link to={'/Projects'}>
            <h6>CASE HISTORY</h6>
          </Link>
        </h2>
        <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
          <Link to={'/Services'}>
            <h6>SERVICES</h6>
          </Link>
        </h2>
        <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
          <Link to={'/Skills'}>
            <h6>SKILLS</h6>
          </Link>
        </h2>
        <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
          <Link to={'/BlogPage'}>
            <h6>BLOG</h6>
          </Link>
        </h2>
        <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
          <Link to={'/Contacts'}>
            <h6>CONTACT</h6>
          </Link>
        </h2>
        <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
          <Link to={'/AboutMe'}>
            <h6>ABOUT</h6>
          </Link>
        </h2>
      </div>
      <div className='socialBox'>
        <a
          href='https://www.facebook.com/aka.kay.drama'
          className='socialItem'>
          <FontAwesomeIcon style={{width: '32px', height: '32px'}} icon={faFacebook} />
        </a>
        <a
          href='https://www.linkedin.com/in/oscar-a-luna'
          className='socialItem'>
          <FontAwesomeIcon style={{width: '32px', height: '32px'}} icon={faLinkedin} />
        </a>
        <a href='https://www.medium.com/@oaluna' className='socialItem'>
        <FontAwesomeIcon style={{width: '32px', height: '32px'}} icon={faMedium} />
        </a>
        <a href='https://www.instagram.com/LunaWebDev' className='socialItem'>
        <FontAwesomeIcon style={{width: '32px', height: '32px'}} icon={faInstagram} />
        </a>
        <a href='https://www.dev.to/oaluna' className='socialItem'>
        <FontAwesomeIcon style={{width: '32px', height: '32px'}} icon={faDev} />
        </a>
      </div>
    </div>
  </div>
  );
}
