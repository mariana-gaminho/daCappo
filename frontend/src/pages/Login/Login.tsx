import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import goBack from '../../assets/icons/go-back-icon.png';
import blueLogo from '../../assets/icons/logo-blue.png';
import LineInput from '../../components/LineInput';
import BasicButton from '../../components/BasicButton';

import './Login.scss';

type State = {
  email: string;
  password: string;
}

type Props = {
  location: any;
  history: any;
}

class Login extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(e: any) {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  }

  login() {
    const isProduction = process.env.NODE_ENV === "production";
    const baseURL = isProduction ? 'https://dacappo.herokuapp.com' : 'http://localhost:3000';
    let filteredUser;
    axios.get(`${baseURL}/auth/login`)
    .then(({ data }: any) => {
      filteredUser = data.users.filter((user: any) => (
        user.email === this.state.email && user.password === this.state.password
      ));
      if(filteredUser.length > 0) {
        this.props.history.push("/catalogue");
      } else alert("Incorrect credentials");
    })
    .catch((err: any) => console.log(err))
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <Link
          to={{
            pathname: "/",
            state: { prevPath: this.props.location.pathname }
          }}
          className="go-back"
        >
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
                onClick={this.login}
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