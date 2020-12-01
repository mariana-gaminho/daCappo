import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';

const App = () => (
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
