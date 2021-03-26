import { Component } from 'react';
import { a } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
  faDev,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import aboutMeData from './Data/aboutMeData';
import './components.css';

export default class AboutMePage extends Component {
  state = {
    pageAuthor: parseInt(this.props.match.params.AboutMe, 1)
  };

  render() {
    return (
      <div
        className='aboutMePage' style={{ height: '90vh'}}
        >
        <div
          className='aboutContainer' style={{height: '100%'}}
          >
          <div
            className='aboutTitle'
            >
            <h1 style={{ width: '100%' }}>{aboutMeData.title}</h1>
          </div>
          <div
            className='socialBox' style={{position: 'absolute', top: '20vh', left:'75vw', display: 'flex', flexDirection: 'column'}}
            >
            <a
              style={{ zIndex: 25 }}
              href={aboutMeData.facebookLink}
              className='socialItem'>
              <img
                src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/facebook-512.png'
                style={{ width: '32px', height: '32px' }}
                alt='facebook link'
              />
            </a>
            <a
              style={{ zIndex: 25 }}
              href={aboutMeData.linkedinLink}
              className='socialItem'>
              <img
                src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/linkedin-512.png'
                alt='Linkedin, professional network, linked in icon - Free download'
                style={{ width: '32px', height: '32px' }}
              />
            </a>
            <a
              style={{ zIndex: 25 }}
              href={aboutMeData.devLink}
              className='socialItem'>
              <FontAwesomeIcon
                icon={faDev}
                style={{ color: '#000', fontSize: '30px' }}
              />
            </a>
            <a
              style={{ zIndex: 25 }}
              href={aboutMeData.twitterLink}
              className='socialItem'>
              <img
                src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/twitter-512.png'
                alt='Logo, social, tweet, twitter icon - Free download'
                style={{ width: '32px', height: '32px' }}
              />
            </a>
            <a
              style={{ zIndex: 25 }}
              href={aboutMeData.githubLink}
              className='socialItem'>
              <img
                src='https://cdn3.iconfinder.com/data/icons/social-network-round-gloss-shine/512/GitHub_Social-Network-Communicate-Page-Curl-Effect-Circle-Glossy-Shadow-Shine.png'
                alt='Logo, social, github icon'
                style={{ width: '32px', height: '32px' }}
              />
            </a>
          </div>
          <div className='aboutBody' style={{ width: '90vw' }}>
            <div
              className='aboutBodyContainer'
              style={{
                position: 'absolute',
                width: '60vw',
                height: '40vh',
                marginTop: '25vh',
                marginLeft: '15vw',
                background: 'rgba( 255, 255, 255, 0.34 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 7.5px )',
                borderRadius: '10px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
                zIndex: 20
              }}>
              <div className='aboutBodyImg'>
                <img
                  src={aboutMeData.image}
                  alt='Oscar Armando Luna, web developer'
                  style={{
                    position: 'absolute',
                    marginLeft: '-10vw',
                    marginTop: '20vh',
                    clipPath: 'circle(150px)',
                    zIndex: 40
                  }}
                />
              </div>
              <a style={{ zIndex: 25 }} href={aboutMeData.portfolioLink}>
                <div
                  className='aboutBodyName'
                  style={{
                    position: 'relative',
                    marginLeft: '15vw',
                    marginTop: '0vh',
                    fontFamily: 'La storia -demo-',
                    fontSize: '18px',
                    width: '100vw',
                    zIndex: 200,
                    position: 'absolute'
                  }}>
                  {aboutMeData.name}
                </div>
              </a>
              <div
                className='aboutBodyText'
                style={{
                  fontSize: '16px',
                  width: '40vw',
                  lineHeight: 1.5,
                  marginTop: '12vh',
                  marginLeft: '15vw'
                }}>
                {aboutMeData.text}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
