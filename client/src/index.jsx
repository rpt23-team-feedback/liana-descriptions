import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main.jsx';

render((
  <Router>
    <Main />
  </Router>
), document.getElementById('descriptions'));
