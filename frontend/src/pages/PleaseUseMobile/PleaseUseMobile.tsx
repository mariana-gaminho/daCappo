import React from 'react';

import whiteLogo from '../../assets/icons/logo-white.png';
import './PleaseUseMobile.scss';

function PleaseUseMobile() {
  return (
    <div className="mobile d-flex justify-content-center align-items-center">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="rectangle">
          <img src={whiteLogo} alt="white-logo" width="65"/>
        </div>
        <p>Please use a mobile device to try the DaCappo app</p>
      </div>
    </div>
  );
};

export default PleaseUseMobile;
