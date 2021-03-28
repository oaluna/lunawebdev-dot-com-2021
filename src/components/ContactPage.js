import React, { Component } from "react";

import ContactForm from "./components/MiraContacts/ContactForm.js";

import "./pages.css";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Contact">
        <ContactForm />
      </div>
    );
  }
}
