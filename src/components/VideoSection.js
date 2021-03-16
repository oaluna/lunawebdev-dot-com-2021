import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import LottieInteractivity from '@lottiefiles/react-lottie-player';
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

        <div className="lottie-player-container">
          <Player
            autoplay
            loop
            src='https://assets7.lottiefiles.com/packages/lf20_k86wxpgr.json'
            background='rgba(0,0,0,0)'
            className="secondLottie"
            id='#secondLottie'
            speed='1'
            style={{
              position: 'absolute',
              textShadow: '0 0 4px rgba(189,202,251,0.3)',
              width: '900px',
              height: '900px',
              top: '-10vh',
              left: '0vw'
            }}
          />
        </div>

        <div
          className='videoSectionRight'
          style={{
            position: 'relative',
            maxHeight: '100%',
            height: '100%',
            width: '40vw',
            padding: '25px'
          }}>
          <div
            className='siteInfo'
            >
            <div
              className='siteTitle'
              style={{ position: 'relative', textAlign: 'center' }}>
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
                justifyContent: 'space-between',
                color: '#113355'
              }}>
              <Link to={'/Contact'}>
                <button className='circleBtn circleBtnDark'>
                  <span className='circleBtnIcon'>+</span>
                  <h5>Find Out More</h5>
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
      </div>
    );
  }
}
