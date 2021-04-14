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
import TwitterFeed from './TwitterFeed'
import './pages.css';

// const PluralsightRoleIQ = () => (
//   <>
//   <div className="pageHeading---i-v48"><div className="navigationBadgeContainer---1cUGt"><div className="navigationContainer---24SS3"></div><div className="horizontalFlexContainer---3_4r-"><div className="title---3Iz1z"><h1 className="roleName---H51aZ">React Web Developer</h1><div className="badgeContainer---1l_jk"></div></div><h3 className="roleDetails---3aPIZ"><p>Created by <a href="https://app.pluralsight.com/roleiq/roles/5f7447d8-91ea-4816-b7bc-a0a72bae073f">PluralSight</a></p><p>Building Web Applications With React • JavaScript Core Language • HTML5 • CSS +11 more</p></h3></div></div><div className="skillProgressContainer---lVDLZ"><div className="logoContainer---3PeF2"><img alt="" className="skillProgressLogoImage---Yz5P2" src="https://s2.pluralsight.com/roleiq/imgs/roleiq-logotype-dark2.svg"/><div style={{zIndex:"9999"}}><div data-css-7dab2f="" style={{color: "rgba(255, 255, 255, 0.65)"}}></div></div><span style={{position: 'absolute', top: "0px", left: '0px', zIndex: 9999, transform: "translate3d(1261px, 175px, 0px)", willChange: 'transform'}}  placement="bottom-start"><div data-css-1luw3o6="" style={{width: "555px", maxWidth: "555px", display: "none"}}><div className="verticalBox---2rVSi"></div><div data-css-4vi0t8="" aria-hidden="true"></div></div></span></div><div className="roleLevelBadgeContainer---8CTus"><img alt="" src="https://s2.pluralsight.com/roleiq-leader/badges/prod/badge_react_developer.svg" className="roleIcon---3uZGY"/><img alt="" src="https://s2.pluralsight.com/roleiq/imgs/level3_level_fill.svg" className="badgeIcon---1NL4y"/></div><div data-css-3w3j8r="" className="levelBadge-3---2S32E">Level 3</div></div></div>
// </>
// )



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
<h2 style={{textAlign: 'center', width: '100vw', position: 'relative', marginTop: '45vh'}}>Other media</h2>
<div className="onlinePresenceSection" style={{position: 'relative', maxWidth: '100vw', width: '100%', marginLeft: '20vw', marginRight: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
{/* <PluralsightRoleIQ /> */}
<TwitterFeed/></div>
      </div>
    );
  }
}
