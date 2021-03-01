import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';
//import {faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './headBar.css';
import { Link } from 'react-router-dom';
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
          <img
            src='https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Moon_Phase_Full.png'
            alt='moon brand'
            style={{
              position: 'absolute',
              zIndex: -1,
              width: '48px',
              height: '48px'
            }}
          />
          <h2
            className='headBarTitle'
            style={{
              fontFamily: 'Ammonite',
              color: '#fff',
              fontWeight: 100,
              textShadow: '0px 0px 2px #333'
            }}>
            luna web solutions
          </h2>
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
            <Link to={'/'}>Home</Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Projects'}>Case History</Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Services'}>Services</Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Contact'}>Contacts</Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/AboutMe'}>About</Link>
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
