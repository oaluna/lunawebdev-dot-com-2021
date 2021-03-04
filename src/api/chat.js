import axios from 'axios';


class ApiClass {
  async createSession() {
    sessionStorage.removeItem('session_id');

    try {
      const response = await axios.post(CREATE_SESSION, {}, { auth });

      sessionStorage.setItem('session_id', response.data.session_id);
      return response.data.session_id;
    } catch (err) {
      console.log('An error has ocurred');
    }
  }

  async sendMessage(message) {
    const SEND_MESSAGE = await this._getSendMessageUri();
    let response;

    response = await axios.post(
      SEND_MESSAGE,
      {
        input: { text: message }
      },
      { auth }
    );

    if (response) {
      let responseMessages = response.data.output.generic;
      responseMessages = responseMessages.map((message) => ({
        text: message.text || message.title,
        type: message.response_type,
        options:
          message.options &&
          message.options.map((option) => ({
            label: option.label,
            value: option.value.input.text
          }))
      }));

      return responseMessages;
    }

    // if (err.response.data.error === 'Invalid Session') {
    //     console.warn('Expired session');
    //     console.warn('Creating new session and retrying...');
    //     const newResponseMessage = await this.sendMessage(message);
    //     return newResponseMessage;
    // } else {
    //     console.error('Error sending message:', err);
    // }
  }

  async _getSendMessageUri() {
    let sessionId = await (sessionStorage.getItem('session_id') ||
      this.createSession());

    return BASE_URL + `sessions/${sessionId}/message?version=${VERSION}`;
  }
}

export const api = new ApiClass();
