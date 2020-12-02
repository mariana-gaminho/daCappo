import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartMenu from './pages/StartMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Walkthrough from './pages/Walkthrough';
import Catalogue from './pages/Catalogue';
import AddMusicSheet from './pages/AddMusicSheet';
import Search from './pages/Search';
import MusicSheetDetail from './pages/MusicSheetDetail';

const Router: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StartMenu} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/walkthrough" component={Walkthrough} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/add-music-sheets" component={AddMusicSheet} />
      <Route exact path="/search-music-sheets" component={Search} />
      <Route exact path="/music-sheet-detail/:id" component={MusicSheetDetail} />
    </Switch>
  </BrowserRouter>
);

export default Router;
