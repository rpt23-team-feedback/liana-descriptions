import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
      name: '',
      firstGame: '',
      secondGame: '',
      thirdGame: '',
      charities: [],
      value: '',
      min: '',
      numSold: '',
    }
  }

  render () {
    return (<div>
      <h1>descriptions</h1>
      <div>welcome to bundle {this.props.match.params.id}</div>
      <div className="blurb">
        Get the *bundle name*, so that you can play your way through *tier 2 game name*, *highest tier game name*, *second tier 2 game name*, plus several more. Even better, your payment will go toward *charities for this bundle*.
      </div>
      <div className="worth">*value* of awesome stuff</div>
      <div className="min">Pay *value* or more!</div>
      <div className="sold">*number sold* bundles sold</div>
    </div>)
  }
}

export default Entry;
