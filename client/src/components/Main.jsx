import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Entry from './Entry.jsx';
import Home from './Home.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Redirect exact from='/' to='/1' />
          <Route path='/:id' component={Entry} />
        </Switch>
      </main>
    );
  }
}

export default Main;
