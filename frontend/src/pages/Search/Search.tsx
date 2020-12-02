import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import LineInput from '../../components/LineInput';
import closeIcon from '../../assets/icons/close.png';
import searchIcon from '../../assets/icons/search-icon.png';
import defaultMusicSheet from '../../assets/icons/default-music-sheet.png';

import './Search.scss';

type State = {
  word: string;
  musicSheets: any;
  filteredMusicSheets: any;
}

type Props = {
  location: any;
}

class Search extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { 
      word: "",
      musicSheets: undefined,
      filteredMusicSheets: undefined,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const baseURL = 'https://dacappo.herokuapp.com';
    axios.get(`${baseURL}/api/musicSheet`)
    .then(({ data }: any) => {
        this.setState({ musicSheets: data.musicSheets });
    })
    .catch((err: any) => console.log(err))
  }

  handleInputChange(e: any) {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ filteredMusicSheets: this.state.musicSheets
      .filter((musicSheet: any) => musicSheet.name.toUpperCase().includes(e.target.value.toUpperCase()))
    });
    if(e.target.value === "") this.setState({ filteredMusicSheets: undefined });
  }

  render() {
    const { musicSheets, word, filteredMusicSheets } = this.state;
    return (
      <div className="search">
        <div className="d-flex justify-content-between align-items-center">
          <p className="title">Search</p>
          <Link to="/catalogue" className="close-link">
            <img src={closeIcon} alt="close" className="close"/>
          </Link>
        </div>
        <div className="search-bar d-flex justify-content-between align-items-end">
          <LineInput
            name="word"
            value={word}
            onChange={this.handleInputChange}
            placeholder="Search for..."
            style={{ backgroundColor: "#fafafa" }}
            outerStyle={{ width: "83%" }}
          />
          <img src={searchIcon} alt="search" className="search-icon"/>
        </div>
        <div className="filter">
          <p className="label">Filter by</p>
          <div className="title">
            <p>Title</p>
          </div>
        </div>
        <div className="music-sheets">
          {filteredMusicSheets ? filteredMusicSheets.map((musicSheet: any) => (
              <div className="music-sheet d-flex" key={musicSheet._id}>
                <Link to={{
                  pathname: `/music-sheet-detail/${musicSheet._id}`,
                  state: {
                    musicSheet,
                    prevPath: this.props.location.pathname,
                  }
                }}>
                  <img src={defaultMusicSheet} alt="music-sheet-image"/>
                </Link>
                <div className="info">
                  <p className="name">{musicSheet.name}</p>
                  <p className="composer">Composer: {musicSheet.composer}</p>
                  <p className="editorial">Editorial: {musicSheet.editorial}</p>
                  <p className="instruments">Instrument: {musicSheet.instruments}</p>
                  <p className="format">Format: Plain copy</p>
                </div>
              </div>
          ))
          : musicSheets && musicSheets.map((musicSheet: any) => (
              <div className="music-sheet d-flex" key={musicSheet._id}>
                <Link to={{
                  pathname: `/music-sheet-detail/${musicSheet._id}`,
                  state: {
                    musicSheet,
                    prevPath: this.props.location.pathname,
                  }
                }}>
                  <img src={defaultMusicSheet} alt="music-sheet-image"/>
                </Link>
                <div className="info">
                  <p className="name">{musicSheet.name}</p>
                  <p className="composer">Composer: {musicSheet.composer}</p>
                  <p className="editorial">Editorial: {musicSheet.editorial}</p>
                  <p className="instruments">Instrument: {musicSheet.instruments}</p>
                  <p className="format">Format: Plain copy</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
};

export default Search;
