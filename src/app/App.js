import { hot } from "react-hot-loader";
import React, { Component } from "react";
import Header from "./components/Header/Container";
import AuthProvider from "./layout/auth/AuthProvider";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div id="app" className="container">
          <Header />
        </div>
      </AuthProvider>
    );
  }
}

export default hot(module)(App);
