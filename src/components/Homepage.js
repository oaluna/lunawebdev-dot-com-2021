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
            <h1 style={{ display: 'flex', flexDirection: 'column',width: '50vw' }}>
              {' '}
              <br />
              Hello! I'm Oscar,<br />
              and I'm a front-end developer from San Francisco
            </h1>
            <br />
            <br />
            <h3 className='siteSubtitle' style={{width: '50vw', marginLeft: '-30vw', marginTop: '50vh'}}>
              {' '}
              I create, deploy, and maintain web applications. I am also a writer for Medium. I am currently in search of work opportunities.
            </h3>
          </div>

          <div className='socialHeaderCallToAction'>
            <Link to={'/Contact'}>
              <button
                className='simpleBtn simpleBtnDark'
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  bottom: '-20vh',
                  left: '0vw',
                  width: '100%'
                }}>
                <h4
                  style={{
                    fontSize: '24px',
                    fontWeight: '300',
                    padding: '5px 75px'
                  }}>
                  Get Started
                </h4>
              </button>
            </Link>

            <p className='socialHeaderCallToActionHeader'>
              {' '}
              Schedule a FREE Virtual Consultation
            </p>

            <br />
            <br />
          </div>

          <div className='socialManagement' style={{marginTop: '20vh'}}>
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
        <div className="brandsContainer" style={{position: 'relative', marginTop: '125vh'}}>
        <div className='brandsOverlay' style={{ zIndex: -1 }}>
          </div>
        <div className="brandsContent">
          <div className="brandsTitle">
            <h1>Technologies I work with:</h1>
          </div>

          <div className="brandsList">
            <img aria-labelledby="ReactJS" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="ReactJS"/>
            <img aria-labelledby="NextJS" src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg" alt="NextJS"/>
            <img aria-labelledby="Apollo" src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg" alt="Apollo"/>
            <img aria-labelledby="GraphQL" src="https://cdn.worldvectorlogo.com/logos/graphql.svg" alt="GraphQL"/>
            <img aria-labelledby="NodeJS" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="NodeJS"/>
            <img aria-labelledby="Redux" src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux"/>
            <img aria-labelledby="Sass" src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" alt="Sass"/>
            <img aria-labelledby="MongoDB" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"/>
            <img aria-labelledby="Amazon Web Services" src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="Amazon Web Services" />
            <img aria-labelledby="JSONWebToken" src="https://cdn.worldvectorlogo.com/logos/jwtio-json-web-token.svg" alt="JSONWebToken" />
            <img aria-labelledby="NPM" src="https://cdn.worldvectorlogo.com/logos/npm.svg" alt="NPM" />
            <img aria-labelledby="Figma" src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="Figma" />
            <img aria-labelledby="Gatsby" src="https://cdn.worldvectorlogo.com/logos/gatsby.svg" alt="Gatsby" />
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
              <br />
              <strong>
                Using a mobile device? Swipe to see more previews.
              </strong>
            </h5>

            <ViewCards />
          </div>

          <div className='fullSectionContent limitWidthContent thirdBottom'>
            <div className='siteInfoHomepage'>
              <div className='siteTitleHomepage'>
                <h5> Expertise </h5>
                <h2>I am a full-stack web developer with 2 years of experience
                    creating web applications using JavaScript and integrated
                    JavaScript libraries/frameworks.</h2>
                <br />
                <div className='siteTextHomepage'>
                  <p>
                    {' '}
                    I can design, build and
                    launch your vision at scale. Whether you're a Fortune 500
                    company, a startup or even a mom-and-pop shop - I give my
                    clients the technical prowess they need to succeed.{' '}
                  </p>
                </div>
              </div>

            <div className='siteButtonsHomepage'>
              <Link to={'/Projects'}>
                <button className='circleBtn circleBtnDark'>
                  <span className='circleBtnIcon'>+</span>
                  <h5
                   >
                    See Case History
                  </h5>
                </button>
              </Link>
              <Link to={'/Contact'}>
                <button className='simpleBtn simpleBtnDark'>
                  <h4 style={{ padding: '8px 100px', borderRadius: '50%' }}>
                    Contact
                  </h4>
                </button>
              </Link>
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
            </div>

        <div className='fullSection'>
          <div className='fullSectionContent limitWidthContent'></div>
        </div>
        <div className='fullSection'>
          <div className='fullSectionContent limitWidthContent'>
            <h1 className='bigTitle'> Services </h1>
            <ServicesSection />
          </div>
          <div className='fullSectionContent limitWidthContent thirdBottom'>
            <div className='siteInfo'>
              <div className='siteTitle'>
                <FontAwesomeIcon icon={faGlobe} className='icon' style={{width: '35px', height: '35px'}} />
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
              <div className='siteButtons' style={{ alignItems: 'flex-start' }}>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h5 style={{ color: '#f0f8ff' }}>See Case History</h5>
                  </button>
                </Link>
                <Link to={'/Services'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h5 style={{ color: '#f0f8ff' }}>See Services</h5>
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
