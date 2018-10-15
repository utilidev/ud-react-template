import React, { Component } from "react";
import Header from "./Header.js";
import "../base-styles/base-styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Header",
    };
  }

  render() {
    return (
      <div>
        <Header
          text={this.state.headerText}
        />
      </div>
    );
  }
}

export default App;
