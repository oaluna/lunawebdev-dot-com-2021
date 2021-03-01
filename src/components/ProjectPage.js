import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import projectsData from './Data/projectsData.js';
import SvgIcons from './SvgIcons.js';
import './components.css';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProject: parseInt(this.props.match.params.Project, 10),
      nextProject: parseInt(this.props.match.params.Project, 10) + 1
    };
  }

  componentDidMount() {
    if (this.state.nextProject === projectsData.lenght - 1) {
      this.setState({
        nextProject: 0
      });
    }
  }

  render() {
    return (
      <div className='videoSection projectPage'>
        <div className='videoSectionLeft'>
          <div className='tokenModule'>
            <div className='token firsttoken'>
              <div className='tokenTop'>
                <h2>
                  {' '}
                  {projectsData[this.state.currentProject].stat1.number}{' '}
                </h2>
              </div>
              <div className='tokenBottom'>
                <h6> {projectsData[this.state.currentProject].stat1.text} </h6>
              </div>
            </div>
            <div className='token secondtoken'>
              <div className='tokenTop'>
                <h2>
                  {' '}
                  {projectsData[this.state.currentProject].stat2.number}{' '}
                </h2>
              </div>
              <div className='tokenBottom'>
                <h6> {projectsData[this.state.currentProject].stat2.text} </h6>
              </div>
            </div>
            <div className='token thirdtoken'>
              <div className='tokenTop'>
                <h2>
                  {' '}
                  {projectsData[this.state.currentProject].stat3.number}{' '}
                </h2>
              </div>
              <div className='tokenBottom'>
                <h6> {projectsData[this.state.currentProject].stat3.text} </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='projectOverlay'></div>

        <div
          className='fullScreenImage'
          style={{
            backgroundImage:
              'url(' + projectsData[this.state.currentProject].imageLarge + ')'
          }}></div>

        <div className='videoSectionRight' style={{ marginTop: '0vh' }}>
          <div
            className='siteInfo'
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '500px',
              maxWidth: '30vw',
              width: '100%',
              padding: '5px'
            }}>
            <div className='siteTitle'>
              <h5> {projectsData[this.state.currentProject].category} </h5>
              <h2>{projectsData[this.state.currentProject].title}</h2>
            </div>
            <div className='siteText'>
              <p style={{ lineHeight: 1.7, width: '20vw', textAlign: 'left' }}>
                {projectsData[this.state.currentProject].text}
              </p>
            </div>
            <div className='siteButtons'>
              <button
                onClick={() => this.props.history.goBack()}
                className='circleBtn circleBtnDark'>
                <span
                  style={{
                    transform: 'rotate(' + 180 + 'deg)',
                    marginRight: '10px'
                  }}>
                  <SvgIcons
                    style={{ boxShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
                    dimension='15px'
                    iconName='arrowRight'
                    fillColor="rgba('0, 0, 0, 1)"
                  />
                </span>
                <h4> GO BACK </h4>
              </button>
              <Link to={'/Contact'}>
                <button
                  className='simpleBtn simpleBtnDark'
                  style={{ padding: 10 }}>
                  CONTACT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
