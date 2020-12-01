import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import goBack from '../../assets/icons/go-back-icon.png';
import blueLogo from '../../assets/icons/logo-blue.png';
import LineInput from '../../components/LineInput';
import BasicButton from '../../components/BasicButton';

import './Signup.scss';

type State = {
  name: string;
  email: string;
  password: string;
}

class Signup extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
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
    const { name, email, password } = this.state;
    return (
      <div className="sign-up">
        <Link to="/" className="go-back">
          <img src={goBack} alt="go-back" className="go-back-icon"/>
        </Link>
        <div className="d-flex align-items-center">
          <img src={blueLogo} alt="blue-logo" className="logo"/>
          <h1>SIGN UP</h1>
        </div>
        <div className="card">
          <div className="inputs">
            <LineInput
              label="Your name"
              value={name}
              name="name"
              placeholder="Write your name here"
              onChange={this.handleInputChange}
            />
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
                text="JOIN US"
                onClick={() => false}
                disabled={false}
                style={{ paddingLeft: "30%", paddingRight: "30%"}}
              />
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Signup;