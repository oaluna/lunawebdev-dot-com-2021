import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './servicesSection.css';
import './components.css';

import SvgIcons from './SvgIcons.js';

export default class Marketing extends Component {
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
              <div className='socialPost'>
                <div className='socialPost3D' />
                <div className='socialProfile'>
                  {' '}
                  <SvgIcons
                    style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                    dimension='25px'
                    iconName='user'
                    fillColor='rgba(240, 246, 255, 1)'
                  />{' '}
                </div>
                <div className='socialImageContainer'>
                  <SvgIcons
                    style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                    dimension='60px'
                    iconName='photo'
                    fillColor='rgb(240, 246, 255)'
                  />
                </div>
                <div className='socialAction socialLike'>
                  {' '}
                  <SvgIcons
                    style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                    dimension='12px'
                    iconName='heart'
                    fillColor='rgb(240, 246, 255)'
                  />{' '}
                </div>
                <div className='socialAction socialComment'>
                  {' '}
                  <SvgIcons
                    style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                    dimension='12px'
                    iconName='comment'
                    fillColor='rgb(240, 246, 255)'
                  />{' '}
                </div>
                <div className='socialAction socialShare'>
                  {' '}
                  <SvgIcons
                    style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                    dimension='12px'
                    iconName='send'
                    fillColor='rgb(240, 246, 255)'
                  />{' '}
                </div>
              </div>
              <div className='serviceName'>
                <h5> Advertising </h5>
                <h1>Marketing </h1>
              </div>
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
                  iconName='influencer'
                  fillColor='rgb(240, 246, 255)'
                />
                <h3> Client Selection </h3>
                <p>
                  {' '}
                  I do not discriminate a client based on gender, identity,
                  ethnicity, religious background, nor will I perpeptuate any
                  discrimination. Period.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='management'
                  fillColor='rgb(240, 246, 255)'
                />
                <h3>Campaign Management</h3>
                <p>
                  {' '}
                  I can manage the performance of your website and provide
                  regular reports regarding web traffic, security, performance,
                  etc.
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='videoEdit'
                  fillColor='rgb(240, 246, 255)'
                />
                <h3>Quality Content</h3>
                <p>
                  {' '}
                  My clients do their best to visualize the content that follows
                  the guidelines I provide.{' '}
                </p>
              </div>
              <div className='serviceDetailsCard'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='analytics'
                  fillColor='rgb(240, 246, 255)'
                />
                <h3>Campaign Reporting</h3>
                <p>
                  {' '}
                  Your campaign results will be collected in real time and at
                  the end of a determined period you will receive a full report
                  of the content posted and relative statistics, or even access
                  the data yourself if you like.
                </p>
              </div>

              <div className='serviceDetailsCard serviceDetailsCardLast'>
                <SvgIcons
                  style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                  dimension='50px'
                  iconName='heartMessage'
                  fillColor='rgb(240, 246, 255)'
                />
                <h3>Can't Find What You Are Looking For?</h3>
                <p> Get in touch and let me know what you need. </p>
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
              fillColor='rgb(240, 246, 255)'
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
              fillColor='rgb(240, 246, 255)'
            />
          </div>
        </div>
      </div>
    );
  }
}
