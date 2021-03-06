import React, { Component } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { isAuthenticated, handleSubmit } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/books" />;
    }

    return (
      <div>
        <form
          className="login"
          onSubmit={event => handleSubmit(event, this.state)}
        >
          <h2>Login</h2>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            placeholder="username"
            required
          />
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            placeholder="password"
            required
          />
          <input type="submit" />
        </form>
        <div className="account_details">
        <p>use "admin" as the username & password</p>
        </div>
        
      </div>
    );
  }
}

export default login;
