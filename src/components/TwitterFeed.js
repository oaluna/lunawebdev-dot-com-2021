import React, { Suspense, useContext } from 'react';
import styled from 'styled-components';
import Loading from './Loading/Loading';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import StyleContext from '../utils/contexts/StyleContext';

const twitterDetails = {
  userName: 'LunaWebDev', //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<CenterContent><h2>Can't load? Check privacy protection settings</h2></CenterContent>";

var widthScreen = window.screen.width;

export default function Twitter() {
  const isDark = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <TwitterContainer>
          <TwitterMainDiv id='twitter'>
            <TimelineHeaderTitle>Twitter Feed</TimelineHeaderTitle>
            <CenterContent>
              <TwitterTimelineEmbed
                sourceType='profile'
                screenName={twitterDetails.userName}
                options={{ height: 360, width: '100vw' }}
                placeholder={renderLoader()}
                autoHeight={false}
                borderColor='#fff'
                key={isDark ? '1' : '2'}
                theme={isDark ? 'dark' : 'light'}
                noFooter={true}
              />
            </CenterContent>
          </TwitterMainDiv>
        </TwitterContainer>
      </Suspense>
    );
  } else {
    return null;
  }
}

const CenterContent = styled.div`
  text-align: center;
  margin: auto;
  display: block;
  margin: 0 auto;
  padding: 1.5rem;
`;

const TwitterMainDiv = styled.div`
  position: relative;
  max-width: 750px;
  height: 360px;
  padding: 1.5rem;
  margin-left: 0vw;
`;

const TwitterContainer = styled.div`
  height: 360px;
  padding: 1rem;
  margin-top: 0vh;
`;

const TimelineHeaderTitle = styled.div`
  font-size: 24px;
  font-weight:300 !important;
`;
