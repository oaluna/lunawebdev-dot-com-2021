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
              <br />
              The optimal solution for your web development
              <span style={{ fontWeight: 900 }}> needs</span>{' '}
            </h1>
            <br />
            <br />
            <h3
              className='siteSubtitle'
              style={{
                fontSize: '24px',
                fontWeight: 100,
                textAlign: 'center'
              }}>
              {' '}
              Web development services, maintenance and web application
              deployment.
            </h3>
          </div>
          <div
            className='tokenModule'
            style={{ color: 'rgb(240, 248, 255)', bottom: '0px' }}>
            <div className='token firsttoken'>
              <div className='tokenTop'>
                <h2>100%</h2>
              </div>
              <div className='tokenBottom'>
                <h6> Engagement With Content. </h6>
              </div>
            </div>
            <div
              className='token secondtoken'
              style={{ borderColor: 'rgb(240, 248, 255)' }}>
              <div className='tokenTop'>
                <h2>62</h2>
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
                <h6>Reasons to hire</h6>
              </div>
            </div>
          </div>
          <div className='socialHeaderCallToAction' style={{ top: '85vh' }}>
            <Link to={'/Contact'}>
              <button className='simpleBtn simpleBtnDark'>
                <h4>Get Started</h4>
              </button>
            </Link>
            <Link to={'/Contact'}>
              <p> Schedule a FREE Virtual Consultation</p>
            </Link>
            <br />
            <br />
          </div>

          <div className='socialManagement' style={{ top: '12vh' }}>
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
            <h1 className='bigTitle'>Projects</h1>
            <br />
            <h4>
              Previous projects I have created, as well as links to their demos
              and repositories.
            </h4>
            <p style={{ marginBottom: '30px' }}>
              Using a mobile device? Swipe to see more previews.
            </p>

            <ViewCards />
          </div>
          <div
            className='fullSectionContent limitWidthContent thirdBottom'
            style={{ textAlign: 'center' }}>
            <div className='siteInfoHomepage'>
              <div className='siteTitle expertise'>
                <h5 style={{ fontWeight: 700 }}> Expertise </h5>
                <br />
                <div className='siteText expertise'>
                  <p>
                    {' '}
                    I am a full-stack web developer with 2 years of experience
                    creating web applications using JavaScript and integrated
                    JavaScript libraries/frameworks.{' '}
                  </p>
                </div>
              </div>
              <div className='siteTitle promise'>
                <h5 style={{ fontWeight: 700 }}> My Promise </h5>
                <br />
                <div className='siteText promise'>
                  <p>
                    {' '}
                    I can design, build and launch your vision at scale. Whether
                    you're a Fortune 500, a startup or even a local business - I
                    give my clients the technical prowess they need to succeed.{' '}
                  </p>
                </div>
              </div>
              <div
                className='siteButtons'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0px 0px 0px 5vw',
                  padding: '25px'
                }}>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h4>See Case History</h4>
                  </button>
                </Link>
                <Link to={'/Contact'}>
                  <button className='simpleBtn simpleBtnDark'>
                    <h4>Contact</h4>
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
              <div className='siteTitle'>
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="icon"
                />
                <h5> Full Package </h5>
                <h2> 360° Digital Presence </h2>
              </div>
              <div className='siteText'>
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
                    <h4>See Case History</h4>
                  </button>
                </Link>
                <Link to={'/Services'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h4>See Services</h4>
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
