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
            needs.
            </h1>
            <br />
            <br />
            <h3
              className='siteSubtitle'
              style={{
                fontSize: '24px',
                fontWeight: 100,
                textAlign: 'left'
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
          <div className='socialHeaderCallToAction' style={{ maxWidth: '100vw', width: '100%', top: '85vh' }}>
            <Link to={'/Contact'}>
              <button className='simpleBtn simpleBtnDark' style={{ position: 'absolute', top: '-20vh', left: '5vw', width: '200px', padding: '15px 10px'}}>
                <h3>Get Started</h3>
              </button>
            </Link>
            <Link to={'/Contact'} style={{position: 'absolute', left: '5vw', top: '-27vh'}}>
              <p> Schedule a FREE Virtual Consultation</p>
            </Link>
            <br />
            <br />
          </div>

          <div className='socialManagement' style={{ top: '5vh', left: '25vw' }}>
            <div className='socialManagementContent'>
            <div className='iconBox instaBox'>
                    {' '}
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='100px'
                      iconName='instagram'
                      fillColor='#fff'
                    />{' '}
                  </div>
                  <div className='iconBox tiktokBox'>
                    {' '}
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='100px'
                      iconName='tiktok'
                      fillColor='#fff'
                    />{' '}
                  </div>
                  <div className='iconBox youtubeBox'>
                    {' '}
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='100px'
                      iconName='youtube'
                      fillColor='#fff'
                    />{' '}
                  </div>
                  <div className='iconBox facebookBox'>
                    {' '}
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='100px'
                      iconName='facebook'
                      fillColor='#fff'
                    />{' '}
                  </div>
            </div>
          </div>
        </div>

        <div className='fullSection'>
          <div className='fullSectionContent limitWidthContent'>
            <h1 className='bigTitle'>Projects</h1>
            <br />
            <h5 style={{ padding: '15px', textAlign: 'center' }}>
              Previous projects I have created, as well as links to their demos
              and repositories.
              <br />
              <strong>
                Using a mobile device? Swipe to see more previews.
              </strong>
            </h5>

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

                }}>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h5 style={{color: '#f0f8ff', padding: '25px'}}>See Case History</h5>
                  </button>
                </Link>
                <Link to={'/Contact'}>
                  <button className='simpleBtn simpleBtnDark'>
                    <h5 style={{padding: '15px'}}>Contact</h5>
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

  <div className="fullSection">
<div className="fullSectionContent limitWidthContent">

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
                <FontAwesomeIcon icon={faGlobe} className='icon' />
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
              <div className='siteButtons' >
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h5  style={{color: '#f0f8ff'}}>See Case History</h5>
                  </button>
                </Link>
                <Link to={'/Services'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h5 style={{color: '#f0f8ff'}} >See Services</h5>
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
