import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import './Chat.css';
import { ConditionallyRender } from 'react-util-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './chatbotConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

function Chat() {
  const [showChatbot, toggleChatbot] = useState(false);
  return (
    <div className='chat'>
      <header className='chatHeader'>
        <div className='chat-chatbot-container'>
          <ConditionallyRender
            ifTrue={showChatbot}
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
          onClick={() => toggleChatbot((prev) => !prev)}>
          <FontAwesomeIcon
            icon={faComment}
            className='chat-chatbot-button-icon'
          />
        </button>
      </header>
    </div>
  );
}

export default Chat;
