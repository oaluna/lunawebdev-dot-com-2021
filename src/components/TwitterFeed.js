import React, { Suspense, useContext } from 'react';
import './twitter.css';
import Loading from './Loading/Loading';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import StyleContext from '../utils/contexts/StyleContext';

const twitterDetails = {
  userName: 'LunaWebDev', //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";


var widthScreen = window.screen.width;

export default function Twitter() {
  const isDark = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className='tw-main-div' id='twitter'>
          <div className='centerContent'>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName={twitterDetails.userName}
              options={{ height: 400, width: { widthScreen } }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor='#fff'
              key={isDark ? '1' : '2'}
              theme={isDark ? 'dark' : 'light'}
              noFooter={true}
              
            />
          </div>
        </div>
        
      </Suspense>
    );
  } else {
    return null;
  }
}
