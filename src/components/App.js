import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './Home';

import './App.scss';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
       </BrowserRouter>
   );
  }
}

export default App;