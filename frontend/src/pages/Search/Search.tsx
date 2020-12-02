import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LineInput from '../../components/LineInput';
import closeIcon from '../../assets/icons/close.png';

import './Search.scss';

type State = {
  word: string;
}

class Search extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { 
      word: "",
    }
  }

  handleInputChange(e: any) {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="search">
        <div className="d-flex justify-content-between align-items-center">
          <p className="title">Search</p>
          <Link to="/catalogue">
            <img src={closeIcon} alt="close" className="close"/>
          </Link>
        </div>
        <LineInput
          onChange={this.handleInputChange}
          placeholder="Search for..."
          style={{ backgroundColor: "#fafafa" }}
        />
      </div>
    );
  }
};

export default Search;
