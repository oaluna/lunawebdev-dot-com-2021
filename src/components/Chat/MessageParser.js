class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes('hi') ||
      lowerCaseMessage.includes('hey') ||
      lowerCaseMessage.includes('hello') ||
      lowerCaseMessage.includes('hello there') ||
      lowerCaseMessage.includes('hey there') ||
      lowerCaseMessage.includes('hi there') ||
      lowerCaseMessage.includes("what's up") ||
      lowerCaseMessage.includes('sup')
    ) {
      this.actionProvider.greet();
    } else if (
      lowerCaseMessage.includes('how are you') ||
      lowerCaseMessage.includes("how 's it going")
    ) {
      this.actionProvider.howAreYou();
    } else if (lowerCaseMessage.includes('projects')) {
      this.actionProvider.handleProjectLinks();
    } else if (lowerCaseMessage.includes('contact')) {
      this.actionProvider.handleContactLinks();
    } else if (lowerCaseMessage.includes('about')) {
      this.actionProvider.handleAboutLinks();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
