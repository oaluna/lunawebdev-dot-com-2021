import React, { Component } from "react";
import "./pages.css";

export default class CaseHistoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <iframe
        className="milanoteContainer"
        src="https://app.milanote.com/1L9jts14o3Q5dB?p=i4l7CnYh1WJ"
        width="100%"
        height="100%"
        frameBorder="0"
        title="AvveraProject"
      ></iframe>
    );
  }
}
