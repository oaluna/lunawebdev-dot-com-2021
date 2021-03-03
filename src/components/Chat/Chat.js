import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import './Chat.css';
import { ConditionallyRender } from 'react-util-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './chatbotConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

function Chat() {
  const [showChatBot, setShowChatBot] = useState(false);
  const [showButtonLabel, setShowButtonLabel] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [position, setPosition] = useState(0);

  function handleShowChatBot() {
    setShowChatBot(!showChatBot);
  }

  function mouseOver(e) {
    const rect = e.target.getBoundingClientRect();
    console.log(rect.left);
    setPosition(rect.left);
    setShowButtonLabel(true);
  }
  function mouseLeave() {
    setShowButtonLabel(false);
  }

  return (
    <div className='chat'>
      <header className='chatHeader'>
        <div className='chat-chatbot-container'>
          <ConditionallyRender
            ifTrue={showChatBot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className='chat-chatbot-button'
          onClick={() => setShowChatBot((prev) => !prev)}
          onMouseEnter={mouseOver}
          onMouseLeave={mouseLeave}></button>
        <br />
        {showButtonLabel && (
          <p className='chat-chatbot-button-label'>
            Click here to speak to my assistant
          </p>
        )}
      </header>
    </div>
  );
}

export default Chat;
