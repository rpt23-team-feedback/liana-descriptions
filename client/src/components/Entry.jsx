import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Number(this.props.match.params.id),
      error: false,
      name: '',
      firstGame: '',
      secondGame: '',
      thirdGame: '',
      charities: [],
      value: '',
      min: '',
      numSold: '',
      helper: '',
      logoURL: '',
      topCost: '',
    }
  }

  componentDidMount() {
    const config = {
      url: `http://localhost:3663/bundleInfo/${this.state.id}`,
    }
    if (this.state.id >= 1 && this.state.id <= 100) {
      return axios(config)
      .then(({ data }) => {
        this.setState({
          helper: data.helper,
          logoURL: data.logoURL,
          name: data.name,
          min: data.minimum,
          value: data.value,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
    }
  }

  render () {
    if (this.state.error || this.state.id < 1 || this.state.id > 100 || this.state.id !== this.state.id) {
      return (
        <div>
          <main>please enter a valid bundle ID (1 - 100) in the URL path</main>
        </div>
      )
    }
    return (<div>
      <h1>descriptions</h1>
      <div>welcome to bundle {this.props.match.params.id}</div>
      <div className="blurb">
        Get the humble {this.state.name} bundle, so that you can play your way through *tier 2 game name*, *highest tier game name*, *second tier 2 game name*, plus several more. Even better, your payment will go toward *charities for this bundle*.
      </div>
      <div className="worth">${this.state.value} of awesome stuff</div>
      <div className="min">Pay what you want, starting at just ${this.state.min}!</div>
      <div className="sold">*number sold* bundles sold</div>
    </div>)
  }
}

export default Entry;
