import React, { Component } from 'react';

import AuthButton from '../../components/AuthButton';
import whiteLogo from '../../assets/icons/logo-white.png';

import './StartMenu.scss';

type State = {
  showSplash: boolean;
}

type Props = {
  location: any;
  history: any;
}

export default class StartMenu extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showSplash: true,
    }
  }

  componentDidMount() {
    if(this.props.location.state
      && (this.props.location.state.prevPath === "/login"
        || this.props.location.state.prevPath === "/signup")
    ){
      this.setState({ showSplash: false});
      this.props.history.replace();
    } else {
      setTimeout(() => {
        this.setState({ showSplash: false});
      }, 3000);
    }
  }

  render() {
    return (
      <div className="start-menu">
        {this.state.showSplash ? (
          <div className="splash d-flex justify-content-center align-items-center">
            <div className="rectangle">
              <img src={whiteLogo} alt="white-logo" width="65"/>
            </div>
          </div>
        ) : (
          <div className="login-signup">
            <div className="filter">
              <div className="title d-flex justify-content-center flex-wrap">
                <div className="rectangle">
                  <img src={whiteLogo} alt="white-logo" width="65"/>
                </div>
                <p>DaCappo</p>
              </div>
              <div className="buttons d-flex justify-content-center align-items-end">
                <AuthButton 
                  text="LOGIN"
                  route="/login"
                  style={{ marginRight: "30px" }}
                  location={this.props.location}
                />
                <AuthButton 
                  text="SIGN UP"
                  route="/signup"
                  location={this.props.location}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
