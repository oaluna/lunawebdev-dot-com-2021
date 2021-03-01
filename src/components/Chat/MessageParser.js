class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello" || "hi" || "hey")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("Oscar" || "Luna")) {
      this.actionProvider.handleJavascriptList();
    }
  }
}

export default MessageParser;