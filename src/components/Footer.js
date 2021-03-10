import React from 'react';

import SvgIcons from './SvgIcons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faTwitter,
  faDev
} from '@fortawesome/free-brands-svg-icons';
import './pages.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='footerFirstRow'>
          <Link to={'/'} className='footerLogo'>
            <SvgIcons dimension='400px' iconName='oscarArmandoLunaLogo' />
          </Link>
          <div className='socialBox' style={{ zIndex: 20 }}>
            <a
              href='https://www.facebook.com/aka.kay.drama'
              className='socialItem'>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/oscar-a-luna'
              className='socialItem'>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
            <a
              href='https://www.instagram.com/LunaWebDev'
              className='socialItem'>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
            <a href='https://www.dev.to/oaluna' className='socialItem'>
              <FontAwesomeIcon
                icon={faDev}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
            <a href='https://www.twitter.com/LunaWebDev' className='socialItem'>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
          </div>
        </div>
        <div className='footerMainMenu'>
          <h4>
            <Link to='/'><h5>Home</h5></Link>
          </h4>
          <h4>
            <Link to='/Projects'><h5>Case History</h5></Link>
          </h4>
          <h4>
            <Link to='/Services'><h5>Services</h5></Link>
          </h4>
          <h4>
            <Link to='/Contact'><h5>Contacts</h5></Link>
          </h4>
          <h4>
            <Link to='/AboutMe'><h5>About Me</h5></Link>
          </h4>
        </div>

        <div className='footerEnd'>
          <h6>&copy;2021 by Oscar Armando Luna, All rights reserved</h6>
          <div className='footerEndMenu'>
            <span id='siteseal'>
              <script
                async
                type='text/javascript'
                src='https://seal.godaddy.com/getSeal?sealID=4EoD4LpoaNqS9Kn4VydonuEwLZnJaQJk0eJZU99KyNUyTY6PImcTF1v6yyn6'></script>
            </span>
            <h6> Terms and conditions </h6>
            <h6> Privacy policy </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
