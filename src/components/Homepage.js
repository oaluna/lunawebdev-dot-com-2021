import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import VideoSection from './VideoSection.js';
import ServicesSection from './ServicesSection.js';
import ViewCards from './ViewCards.js';
import SvgIcons from './SvgIcons.js';
import ContactForm from './ContactForm.js';

import './pages.css';
import './siteInfo.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='homepage'>
        <div className='fullSection socialHeader'>
          <div className='socialHeaderTitle'>
            <h1>
              {' '}
              The optimal solution for your web development
              <span style={{ fontWeight: '900' }}> needs</span>{' '}
            </h1>
            <h6>
              {' '}
              Web development services, maintenance and web application
              deployment.
            </h6>
          </div>
          <div
            className='tokenModule'
            style={{ color: 'rgb(240, 248, 255)', top: '85vh' }}>
            <div className='token firsttoken'>
              <div className='tokenTop'>
                <h2> 1.7x </h2>
              </div>
              <div className='tokenBottom'>
                <h6> Engagement With Content. </h6>
              </div>
            </div>
            <div
              className='token secondtoken'
              style={{ borderColor: 'rgb(240, 248, 255)' }}>
              <div className='tokenTop'>
                <h2> 69 </h2>
              </div>
              <div className='tokenBottom'>
                <h6> Completed projects to date </h6>
              </div>
            </div>
            <div className='token thirdtoken'>
              <div className='tokenTop'>
                <h2> 1B+ </h2>
              </div>
              <div className='tokenBottom'>
                <h6> Prior Clients </h6>
              </div>
            </div>
          </div>
          <div className='socialHeaderCallToAction' style={{ top: '75vh' }}>
            <Link to={'/Contact'}>
              <button className='simpleBtn simpleBtnDark'>
                <h4>GET IN TOUCH</h4>
              </button>
            </Link>
            <Link to={'/Contact'}>
              <h6> Schedule a FREE Virtual Consultation</h6>
            </Link>
          </div>
          <div className='socialManagement'>
            <div className='socialManagementContent'>
              <div className='iconBox instaBox'>
                {' '}
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='100px'
                  iconName='instagram'
                  fillColor='rgb(240, 248, 255)'
                />{' '}
              </div>
              <div className='iconBox tiktokBox'>
                {' '}
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='100px'
                  iconName='tiktok'
                  fillColor='rgb(240, 248, 255)'
                />{' '}
              </div>
              <div className='iconBox youtubeBox'>
                {' '}
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='100px'
                  iconName='youtube'
                  fillColor='rgb(240, 248, 255)'
                />{' '}
              </div>
              <div className='iconBox facebookBox'>
                {' '}
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='100px'
                  iconName='facebook'
                  fillColor='rgb(240, 248, 255)'
                />{' '}
              </div>
            </div>
          </div>
        </div>

        <div className='fullSection'>
          <div className='fullSectionContent limitWidthContent'>
            <h1 className='bigTitle'> Projects </h1>
            <br />
            <h3 style={{ margin: '15px' }}>
              Previous projects I have created, as well as links to their demos
              and repositories.
            </h3>
            <ViewCards />
          </div>
          <div className='fullSectionContent limitWidthContent thirdBottom'>
            <div className='siteInfo'>
              <div className='siteTitle'>
                <h5 style={{ fontWeight: 700, marginTop: '-4vh' }}>
                  {' '}
                  Expertise{' '}
                </h5>
                <p style={{ lineHeight: 1.5 }}>
                  {' '}
                  I am a full-stack web developer with 2 years of experience
                  creating web applications using JavaScript and integrated
                  JavaScript libraries/frameworks.{' '}
                </p>
              </div>
              <h5
                style={{
                  fontWeight: 700,
                  width: '100%',
                  position: 'relative',
                  margin: '-18vh auto 0vh 15vw'
                }}>
                {' '}
                My Promise{' '}
              </h5>
              <div className='siteText'>
                <p style={{ marginTop: '2vh', lineHeight: 1.5, width: '30vw' }}>
                  {' '}
                  I can design, build and launch your vision at scale. Whether
                  you're a Fortune 500, a startup or even a local business - I
                  give my clients the technical prowess they need to succeed.{' '}
                </p>
              </div>
              <div className='siteButtons' style={{ left: '5vw' }}>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h4> SEE CASE HISTORY</h4>
                  </button>
                </Link>
                <Link to={'/Contact'}>
                  <button className='simpleBtn simpleBtnDark'>
                    <h4> CONTACT </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='backSvg backRightBottom'>
            <SvgIcons
              style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
              dimension='600px'
              iconName='star'
              fillColor='rgb(240, 248, 255)'
            />
          </div>
        </div>

        <div className='fullSection'>
          <div className='fullSectionContent limitWidthContent'>
            <h1 className='bigTitle'> Services </h1>
            <ServicesSection />
          </div>
          <div className='fullSectionContent limitWidthContent thirdBottom'>
            <div className='siteInfo'>
              <div className='siteTitle' style={{ lineHeight: 1.5 }}>
                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '48px' }} />
                <h5> Full Package </h5>
                <h2> 360° Digital Presence </h2>
              </div>
              <div
                className='siteText'
                style={{ width: '30vw', lineHeight: 1.4 }}>
                <p>
                  {' '}
                  I will help you establish a network that fits your brand,
                  increase your visits and/or sales with a web application
                  containing stunning, responsive UI, and free up your time by
                  managing your maintenance after deployment.{' '}
                </p>
              </div>
              <div className='siteButtons'>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h4> SEE CASE HISTORY </h4>
                  </button>
                </Link>
                <Link to={'/Services'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h4> SEE SERVICES </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='backSvg backLeftBottom noShowTablet'>
            <SvgIcons
              style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
              dimension='400px'
              iconName='heartMessage'
              fillColor='rgb(240, 248, 255)'
            />
          </div>
        </div>
        <VideoSection />
        <ContactForm />
      </div>
    );
  }
}
