import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

render((
  <Router>
    <Main />
  </Router>
), document.getElementById('descriptions'));

// render(<Header />, document.getElementById('navbar'));

// render(<Footer />, document.getElementById('footer'));
