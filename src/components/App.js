import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, HashRouter } from 'react-router-dom';

import Home from './Home';

import './App.scss';


class App extends Component {
  render() {
    return (
       <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
       </HashRouter>
   );
  }
}

export default App;