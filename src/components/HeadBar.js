import React, { useState } from 'react';

import SvgIcons from './SvgIcons';
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
            alignItems: 'center',
            marginLeft: '-3.5vw',
            marginBottom: '20px'
          }}>
          <div className="logoWrapper">
            <SvgIcons
              iconName='oscarArmandoLunaLogo'
              className="OscarArmandoLunaLogo"
              style={{ position: 'absolute', left: '-20vw' }}
            />
          </div>
        </Link>
        <div className='headBarButton' onClick={() => handleMenu(!isOpen)}>
          <button
            className='circleBtn circleBtnDark'
            style={{ margin: '-10px 0 50px 0', height: '35px', alignItems: 'flex-start' }}>
            <span className='headBarButtonContent circleBtnIcon'>+</span>
          </button>
        </div>
      </div>
      <div className='headBarMenu'>
        <div className='headBarMenuItems'>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/'}>
              <h3>Home</h3>
            </Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Projects'}>
              <h3>Case History</h3>
            </Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Services'}>
              <h3>Services</h3>
            </Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/BlogPage'}>
              <h3>Blog</h3>
            </Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/Contact'}>
              <h3>Contact</h3>
            </Link>
          </h2>
          <h2 className='headBarMenuItem' onClick={() => handleMenu(false)}>
            <Link to={'/AboutMe'}>
              <h3>About</h3>
            </Link>
          </h2>
        </div>
        <div className='socialBox'>
          <a
            href='https://www.facebook.com/aka.kay.drama'
            className='socialItem'>
            <img
              src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/facebook-512.png'
              style={{ width: '32px', height: '32px' }}
              alt='facebook link'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/oscar-a-luna'
            className='socialItem'>
            <img
              src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/linkedin-512.png'
              alt='Linkedin, professional network, linked in icon - Free download'
              style={{ width: '32px', height: '32px' }}
            />
          </a>
          <a href='https://www.instagram.com/LunaWebDev' className='socialItem'>
            <img
              src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png'
              alt='Applications, instagram, media, social icon - Free download'
              style={{ width: '32px', height: '32px' }}
            />
          </a>
          <a href='https://www.dev.to/oaluna' className='socialItem'>
            <img
              src='https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png'
              alt='Dev.to social icon'
              style={{ width: '36px', height: '36px' }}
            />
          </a>
          <a href='https://www.twitter.com/LunaWebDev' className='socialItem'>
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
