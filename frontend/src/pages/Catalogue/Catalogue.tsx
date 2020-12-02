import React, { Component } from 'react';
import axios from 'axios';

import searchIcon from '../../assets/icons/search-icon.png';
import addIcon from '../../assets/icons/add-icon.png';
import musicSheetImage1 from '../../assets/icons/music-sheet-1.png';
import musicSheetImage2 from '../../assets/icons/music-sheet-2.png';
import musicSheetImage3 from '../../assets/icons/music-sheet-3.png';
import musicSheetImage4 from '../../assets/icons/music-sheet-4.png';
import musicSheetImage5 from '../../assets/icons/music-sheet-5.png';

import './Catalogue.scss';
import { Link } from 'react-router-dom';

type State = {
  musicSheets: any;
}

type Props = {
  history: any;
  location: any;
}

export default class Catalogue extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      musicSheets: undefined,
    }
  }

  componentDidMount() {
    // const isProduction = process.env.NODE_ENV === "production";
    // const baseURL = isProduction ? 'https://dacappo.herokuapp.com' : 'http://localhost:3000';
    const baseURL = 'https://dacappo.herokuapp.com';
    axios.get(`${baseURL}/api/musicSheet`)
    .then(({ data }: any) => {
        this.setState({ musicSheets: data.musicSheets });
    })
    .catch((err: any) => console.log(err))
  }

  render() {
    const { musicSheets } = this.state;
    const imagesArray = [
      musicSheetImage1,
      musicSheetImage2,
      musicSheetImage3,
      musicSheetImage4,
      musicSheetImage5,
    ];
    return (
      <div className="catalogue">
        <div className="icons d-flex justify-content-end">
          <Link to="/add-music-sheets" style={{ marginRight: "15px" }}>
            <img src={addIcon} alt="add"/>
          </Link>
          {musicSheets && <Link to="/search-music-sheets">
            <img src={searchIcon} alt="search" className="search-icon"/>
          </Link>}
        </div>
        <p className="title">Music sheets</p>
        <div className="music-sheets d-flex flex-wrap justify-content-between">
          {musicSheets && (
            musicSheets.map((musicSheet: any) => (
              <div className="music-sheet" key={musicSheet._id}>
                <Link to={{
                  pathname: `/music-sheet-detail/${musicSheet._id}`,
                  state: {
                    musicSheet,
                    prevPath: this.props.location.pathname,
                  }
                }}>
                  <img src={imagesArray[Math.floor(Math.random() * imagesArray.length)]} alt="music-sheet-image"/>
                </Link>
                <p className="name">{musicSheet.name}</p>
                <p className="composer">{musicSheet.composer}</p>
              </div>
            ))
          )}
        </div>
      </div>
    )
  }
}
