import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './servicesSection.css';
import './components.css';

import SvgIcons from './SvgIcons.js';

export default class SocialMediaManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='servicePage'>
        <div className='fullSection'>
          <div
            to={'/SocialMediaManagement'}
            className='socialPostContainer limitWidthContent transparentBlueGradientBack'>
            <div className={'socialPostFull'}>
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
                      fillColor='fff'
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
                      fillColor='fff'
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
                      fillColor='fff'
                    />{' '}
                  </div>
                </div>
              </div>
              <div className='serviceName'>
                <h5> Server/Database </h5>
                <h1> Management </h1>
              </div>
              <button className='circleBtn circleBtnLight plusButton'>
                <span className='circleBtnIcon'>+</span>
              </button>
            </div>
          </div>
        </div>

        <div className='fullSection'>
          <div className='fullSectionContent limitWidthContent'>
            <div className='serviceDetailsGrid'>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='design'
                  fillColor='rgba(189, 202, 251, 1)'
                />
                <h3>Branding</h3>
                <p>
                  {' '}
                  Your online content should be instantly recognizable and be an
                  extension of your brand.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='videoEdit'
                  fillColor='rgba(189, 202, 251, 1)'
                />
                <h3>Original Content</h3>
                <p>
                  {' '}
                  Spamming the same logo on stock images does not cut it
                  anymore.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='quality'
                  fillColor='rgba(189, 202, 251, 1)'
                />
                <h3>Quality Posts</h3>
                <p>
                  {' '}
                  I offer a range of possibilities for creating contents for
                  your social media pages, curated videos/images, unique tags,
                  client-created content and much more.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='analytics'
                  fillColor='rgba(189, 202, 251, 1)'
                />
                <h3> Analytics</h3>
                <p>
                  {' '}
                  Every result needs to be accounted for, and there's nothing
                  better for that than a well organized interactions report.
                </p>
              </div>

              <div className='serviceDetailsCard serviceDetailsCardLast'>
                <h3>Can't Find What Your Are Looking For?</h3>
                <p> Get in touch and let us know what you need. </p>
                <Link to={'/Contact'}>
                  <button className='simpleBtn simpleBtnDark'>
                    <h4> CONTACT </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='backSvg backRightTop'>
            <SvgIcons
              style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
              dimension='200px'
              iconName='star'
              fillColor='rgba(189, 202, 251, 1)'
            />
          </div>
          <div
            className='backSvg noShowTablet'
            style={{
              bottom: '5%',
              left: '15%',
              transform: 'rotate(-15deg)'
            }}>
            <SvgIcons
              style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
              dimension='250px'
              iconName='ideaGear'
              fillColor='rgba(189, 202, 251, 1)'
            />
          </div>
        </div>
      </div>
    );
  }
}
