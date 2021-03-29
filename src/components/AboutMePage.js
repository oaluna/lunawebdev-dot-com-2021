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
import './pages.css';

export default class AboutMePage extends Component {
  state = {
    pageAuthor: parseInt(this.props.match.params.AboutMe, 1)
  };

  render() {
    return (
      <div className='aboutMePage'>
        <div className='aboutContainer'>
          <div className='aboutTitle'>
            <h1>{aboutMeData.title}</h1>
          </div>

          <div className='aboutBody'>
            <div className='aboutBodyContainer'>
              <div className='aboutBodyImg'>
                <img
                  src={aboutMeData.image}
                  alt='Oscar Armando Luna, web developer'
                />
              </div>
              <a style={{ zIndex: 25 }} href={aboutMeData.portfolioLink}>
                <div className='aboutBodyName'>{aboutMeData.name}</div>
              </a>
              <div className='aboutBodyText'>
                <p>{aboutMeData.text}</p>
              </div>
              <div className='socialBoxAboutMe'>
            <a href={aboutMeData.facebookLink}>
              <img
                className='socialItem'
                src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/facebook-512.png'
                alt='facebook link'
              />
            </a>
            <a href={aboutMeData.linkedinLink}>
              <img
                className='socialItem'
                src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/linkedin-512.png'
                alt='Linkedin, professional network, linked in icon - Free download'
              />
            </a>
            <a href={aboutMeData.devLink} className='socialItem'>
              <FontAwesomeIcon
                icon={faDev}
                style={{ color: '#000', fontSize: '30px' }}
              />
            </a>
            <a href={aboutMeData.twitterLink}>
              <img
                className='socialItem'
                src='https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/twitter-512.png'
                alt='Logo, social, tweet, twitter icon - Free download'
              />
            </a>
            <a href={aboutMeData.githubLink}>
              <img
                className='socialItem'
                src='https://cdn3.iconfinder.com/data/icons/social-network-round-gloss-shine/512/GitHub_Social-Network-Communicate-Page-Curl-Effect-Circle-Glossy-Shadow-Shine.png'
                alt='Logo, social, github icon'
              />
            </a>
          </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
