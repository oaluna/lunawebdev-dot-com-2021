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
            <h1
              className='siteTitle'
              style={{ display: 'flex', flexDirection: 'column' }}>
              {' '}
              <br />
              Hello! I'm Oscar,
              <br />
              and I'm a front-end developer from San Francisco
            </h1>
            <br />
            <br />
            <h6 style={{ textAlign: 'left', lineHeight: 1.2, width: '40vw' }}>
              {' '}
              I create, deploy, and maintain web applications. I am also a
              writer for Medium. I am currently in search of work opportunities.
<<<<<<< HEAD
            </h3>
=======
            </h6>
>>>>>>> dc2268ff74f2fb54807c4ea514f350ab759681c3
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
          <div className='socialHeaderCallToAction'>
            <Link to={'/Contact'}>
              <button
                className='simpleBtn simpleBtnDark'
                style={{
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


            <br />
            <br />
          </div>
<p
              style={{ position: 'relative', marginBottom: '10vh' }}
              className='socialHeaderCallToActionHeader'>
              {' '}
              Schedule a FREE Virtual Consultation
            </p>

          <div className='socialManagement'>
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
        <div
          className='brandsContainer'
          style={{ position: 'relative', marginTop: '125vh' }}>
          <div className='brandsOverlay' style={{ zIndex: -1 }}></div>
          <div className='brandsContent'>
            <div className='brandsTitle'>
<<<<<<< HEAD
              <h1>Technologies I work with:</h1>
            </div>

            <div className='brandsList'>
=======
              <h3 style={{textAlign: 'center'}}>Technologies I work with:</h3>
            </div>

            <div className='brandsList' style={{margin: '25px'}}>
>>>>>>> dc2268ff74f2fb54807c4ea514f350ab759681c3
              <img
                aria-labelledby='ReactJS'
                src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
                alt='ReactJS'
              />
              <img
                aria-labelledby='NextJS'
<<<<<<< HEAD
                src='../assets/nextjs-icon.svg'
=======
                src='https://iconape.com/wp-content/files/gf/82292/svg/nextjs-3.svg'
>>>>>>> dc2268ff74f2fb54807c4ea514f350ab759681c3
                alt='NextJS'
              />
              <img
                aria-labelledby='Apollo'
                src='https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg'
                alt='Apollo'
              />
              <img
                aria-labelledby='GraphQL'
                src='https://cdn.worldvectorlogo.com/logos/graphql.svg'
                alt='GraphQL'
              />
              <img
                aria-labelledby='NodeJS'
                src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
                alt='NodeJS'
              />
              <img
                aria-labelledby='Redux'
                src='https://cdn.worldvectorlogo.com/logos/redux.svg'
                alt='Redux'
              />
              <img
                aria-labelledby='Sass'
                src='https://cdn.worldvectorlogo.com/logos/sass-1.svg'
                alt='Sass'
              />
              <img
                aria-labelledby='MongoDB'
                src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'
              />
              <img
                aria-labelledby='Amazon Web Services'
                src='https://cdn.worldvectorlogo.com/logos/aws-2.svg'
                alt='Amazon Web Services'
              />
              <img
                aria-labelledby='JSONWebToken'
                src='https://cdn.worldvectorlogo.com/logos/jwtio-json-web-token.svg'
                alt='JSONWebToken'
              />
              <img
                aria-labelledby='NPM'
                src='https://cdn.worldvectorlogo.com/logos/npm.svg'
                alt='NPM'
              />
              <img
                aria-labelledby='Figma'
                src='https://cdn.worldvectorlogo.com/logos/figma-1.svg'
                alt='Figma'
              />
              <img
                aria-labelledby='Gatsby'
                src='https://cdn.worldvectorlogo.com/logos/gatsby.svg'
                alt='Gatsby'
              />
            </div>
          </div>
        </div>
        <div className='fullSection'>
          <div className='fullSectionContent limitWidthContent'>
            <h3 className='bigTitle'>Projects</h3>
            <br />
            <h6 style={{ padding: '45px', textAlign: 'center' }}>
              Previous projects I have created, as well as links to their demos
              and repositories.
              <br />
              <br />
              <strong>
                Using a mobile device? Swipe to see more previews.
              </strong>
            </h6>

            <ViewCards />
          </div>

          <div className='fullSectionContent limitWidthContent thirdBottom'>
            <div className='siteInfoHomepage'>
              <div className='siteTitleHomepage'>
<<<<<<< HEAD
                <h5> Expertise </h5>
                <h2>
                  I am a full-stack web developer with 2 years of experience
                  creating web applications using JavaScript and integrated
                  JavaScript libraries/frameworks.
                </h2>
=======
                <p style={{fontSize: '25px', padding: '5px 0px 15px 0px'}}> <strong>EXPERTISE</strong> </p>
                <h6 style={{letterSpacing: '-1px', width: '45vw', fontWeight: 500, textAlign: 'left', marginLeft: '0vw', lineHeight: 1.1}}>
                  I'm a full-stack web developer with 2 years of experience in
                  web development using JavaScript and integrated
                  JavaScript libraries/frameworks.
                </h6>
>>>>>>> dc2268ff74f2fb54807c4ea514f350ab759681c3
                <br />
                <div className='siteTextHomepage'>
                  <p style={{letterSpacing: '1px', fontSize: '20px', fontWeight: 100, left: '-2vw', width: '40vw'}}>
                    {' '}
                    I can design, build and launch your vision at scale. Whether
                    you're a Fortune 500 company, a startup or even a
                    mom-and-pop shop - I give my clients the technical prowess
                    they need to succeed.{' '}
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              <div className='siteButtonsHomepage'>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h5>See Case History</h5>
=======
              <div className='siteButtonsHomepage' style={{margin: 'auto'}}>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h6>See Case History</h6>
>>>>>>> dc2268ff74f2fb54807c4ea514f350ab759681c3
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
            <h3 className='bigTitle'> Services </h3>
            <ServicesSection />
          </div>
          <div className='fullSectionContent limitWidthContent thirdBottom'>
            <div className='siteInfo'>
              <div className='siteTitle'>
                <FontAwesomeIcon
                  icon={faGlobe}
                  className='icon'
                  style={{ width: '35px', height: '35px' }}
                />
<<<<<<< HEAD
                <h5> Full Package </h5>
                <h2> 360° Digital Presence </h2>
=======
                <p style={{fontSize: '25px', padding: '5px 0px 15px 0px'}}> <strong>FULL PACKAGE</strong> </p>
                <h5 style={{lineHeight: 1}}> 360° Digital Presence </h5>
>>>>>>> dc2268ff74f2fb54807c4ea514f350ab759681c3
              </div>
              <div className='siteText'>
                <p style={{fontSize: '25px', left: '-3vw', textAlign: 'left', width: '30vw', lineHeight: 1.1}}>
                  {' '}
                  I will help you establish a network that fits your brand,
                  increase your visits and/or sales with a web application
                  containing stunning, responsive UI, and free up your time by
                  managing your maintenance after deployment.{' '}
                </p>
              </div>
              <div className='siteButtons' style={{ alignItems: 'flex-start', padding: 'auto', lineHeight: 1.1 }}>
                <Link to={'/Projects'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h6 style={{ color: '#f0f8ff' }}>See Case History</h6>
                  </button>
                </Link>
                <Link to={'/Services'}>
                  <button className='circleBtn circleBtnDark'>
                    <span className='circleBtnIcon'>+</span>
                    <h6 style={{ color: '#f0f8ff' }}>See Services</h6>
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
