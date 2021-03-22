import React, { Component } from 'react';

import ContactForm from './ContactForm.js';

export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='contactPage'>
        <ContactForm />
      </div>
    );
  }
}
