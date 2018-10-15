import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import "../base-styles/base-styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Header",
      bodyText: "Body",
    };
  }

  render() {
    return (
      <div>
        <Header
          text={this.state.headerText}
        />
        <Body
          text={this.state.bodyText}
        />
      </div>
    );
  }
}

export default App;
