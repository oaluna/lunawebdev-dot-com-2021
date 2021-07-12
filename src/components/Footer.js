import React from 'react';

import SvgIcons from './SvgIcons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faTwitter,
  faDev,
  faMedium
} from '@fortawesome/free-brands-svg-icons';
import './pages.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerContent'>

        <div className='footerFirstRow'>
          <Link to={'/'} className='footerLogo'>
            <SvgIcons dimension='400px' iconName='oscarArmandoLunaLogo' className="oscarArmandoLunaLogo" />
          </Link>
          <div className='socialBox'>
            <a href='https://www.medium.com/@oaluna' className='socialItem'>
              <FontAwesomeIcon
                icon={faMedium}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
            <a href='https://www.dev.to/oaluna' className='socialItem'>
              <FontAwesomeIcon
                icon={faDev}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
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
            <a href='https://www.twitter.com/LunaWebDev' className='socialItem'>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: 'rgb(240, 248, 255)', fontSize: '30px' }}
              />
            </a>
          </div>
        </div>
        <div className='footerMainMenu'>

            <Link to='/'><h5>Home</h5></Link>

            <Link to='/Projects'><h5>Case History</h5></Link>


            <Link to='/Services'><h5>Services</h5></Link>


            <Link to='/Contact'><h5>Contacts</h5></Link>


            <Link to='/AboutMe'><h5>About Me</h5></Link>

        </div>

        <div className='footerEnd'>
          <p>&copy;2021 by Oscar Armando Luna, All rights reserved</p>
          <div className='footerEndMenu'>
            <span id='siteseal' style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: '0px 25px', padding: '0px 25px'}}>
              <script
                async
                type='text/javascript'
                src='https://seal.godaddy.com/getSeal?sealID=4EoD4LpoaNqS9Kn4VydonuEwLZnJaQJk0eJZU99KyNUyTY6PImcTF1v6yyn6'></script>
            </span>
            <p> {' '} Terms and conditions {' '}</p><br />
            <p>{' '} Privacy policy {' '}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
