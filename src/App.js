import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="gray-background">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's develop management system!</h2>
        </header>
      </div>
    );
  }
}
