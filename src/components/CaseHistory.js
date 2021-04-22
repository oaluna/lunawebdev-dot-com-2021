import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectsData from './Data/projectsData';
import FilterBlurImg from './FilterBlurImg.js';
import SvgIcons from './SvgIcons.js';
import './pages.css';

export default class CaseHistoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var projectsCards = projectsData.map((item) => {
      return (
        <Link to={'/ProjectPage/' + (item.id - 1)} className='viewCard'>
          <FilterBlurImg img={item.imageCard} brightness={'dark'} />
          <SvgIcons
            iconName='oscarArmandoLunaLogo'
            style={{ position: 'absolute', marginLeft: '-10vw' }}
          />
        </Link>
      );
    });

    return (
      <StyledCaseHistoryPage>
        <FullSection>
          <LimitWidthContent>
            <BigTitle> Projects </BigTitle>
            <ProjectsCards>{projectsCards}</ProjectsCards>
          </LimitWidthContent>
          <BackRightTop>
            <SvgIcons
              style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
              dimension='400px'
              iconName='star'
              fillColor='rgba(189, 202, 251, 1)'
            />
          </BackRightTop>
          <BackLeftBottom>
            <SvgIcons
              style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
              dimension='300px'
              iconName='heartMessage'
              fillColor='rgba(189, 202, 251, 1)'
            />
          </BackLeftBottom>
        </FullSection>
      </StyledCaseHistoryPage>
    );
  }
}
