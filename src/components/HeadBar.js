import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDev } from '@fortawesome/free-brands-svg-icons';
//import {faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SvgIcons from './SvgIcons';
import './headBar.css';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const HeadBarContainer = styled.div`
//   position: absolute;
//   z-index: 2000;
//   width: 100%;
//   height: 50px;
//   overflow: visible;
//   margin: 0;
//   padding: 0px 0 0 0;
//   box-sizing: border-box;
//   transition: all 0.3s ease;
//   background: rgba(255, 252, 251, 0.11);
//   align-items: center;
//   backdrop-filter: blur(12px);
// `;

// const ActiveHeadBarContainer = styled.div`
//   height: 100vh;
//   background-color: transparent;
//   &.HeadBarMenu {
//     pointer-events: auto;
//     margin: 30px 0;
//     opacity: 1;
//     height: auto;

//     background: rgba(255, 255, 255, 0.15);
//     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//     backdrop-filter: blur(7.5px);
//     -webkit-backdrop-filter: blur(7.5px);
//     border-radius: 10px;
//     border: 1px solid rgba(255, 255, 255, 0.18);
//   }
// `;

// const HeadBarContainerTop = styled.div`
//   height: 80px !important;
//   background-color: rgba(256, 256, 256, 0) !important;
//   padding: 25px 0 0 0 !important;
// `;
// const StyledHeadBar = styled.div`
//   width: 100%;
//   height: 50px;
//   box-sizing: border-box;
//   padding: 10px 30px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   transition: all 0.3s ease;
//   margin: 0 auto;
// `;

// const HeadBarButton = styled.div`
//   cursor: pointer;
//   width: 25px;
//   height: 25px;
//   display: flex;
//   justify-content: center;
//   &.HeadBarButtonContent {
//     transform: rotate(45deg) scale(1.2);
//   }
// `;
// const HeadBarMenu = styled.div`
//   width: 100%;
//   box-sizing: border-box;
//   padding: 0;
//   pointer-events: none;
//   display: block;
//   margin: 0;
//   transition: all 0.3s ease;
//   height: 0;
//   opacity: 0;
// `;

// const HeadBarButtonContent = styled.span`
//   transition: all 0.6s ease;
// `;
// const HeadBarMenuItem = styled.h2`
//   text-align: center;
//   padding: 5px 0px;
//   cursor: pointer;
//   &:hover {
//     text-align: center;
//     cursor: pointer;
//     transition: 0.3s ease-in;
//     background-color: rgba(31, 38, 135, 0.5);
//     color: rgb(240, 248, 255);
//   }
// `;

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
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <SvgIcons
            iconName='oscarArmandoLunaLogo'
            style={{ position: 'absolute', marginLeft: '-10vw' }}
          />
          {/* <img
            src='https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Moon_Phase_Full.png'
            alt='moon brand'
            style={{
              position: 'absolute',
              zIndex: -1,
              width: '48px',
              height: '48px'
            }}
          />
          <h1
            className='headBarTitle'
            style={{
              fontFamily: 'Ammonite',
              color: '#fff',
              fontWeight: 100,
              textShadow: '0px 0px 2px #333'
            }}>
            oscar armando luna
          </h1> */}
        </Link>
        <div className='headBarButton' onClick={() => handleMenu(!isOpen)}>
          <button
            className='circleBtn circleBtnDark'
            style={{ margin: 0, height: '35px' }}>
            <span className='headBarButtonContent circleBtnIcon'>+</span>
          </button>
        </div>
      </div>
      <div className='headBarMenu'>
        <div className='headBarMenuItems'>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/'}><h4>Home</h4></Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Projects'}><h4>Case History</h4></Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Services'}><h4>Services</h4></Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/BlogPage'}><h4>Blog</h4></Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Contact'}><h4>Contact</h4></Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/AboutMe'}><h4>About</h4></Link>
          </h2>
        </div>
        <div className='socialBox'>
          <a
            href='https://www.facebook.com/aka.kay.drama'
            className='socialItem'>
            {/* <FontAwesomeIcon icon={faFacebookSquare}
              style={{fontSize: '30px'}}
            /> */}
            <img
              src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/facebook-512.png'
              style={{ width: '32px', height: '32px' }}
              alt='facebook link'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/oscar-a-luna'
            className='socialItem'>
            {/* <FontAwesomeIcon icon={faLinkedin}
              style={{fontSize: '30px'}}
            /> */}
            <img
              src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/linkedin-512.png'
              alt='Linkedin, professional network, linked in icon - Free download'
              style={{ width: '32px', height: '32px' }}
            />
          </a>
          <a href='https://www.instagram.com/LunaWebDev' className='socialItem'>
            {/* <FontAwesomeIcon icon={faInstagram}
              style={{fontSize: '30px'}}
            /> */}
            <img
              src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png'
              alt='Applications, instagram, media, social icon - Free download'
              style={{ width: '32px', height: '32px' }}
            />
          </a>
          <a href='https://www.dev.to/oaluna' className='socialItem'>
            {/* <FontAwesomeIcon icon={faDev} style={{ fontSize: '32px' }} /> */}
            <img
              src='https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png'
              alt='Dev.to social icon'
              style={{ width: '36px', height: '36px' }}
            />
          </a>
          <a href='https://www.twitter.com/LunaWebDev' className='socialItem'>
            {/* <FontAwesomeIcon icon={faTwitter}
              style={{fontSize: '30px'}}
            /> */}
            <img
              src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/twitter-512.png'
              alt='Logo, social, tweet, twitter icon - Free download'
              style={{ width: '32px', height: '32px' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
