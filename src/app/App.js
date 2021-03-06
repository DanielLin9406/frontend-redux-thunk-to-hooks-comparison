import { hot } from "react-hot-loader";
import React, { Component } from "react";
import Header from "./components/Header/Container";

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <Header />
      </div>
    );
  }
}

export default hot(module)(App);
