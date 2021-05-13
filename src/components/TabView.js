import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SvgIcons from './SvgIcons.js';

import './tabView.css';
import './components.css';

export default class TabView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
      imagePosStyle: null,
      profilePosStyle: null,
      containerPosStyle: null
    };

    this.switchTab = this.switchTab.bind(this);
  }

  componentDidMount() {
    this.switchTab(0);
  }

  switchTab(currentTab) {
    let imagePos, profilePos, containerPos;

    let previousTab = this.state.currentTab;

    if (currentTab === 1) {
      imagePos = {
        width: '80%',
        height: '200px',
        top: '100px',
        left: '10%'
      };
      profilePos = {
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        top: '40px',
        left: '10%',
        background: '#ffb658',
        filter: 'none'
      };
      if (previousTab === 2) {
        containerPos = {
          animation: 'from2to1 .4s ease forwards'
        };
      }
      if (previousTab === 3) {
        containerPos = {
          animation: 'from3to1 .4s ease forwards'
        };
      }
    }

    if (currentTab === 2) {
      imagePos = {
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0%'
      };
      profilePos = {
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        top: '40px',
        left: '10%',
        background: '#ffb658',
        filter: 'none'
      };
      if (previousTab === 1) {
        containerPos = {
          animation: 'from1to2 .4s ease forwards'
        };
      }
      if (previousTab === 3) {
        containerPos = {
          animation: 'from3to2 .4s ease forwards'
        };
      }
    }

    if (currentTab === 3) {
      imagePos = {
        width: '80%',
        height: '5px',
        top: '75px',
        left: '10%'
      };
      profilePos = {
        width: '20px',
        height: '20px',
        borderRadius: '40px',
        top: '67px',
        left: '60%',
        background: 'rgba(189, 202, 251, 1)',
        filter: 'drop-shadow(0px 4px 6px rgba(189, 202, 251, 1))',
        zIndex: 320
      };
      if (previousTab === 1) {
        containerPos = {
          animation: 'from1to3 .4s ease forwards'
        };
      }
      if (previousTab === 2) {
        containerPos = {
          animation: 'from2to3 .4s ease forwards'
        };
      }
    }

    this.setState({
      currentTab: currentTab,
      imagePosStyle: imagePos,
      profilePosStyle: profilePos,
      containerPosStyle: containerPos
    });
  }

  render() {
    return (
      <div className='tabView'>
        <div className='tabViewDisplayLeft'>
          <div
            className={
              this.state.currentTab === 1
                ? 'tabContainer tabOpen'
                : 'tabContainer tabClosed'
            }
            onClick={() => this.switchTab(1)}>
            <div className='tabLabel'>
              <h5> Branded Content </h5>{' '}
              <button className='circleBtn circleBtnDark'>
                <span className='circleBtnIcon'>+</span>
              </button>
            </div>
            <div className='tabContent'>
              <h2> What I Do </h2>
              <p>
                {' '}
                I develop and deploy web applications, as well as provide free
                web counseling for those wishing to either create a web
                application for their business or require new features in an
                existing application.{' '}
              </p>
              <Link to={'/Contact'}>
                <button className='circleBtn circleBtnDark'>
                  <span className='circleBtnIcon'>+</span>
                  <h4> KNOW MORE </h4>
                </button>
              </Link>
            </div>
          </div>

          <div
            className={
              this.state.currentTab === 2
                ? 'tabContainer tabOpen'
                : 'tabContainer tabClosed'
            }
            onClick={() => this.switchTab(2)}>
            <div className='tabLabel'>
              <h5> Business Insights </h5>{' '}
              <button className='circleBtn circleBtnDark'>
                <span className='circleBtnIcon'>+</span>
              </button>
            </div>
            <div className='tabContent'>
              <h2> Real-time metrics </h2>
              <p>
                {' '}
                I can provide data and analytics to measure campaign success at
                each distribution touchpoint to optimize and redirect efforts if
                necessary.{' '}
              </p>
              <Link to={'/Contact'}>
                <button className='circleBtn circleBtnDark'>
                  <span className='circleBtnIcon'>+</span>
                  <h4> KNOW MORE </h4>
                </button>
              </Link>
            </div>
          </div>

          <div
            className={
              this.state.currentTab === 3
                ? 'tabContainer tabOpen'
                : 'tabContainer tabClosed'
            }
            onClick={() => this.switchTab(3)}>
            <div className='tabLabel'>
              <h5> Full Flexibility </h5>{' '}
              <button className='circleBtn circleBtnDark'>
                <span className='circleBtnIcon'>+</span>
              </button>
            </div>
            <div className='tabContent'>
              <h2> Tailored to you </h2>
              <p>
                {' '}
                I establish an operational plan that adapts not only to your
                business but is creatively tailored around your budget to
                maximize results.{' '}
              </p>
              <Link to={'/Contact'}>
                <button className='circleBtn circleBtnDark'>
                  <span className='circleBtnIcon'>+</span>
                  <h4> KNOW MORE </h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='tabViewDisplayRight'>
          <div className='phoneContainer' style={this.state.containerPosStyle}>
            <div className='phone'>
              <div
                className='phoneContent'
                style={this.state.contentPosStyle}></div>
              <div className='socialMedia'>
                <div className='instaPost'>
                  <div
                    className='instaProfile'
                    style={this.state.profilePosStyle}>
                    <SvgIcons
                      style={{
                        textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                      }}
                      dimension='25px'
                      iconName='user'
                      fillColor='rgba(189, 202, 251, 1)'
                    />
                  </div>
                  <div className='instaBottomButtons'>
                    <div className='instaLike'>
                      <SvgIcons
                        style={{
                          textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                        }}
                        dimension='12px'
                        iconName='heart'
                        fillColor='rgba(189, 202, 251, 1)'
                      />
                    </div>
                    <div className='instaComment'>
                      <SvgIcons
                        style={{
                          textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                        }}
                        dimension='12px'
                        iconName='comment'
                        fillColor='rgba(189, 202, 251, 1)'
                      />
                    </div>
                    <div className='instaShare'>
                      <SvgIcons
                        style={{
                          textShadow: '0px, 0px, 5px, rgb(240, 248, 255)'
                        }}
                        dimension='12px'
                        iconName='send'
                        fillColor='rgba(189, 202, 251, 1)'
                      />
                    </div>
                  </div>
                  <div className='instaImage' style={this.state.imagePosStyle}>
                    <div
                      className={
                        this.state.currentTab === 2
                          ? 'graph graphActive'
                          : 'graph'
                      }>
                      <div className='graphLine'></div>
                      <div className='graphLine'></div>
                      <div className='graphLine'></div>
                      <div className='graphLine'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const TabView = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  min-height: 600px;
  @media only screen and (min-width: 300px) and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
`;
const TabViewDisplayLeft = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  grid-column: 1/2;
  grid-row: 1/2;
  flex-direction: column;
  @media only screen and (min-width: 300px) and (max-width: 900px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;
const TabViewDisplayRight = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 5;
  grid-column: 2/3;
  grid-row: 1/2;
  align-items: center;
  @media only screen and (min-width: 300px) and (max-width: 900px) {
    grid-column: 1/2;
    grid-row: 1/2;
    max-height: 200px;
  }
`;
const TabContainer = styled.div`
  width: 100%;
  overflow: hidden;
  transition: all 0.6s ease;
  margin: 15px 0px;
  cursor: pointer;
`;

const TabOpen = styled.div`
  height: 300px;
  @media only screen and (min-width: 300px) and (max-width: 900px) {
    height: 230px;
  }
`;

const TabClosed = styled.div`
  height: 50px;
`;

const TabLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabContent = styled.div`
  & h2 {
    padding-bottom: 15px;
  }
  & p {
    padding-bottom: 15px;
  }
`;
const PhoneContainer = styled.div`
  width: 200px;
  height: 340px;
  padding: 30px;
  animation: none;
  margin-top: -50px;
  position: relative;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg) translateZ(-25px)
    scale(1.4);
  transition: all 0.4s ease;
  filter: drop-shadow(12px 12px 15px rgb(212, 221, 250, 0.33));
  margin-left: 200px;
`;
