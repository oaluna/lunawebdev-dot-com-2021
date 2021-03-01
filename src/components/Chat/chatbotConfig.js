import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./LearningOptions/LearningOptions";
import LinkList from "./LinkList/LinkList";

const config = {
  botName: "Zaxa",
  initialMessages: [
    createChatBotMessage("Hello! I'm Zaxa, Mr. Luna's personal assistant. How may I be of assistance?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "aliceblue",
    },
    chatButton: {
      backgroundColor: "aliceblue",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Oscar's projects",
            url:
              "/projects",
            id: 1,
          },
          {
            text: "Get In Contact with Oscar",
            url:
              "/Contact",
            id: 2,
          },
          {
            text: "Learn more",
            url: "/AboutMe",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;