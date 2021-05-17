import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import projectsData from './Data/projectsData.js';
import SvgIcons from './SvgIcons.js';
import './components.css';
import './siteInfo.css'

const VideoSectionRight = styled.div`
  margin-top: 10vh;
`
const SiteInfo = styled.div`
  filter: brightness(0.8);
  @media only screen and (max-width: 600px) {
    margin: 0 10vw 0 0;
    width: 100vw;
    border-radius: 10px;
    height: 100vh;
    display: flex;
    max-width: 100vw;
  }
`
const SiteTitle = styled.div`
  width: 100vw;
`
const SiteButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align:left;
  max-width: 100%;
  right: 10vw;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0vh 10vw 0vh 0vw;
    justify-content: space-evenly;
    align-items: flex-start;

   button {
    max-width: 70%;
    width: 100%;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
      margin: 2vh 10vw;
    }
  }
`
const BackButton = styled.span`
  transform: rotate(180deg);
  margin-right: 0px;
  display: flex;
  flex-direction: row-reverse;
  border: 2px solid #f0f8ff;
  padding: 10px 5px;
  border-radius: 50px;
  width: 100px;
  h3 {
    width: 150px;
    padding: 0px auto;
  }

`


export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProject: parseInt(this.props.match.params.Project, 10),
      nextProject: parseInt(this.props.match.params.Project, 10) + 1
    };
  }

  componentDidMount() {
    if (this.state.nextProject === projectsData.length - 1) {
      this.setState({
        nextProject: 0
      });
    }
  }

  render() {
    return (
      <div className='videoSection projectPage'>
        <div className='videoSectionLeft'>

        </div>
        <div className='projectOverlay'></div>

        <div
          className='fullScreenImage'
          style={{
            zIndex:-1,
            backgroundImage:
              'url(' + projectsData[this.state.currentProject].imageLarge + ')'
          }}></div>

        <VideoSectionRight className="videoSectionRightProjectpage">
          <SiteInfo className="siteInfoProjectpage">
            <SiteTitle className="siteTitleProjectpage">
              <h5> {projectsData[this.state.currentProject].category} </h5>
              <h2>{projectsData[this.state.currentProject].title}</h2>
            </SiteTitle>
            <div className='siteTextProjectpage'>
              <p>
                {projectsData[this.state.currentProject].text}
              </p>
            </div>
            <SiteButtons className="siteButtonsProjectpage">
              <button
                onClick={() => this.props.history.goBack()}
                className='circleBtn circleBtnDark'>
                <BackButton>
                  <SvgIcons
                    dimension='15px'
                    iconName='arrowRight'
                    fillColor="#f0f8ff"
                  />
                <h3 style={{transform: 'rotate(180deg)'}}>GO BACK</h3>
                <br />
                </BackButton>
              </button>
              <Link style={{padding: '0px 5px'}} to={'/Contact'}>
                <button
                  className='simpleBtn simpleBtnDark'
                  style={{ width: '100%', padding: '10px' }}>
                  CONTACT
                </button>
              </Link>
                <Link style={{padding: '0px 5px'}} to={projectsData[this.state.currentProject].url}>
              <button className="simpleBtn simpleBtnDark" style={{width:'100%', padding: '10px'}}>
                  DEMO
              </button>
                </Link>
                <Link style={{padding: '0px 5px'}} to={projectsData[this.state.currentProject].repo}>
              <button className="simpleBtn simpleBtnDark" style={{width:'100%', padding: '10px'}}>
                  REPO
              </button>
                </Link>
            </SiteButtons>
          </SiteInfo>
        </VideoSectionRight>
      </div>
    );
  }
}
