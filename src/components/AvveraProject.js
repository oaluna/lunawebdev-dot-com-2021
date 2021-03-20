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
        src="https://lunawebdev.com"
        width="100%"
        height="100%"
        frameBorder="0"
        title="LunaWebSolutions"
      ></iframe>
    );
  }
}
