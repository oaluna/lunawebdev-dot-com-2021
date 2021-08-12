import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./LearningOptions/LearningOptions";
import LinkList from "./LinkList/LinkList";

const botName = "Zaxia";

const config = {
  botName: "Zaxia",
  initialMessages: [
    createChatBotMessage(
      `Hi There! I am ${botName}. I am Mr. Luna\'s personal Bot assistant.`
    ),
    createChatBotMessage("How may I be of assistance?", {
      withAvatar: true,
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgba(189,152,251,1) ",
    },
    chatButton: {
      backgroundColor: "rgba(189,152,251,1) ",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "projectLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Project 1",
            url: "/ProjectPage/1",
            id: 1,
          },
          {
            text: "Project 2",
            url: "/ProjectPage/2",
            id: 2,
          },
          {
            text: "See all projects",
            url: "/Projects",
            id: 3,
          },
          {
            text: "Go home",
            url: "/",
            id: 4,
          },
        ],
      },
    },
    {
      widgetName: "contactLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "I'd like to get in touch with Oscar",
            url: "/contact",
            id: 1,
          },
          {
            text: "Go home",
            url: "/",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "aboutLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "View his About page",
            url: "/aboutme",
            id: 1,
          },
          {
            text: "Go home",
            widgetFunc: (props) => <LearningOptions {...props} />,
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "blogLearningOptions",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Visit the Blog Page",
            url: "/blogPage",
            id: 1,
          },
          {
            text: "View other projects Oscar is working on",
            url: "/projectPage",
            id: 2,
          },
          {
            text: "Get in contact with Oscar",
            url: "/contactPage",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
