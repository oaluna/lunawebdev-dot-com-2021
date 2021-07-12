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
        <div className='videoSectionLeft' style={{ zIndex: 10000, color: '#f0f8ff' }}>
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
          <video className="videoMain"
            width='100%'
            style={{ zIndex: -1 }}
            loop
            playsInline
            autoPlay
            muted>
            <source
              src='https://www.pexels.com/video/4779866/download/'
              type='video/mp4'
            />
          </video>
          {/* </div> */}


        <div className='videoSectionRight'>
          <div className='siteInfoVideoSection'>
            <div className='siteTitle'>
              <h1 style={{ fontWeight: 900, color: '#f0f8ff'}}> Live Events </h1>
              <br />
            </div>
            <br />
            <div className='siteText'>
              <h2 style={{fontWeight: 100, fontSize: '30px', lineHeight: 1.2}}> COMING SOON</h2>
            </div>
            <div className='siteButtons' style={{paddingTop: 25}}>
              <Link to={'/Contact'}>
                <button className='circleBtn circleBtnDark' style={{marginLeft: '15px'}}>
                  <span className='circleBtnIcon'>+</span>
                  <h5 style={{ color: '#f0f8ff' }}>Find Out More</h5>
                </button>
              </Link>
              <Link to={'/Contact'}>
                <button className='simpleBtn simpleBtnDark'>
                  <h4 style={{ color: '#f0f8ff', padding:'5px 95px'}}>Contact</h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
