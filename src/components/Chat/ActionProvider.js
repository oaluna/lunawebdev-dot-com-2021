class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage(
      `Hi Folk!😁 ${`\n`}
       How may I help you?`,
       {
         widget: 'learningOptions'
       }
    );
    this.updateChatbotState(greetingMessage);
  }

  handleProjectLinks = () => {
    const message = this.createChatBotMessage(
      'Excellent! Here are your options to choose from:',
      {
        widget: 'projectLinks'
      }
    );
    this.updateChatbotState(message);
  };
  handleContactLinks = () => {
    const message = this.createChatBotMessage(
      'Excellent! Here are your options to choose from:',
      {
        widget: 'contactLinks'
      }
    );
    this.updateChatbotState(message);
  };
  handleAboutLinks = () => {
    const message = this.createChatBotMessage(
      'Excellent! Here are your options to choose from:',
      {
        widget: 'aboutLinks'
      }
    );
    this.updateChatbotState(message);
  };


  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't quite catch that. Could you please try again?",
      {
        widget: 'learningOptions'
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
