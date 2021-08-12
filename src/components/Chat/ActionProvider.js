class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const message = this.createChatBotMessage(
      `What's good!😁 ${`\n`}
       How may I help you?`,
      {
        widget: "learningOptions",
      }
    );
    this.updateChatbotState(message);
  }

  howAreYou() {
    const message = this.createChatBotMessage(
      `How am I? Hm.. I suppose I am well, since I am not experiencing bugs nor COVID-19. ${`\n`}
      Now, what can I do for you?`,
      {
        widget: "learningOptions",
      }
    );
    this.updateChatbotState(message);
  }

  handleWhatsNew = () => {
    const message = this.createChatBotMessage(
      `Mr. Luna recently added a blog feed to the site! Visit the blog section to read about his learning journey as a web developer! Or you can select a different option:`,
      {
        widget: "blogLearningOptions",
      }
    );
    this.updateChatbotState(message);
  };

  handleProjectLinks = () => {
    const message = this.createChatBotMessage(
      `Excellent! Here\'s a couple of sample projects, or you can view them all in the Projects page`,
      {
        widget: "projectLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleContactLinks = () => {
    const message = this.createChatBotMessage(
      "Excellent! Here are your options to choose from:",
      {
        widget: "contactLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleAboutLinks = () => {
    const message = this.createChatBotMessage(
      "Excellent! Here are your options to choose from:",
      {
        widget: "aboutLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't quite catch that. Could you please try again?",
      {
        widget: "learningOptions",
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
