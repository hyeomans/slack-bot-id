import React, { Component } from "react";
import fetch from "./fetch";
import Form from "./Form";
import Result from "./Result";
import Help from "./Help";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      userName: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleTokenChange(evt) {
    this.setState({ token: evt.target.value });
  }

  handleUserNameChange(evt) {
    this.setState({ userName: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.setState({ loading: true });
    const { token, userName } = this.state;

    return fetch(token, userName).then(result => {
      this.setState({
        result,
        loading: false
      });
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slack Bot User Id finder</h1>
        </header>

        <Form
          onSubmit={this.onSubmit}
          token={this.token}
          userName={this.userName}
          handleTokenChange={this.handleTokenChange}
          handleUserNameChange={this.handleUserNameChange}
        />

        {result && (
          <Result
            message={result.message}
            user={result.user}
            found={result.found}
          />
        )}

        <Help />
      </div>
    );
  }
}

export default App;
