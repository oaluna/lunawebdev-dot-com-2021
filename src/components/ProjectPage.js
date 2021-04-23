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
            backgroundImage:
              'url(' + projectsData[this.state.currentProject].imageLarge + ')'
          }}></div>

        <div className='videoSectionRight' style={{ marginTop: '10vh' }}>
          <div
            className='siteInfo' style={{filter: 'brightness(0.8)'}}
            >
            <div className='siteTitle' style={{width: '100vw'}}>
              <h5> {projectsData[this.state.currentProject].category} </h5>
              <h2>{projectsData[this.state.currentProject].title}</h2>
            </div>
            <div className='siteText'>
              <p>
                {projectsData[this.state.currentProject].text}
              </p>
            </div>
            <div className='siteButtons' style={{display: 'flex', flexDirection: 'column'}}>
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
                <h3>GO BACK</h3>
                <br />
              </button>
              <Link to={'/Contact'}>
                <button
                  className='simpleBtn simpleBtnDark'
                  style={{ width: '100%', padding: '10px' }}>
                  CONTACT
                </button>
              </Link>
                <Link to={projectsData[this.state.currentProject].url}>
              <button className="simpleBtn simpleBtnDark" style={{width:'100%', padding: '10px'}}>
                  DEMO
              </button>
                </Link>
                <Link to={projectsData[this.state.currentProject].repo}>
              <button className="simpleBtn simpleBtnDark" style={{width:'100%', padding: '10px'}}>
                  REPO
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
