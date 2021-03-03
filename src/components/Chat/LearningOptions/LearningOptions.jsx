import React from 'react';

import './LearningOptions.css';

const HighSchoolBranches = (props) => {
  const options = [
    {
      text: 'I\'d like to see Oscar\'s projects',
      handler: props.actionProvider.handleProjectLinks,
      id: 1
    },
    { text: 'I\'d like to get in contact with Oscar',
    handler: props.actionProvider.handleContactLinks,
    id: 2
  },
    { text: 'I\'d like to know more about Oscar', handler: props.actionProvider.handleAboutLinks, id: 3 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className='learning-option-button'
      key={option.id}
      onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className='learning-options-container'>{optionsMarkup}</div>;
};

export default HighSchoolBranches;
