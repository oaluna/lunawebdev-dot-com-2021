import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Player } from '@lottiefiles/react-lottie-player';
//import LottieInteractivity from '@lottiefiles/react-lottie-player';
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
        <div className='videoSectionLeft' style={{ color: '#f0f8ff' }}>
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

        {/* <div className='lottie-player-container'>
         <Player
            autoplay
            loop
            src='https://assets7.lottiefiles.com/packages/lf20_k86wxpgr.json'
            background='rgba(0,0,0,0)'
            className='secondLottie'
            id='#secondLottie'
            speed='1'
            style={{
              position: 'absolute',
              textShadow: '0 0 4px rgba(189,202,251,0.3)',
              width: '800px',
              height: '800px',
              top: '-10vh',
              left: '0vw'
            }}
          /> */}
        <div className='videoOverlay'></div>
          <video className="videoMain"
            width='100%'
            style={{ zIndex: -1 }}
            loop
            playsInline
            autoPlay
            muted>
            <source
              src='https://res.cloudinary.com/dgdnpkfun/video/upload/v1618435059/oscarlunadotdev/video-section.mp4'
              type='video/mp4'
            />
          </video>
          {/* </div> */}


        <div className='videoSectionRight'>
          <div className='siteInfoVideoSection'>
            <div className='siteTitle'>
              <h5 style={{ color: '#f0f8ff' }}> Live Events </h5>
              <br />
            </div>
            <br />
            <div className='siteText'>
              <h1 style={{ color: '#f0f8ff', fontWeight: 100, textAlign: 'center' }}> COMING SOON</h1>
            </div>
            <div className='siteButtons'>
              <Link to={'/Contact'}>
                <button className='circleBtn circleBtnDark'>
                  <span className='circleBtnIcon'>+</span>
                  <h5 style={{ color: '#f0f8ff' }}>Find Out More</h5>
                </button>
              </Link>
              <Link to={'/Contact'}>
                <button className='simpleBtn simpleBtnDark'>
                  <h4 style={{ color: '#f0f8ff' }}>Contact</h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
