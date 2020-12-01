import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import goBack from '../../assets/icons/go-back-icon.png';
import blueLogo from '../../assets/icons/logo-blue.png';
import LineInput from '../../components/LineInput';
import BasicButton from '../../components/BasicButton';

import './Login.scss';

type State = {
  email: string;
  password: string;
}

class Login extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: any) {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <Link to="/" className="go-back">
          <img src={goBack} alt="go-back" className="go-back-icon"/>
        </Link>
        <div className="d-flex align-items-center">
          <img src={blueLogo} alt="blue-logo" className="logo"/>
          <h1>LOGIN</h1>
        </div>
        <div className="card">
          <div className="inputs">
            <LineInput
              label="Email"
              value={email}
              name="email"
              placeholder="Write your email here"
              onChange={this.handleInputChange}
            />
            <LineInput
              label="Password"
              value={password}
              name="password"
              placeholder="**********"
              type="password"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="d-flex align-items-end login-button">
            <div className="d-flex flex-wrap justify-content-center" style={{ width: "100%" }}>
              <BasicButton
                text="LOGIN"
                onClick={() => false}
                disabled={false}
              />
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;