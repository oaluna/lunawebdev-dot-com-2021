import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import projectsData from './Data/projectsData.js';
import SvgIcons from './SvgIcons'
import FilterBlurImg from './FilterBlurImg.js';
import './components.css';
import './viewCards.css';

export default class viewCards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='viewCardModule'>
        <div className='viewCardContent'>
          <Link to={'/ProjectPage/0'} className='viewCard'>
            <FilterBlurImg img={projectsData[0].imageCard} brightness={''} />
            <SvgIcons iconName="oscarArmandoLunaLogo" style={{position: 'absolute', zIndex: 1000}}/>
          </Link>

          <Link to={'/ProjectPage/1'} className='viewCard'>
            <FilterBlurImg img={projectsData[1].imageCard} brightness={''} />
            <SvgIcons iconName="oscarArmandoLunaLogo" style={{position: 'absolute', zIndex: 1000}}/>
          </Link>

          <Link to={'/ProjectPage/2'} className='viewCard'>
            <FilterBlurImg img={projectsData[2].imageCard} brightness={''} />
            <SvgIcons iconName="oscarArmandoLunaLogo" style={{position: 'absolute', zIndex: 1000}}/>
          </Link>

          <Link to={'/Projects'} className='viewCard viewCardLast'>
            <h3>
              {' '}
              View <br /> All Projects
            </h3>
            <button className='circleBtn circleBtnDark viewCircleButton'>
              <span className='circleBtnIcon'>+</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
