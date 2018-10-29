import React, { Component } from "react";
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import "../base-styles/base-styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Header",
      bodyText: "Body"
    };
  }

  render() {
    const { headerText, bodyText } = this.state;

    return (
      <div>
        <Header text={headerText} />
        <Body text={bodyText} />
      </div>
    );
  }
}

export default App;
