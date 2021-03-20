import { useState } from 'react';
import projectsData from './projectsData.js';
import './Projects.css';

import {
  millionRounder,
  socialIconSelector,
  toggleBackgroundFix
} from './functions.js';

const Projects = () => {
  const projects = projectsData.map((item) => (
    <ProjectBox key={item.id} item={item} />
  ));

  return <div className='projectsContainer'>{projects}</div>;
};

const ProjectBox = (props) => {
  const [open, setOpen] = useState(false);

  const openBox = () => {
    setOpen(true);
    toggleBackgroundFix(true);
  };

  const closeBox = () => {
    setOpen(false);
    toggleBackgroundFix(false);
  };

  const reach = millionRounder(props.item.totalReach);
  const urlImg = {
    backgroundImage: 'url(' + props.item.urlBanner + ')'
  };

  return (
    <div className='project'>
      <div className='projectCard' style={urlImg} onClick={openBox} />
      <div className='projectName'>
        <h3>{props.item.name}</h3>
        <h3>{props.item.surname}</h3>
      </div>
      <div className='projectInfo'>
        <p>Total followers:</p>
        <h2>{reach}</h2>
        <p>Socials:</p>
        <div className='projectInfoSocials'>
          <SocialIconPrinter tag={props.item.tagYoutube} social='Youtube' />
          <SocialIconPrinter tag={props.item.tagInstagram} social='Instagram' />
          <SocialIconPrinter tag={props.item.tagFacebook} social='Facebook' />
          <SocialIconPrinter tag={props.item.tagTikTok} social='TikTok' />
          <SocialIconPrinter tag={props.item.tagTwitter} social='Twitter' />
        </div>
      </div>
      <ProjectPage open={open} item={props.item} closeBox={closeBox} />
    </div>
  );
};

const ProjectPage = (props) => {
  const [isOpen, setIsOpen] = useState(props.open);
  const handleClose = () => {
    return props.closeBox();
  };
  return (
    <div className={isOpen ? 'projectPageOpen' : 'projectPage'}>
      <div className='projectPageTopbar'>
        <h3 className='returnButton' onClick={handleClose}>
          +
        </h3>
      </div>
      <div className='projectPageContent'>
        <div className='projectPageIntro'>
          <div className='projectPageImage'>
            <img src={props.item.urlBanner} alt='banner of urls' />
          </div>
          <div className='projectPageSnippet'>
            <div className='projectPageName'>
              <h3>{props.item.name}</h3>
              <h3>{props.item.surname}</h3>
            </div>
            <div className='projectPageTags'>
              <h4 className='Tag'>Web</h4>
              <h4 className='Tag'>Blogs</h4>
            </div>
            <div className='projectPageDescription'>
              <p>
                A case history of my previous works. If You'd like to see more visit <a href="https://oscarluna.dev">oscarluna.dev</a>.
              </p>
            </div>
          </div>
        </div>

        <div className='projectPageTab'>
          <div className='dragger' />
          <ProjectPageTabs item={props.item} />
        </div>
      </div>
    </div>
  );
};

function SocialIconPrinter(props) {
  if (props.tag !== 'none') {
    return (
      <img
        className='socialIcon'
        src={socialIconSelector(props.social)}
        alt='social media icon'
      />
    );
  } else {
    return null;
  }
}

function SocialBoxesPrinter(props) {
  // const colors = {
  //   backgroundColor: socialButtonColorSelector(props.social),
  //   boxShadow: "1px 1px 8px 1px " + socialButtonColorSelector(props.social)
  // }

  if (props.name !== 'none') {
    return (
      <a href='#social' className='socialBox'>
        <div className='socialIconBox'>
          <img className='socialIcon' src={props} alt='social media icon' />
        </div>
        <div className='socialButton'>
          <h2>{props.socialIcon}</h2>
          <h5>@{props.name}</h5>
        </div>
      </a>
    );
  } else {
    return null;
  }
}

const ProjectPageTabs = (props) => {
  const [activePageSocials, setActivePageSocials] = useState(true);
  const [activePageWorks, setActivePageWorks] = useState(false);
  const [activePageStats, setActivePageStats] = useState(false);

  const updateActiveTab = (tabName) => {
    if (tabName === 'socials') {
      setActivePageSocials(true);
      setActivePageWorks(false);
      setActivePageStats(false);
    } else if (tabName === 'works') {
      setActivePageSocials(false);
      setActivePageWorks(true);
      setActivePageStats(false);
    } else if (tabName === 'stats') {
      setActivePageSocials(false);
      setActivePageWorks(false);
      setActivePageStats(true);
    }
  };
  return (
    <div className='tabs'>
      <div className='tabsMenu'>
        <div
          className={activePageSocials ? 'tabTitle tabTitleActive' : 'tabTitle'}
          onClick={(e) => updateActiveTab('socials')}>
          <h4>Socials</h4>
        </div>
        <div
          className={activePageWorks ? 'tabTitle tabTitleActive' : 'tabTitle'}
          onClick={(e) => this.updateActiveTab('works')}>
          <h4>Works</h4>
        </div>
        <div
          className={activePageStats ? 'tabTitle tabTitleActive' : 'tabTitle'}
          onClick={(e) => this.updateActiveTab('stats')}>
          <h4>Stats</h4>
        </div>
      </div>
      <div
        className={
          activePageSocials ? 'tabSingle tabSingleActive' : 'tabSingle'
        }>
        <div className='socialBoxes'>
          <SocialBoxesPrinter name={props.item.nameYoutube} social='Youtube' />
          <SocialBoxesPrinter
            name={props.item.tagInstagram}
            social='Instagram'
          />
          <SocialBoxesPrinter
            name={props.item.nameFacebook}
            social='Facebook'
          />
        </div>
      </div>
      <div
        className={activePageWorks ? 'tabSingle tabSingleActive' : 'tabSingle'}>
        <h3>COMING SOON!</h3>
      </div>
      <div
        className={activePageStats ? 'tabSingle tabSingleActive' : 'tabSingle'}>
        <h3>COMING SOON!</h3>
      </div>
    </div>
  );
};

export default Projects;
