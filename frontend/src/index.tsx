import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import WebPage from './pages/PleaseUseMobile';
import './styles/main.scss';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = (e: any) => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); 
  }, [windowWidth]);

  return (
  <React.StrictMode>
    {windowWidth > 415 ? <WebPage/> : <Routes />}
  </React.StrictMode>
)};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
