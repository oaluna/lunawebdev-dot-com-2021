import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './components.css';

export default class VideoSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openVideo() {
    console.log('clicked play button');
  }

  render() {
    return (
      <div className='videoSection'>
        <div className='videoSectionLeft'>
          <div className='tokenModule'>
            <div className='token firsttoken'>
              <div className='tokenTop'>
                <h2> 30+ </h2>
              </div>
              <div className='tokenBottom'>
                <h6> Tech books read so far </h6>
              </div>
            </div>
            <div className='token secondtoken'>
              <div className='tokenTop'>
                <h2> 100+ </h2>
              </div>
              <div className='tokenBottom'>
                <h6> Random thoughts had today </h6>
              </div>
            </div>
            <div className='token thirdtoken'>
              <div className='tokenTop'>
                <h2> 10k+ </h2>
              </div>
              <div className='tokenBottom'>
                <h6> Hours of learning. </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='videoOverlay'></div>
        {/* <img
          src='https://images.pexels.com/users/avatars/930404/space-space-885.jpeg'
          alt='earth as seen from space'
          style={{ width: '100vw' }}
        /> */}
        <video autoplay loop width='100%' height='auto'>
          <source
            src='https://www.facebook.com/528138817/videos/10158924246313818/'
            type='video/mp4'></source>
        </video>
        <div
          className='videoSectionRight'
          style={{
            maxHeight: '100%',
            height: '100%',
            width: '40vw',
            padding: '25px'
          }}>
          <div
            className='siteInfo'
            style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='siteTitle'>
              <h5> Live Events </h5>
              <br />
            </div>
            <br />
            <div className='siteText' style={{ height: '25vh' }}>
              <p> Coming soon! </p>
            </div>
            <div
              className='siteButtons'
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <Link to={'/Contact'}>
                <button className='circleBtn circleBtnDark'>
                  <span className='circleBtnIcon'>+</span>
                  <h4> FIND OUT MORE </h4>
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
      </div>
    );
  }
}
