import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './servicesSection.css';
import './components.css';

import SvgIcons from './SvgIcons.js';

export default class DigitalCreations extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='servicePage'>
        <div className='fullSection'>
          <div className='socialPostContainer limitWidthContent transparentBlueGradientBack'>
            <div className='socialPostFull'>
              <div className='digitalCreations'>
                <div className='digitalPc'>
                  <div className='searchBox'>
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='12px'
                      iconName='web'
                      fillColor='rgba(252, 197, 215, 1)'
                    />
                  </div>
                  <div className='webBox'>
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='60px'
                      iconName='photo'
                      fillColor='rgba(252, 197, 215, 1)'
                    />
                  </div>
                </div>
                <div className='digitalPhone'>
                  <div className='phoneBox'>
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='60px'
                      iconName='appstore'
                      fillColor='rgba(252, 197, 215, 1)'
                      strokeColor='rgb(240, 248, 255)'
                    />
                  </div>
                </div>
              </div>
              <div className='serviceName'>
                <h5> Websites & more... </h5>
                <h1> Digital Creations </h1>
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
                  iconName='domain'
                  fillColor='rgba(252, 197, 215, 1)'
                />
                <h3>Domain Selection</h3>
                <p>
                  {' '}
                  I will help you every step of the way, from the initial
                  consultation to the choosing of your domain name.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='design'
                  fillColor='rgba(252, 197, 215, 1)'
                />
                <h3>Branding & Design</h3>
                <p>
                  {' '}
                  I will assist you in moving your brand to the web, keeping
                  your web application up to date, and even adding new features
                  or optimizing existing ones.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='responsive'
                  fillColor='rgba(252, 197, 215, 1)'
                />
                <h3>Responsive Content</h3>
                <p>
                  {' '}
                  Owning a website is not enough; your website should provide a
                  memorable experience with each page.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='database'
                  fillColor='rgba(252, 197, 215, 1)'
                />
                <h3>Database management</h3>
                <p>
                  {' '}
                  If your web presence is in need of a place to store digital
                  content and client informations, I got you covered.{' '}
                </p>
              </div>
              <div className='serviceDetailsCard serviceDetailsCardLast'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='heartMessage'
                  fillColor='rgba(252, 197, 215, 1)'
                />
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
              fillColor='rgba(0,0,0,0.1)'
            />
          </div>
          <div
            className='backSvg noShowTablet'
            style={{
              bottom: '5%',
              left: '65%',
              transform: 'rotate(-15deg) scale(2,2)'
            }}>
            <SvgIcons
              style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
              dimension='250px'
              iconName='ideaGear'
              fillColor='rgba(252, 197, 215, 1)'
            />
          </div>
        </div>
      </div>
    );
  }
}
