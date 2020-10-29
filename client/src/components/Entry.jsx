import React from 'react';
import axios from 'axios';
import Clock from './Clock.jsx';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      error: false,
      name: `Humble Bundle Number ${this.props.match.params.id}`,
      firstGame: 'Type One Game',
      secondGame: 'Type Two Game',
      thirdGame: 'Type Three Game',
      charities: ['Charity 1', 'Charity 2'],
      value: 150,
      min: 1,
      numSold: 'Many',
      helper: `@num${this.props.match.params.id}helper`,
      logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/imgnotfound.png',
      topCost: 25,
      countdown: '2020-11-20 23:59:59',
    }
  }

  componentDidMount() {
    this.getOwnedData();
  }

  getCharityData() {}

  getContributorData() {}

  getItemData() {}

  getOwnedData() {
    const config = {
	    url: `http://54.193.6.166:3663/bundleInfo/${this.state.id}`,
    }
    if (this.state.id >= 1 && this.state.id <= 100) {
      return axios(config)
      .then(({ data }) => {
	      if (data) {
          this.setState({
            helper: data.helper,
            logoURL: data.logoURL,
            name: data.name,
            min: data.minimum,
            value: data.value,
          });
        }
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
    }
  }

  render () {
    if (this.state.error || parseInt(this.state.id) < 1 || parseInt(this.state.id) > 100 || this.state.id !== this.state.id) {
      return (
        <div>
          <main>please enter a valid bundle ID (1 - 100) in the URL path</main>
        </div>
      )
    }
    return (<div>
      <h1>descriptions</h1>
      <div>welcome to bundle {this.props.match.params.id}</div>
      <img src={this.state.logoURL} height="150" width="300"></img>
      <div className="blurb">
        Get the humble {this.state.name} bundle, so that you can play your way through {this.state.firstGame}, {this.state.secondGame}, {this.state.thirdGame}, plus several more. Even better, your payment will go toward {this.state.charities.join(', ')}.
      </div>
      <div className="worth">${this.state.value} of awesome stuff</div>
      <div className="min">Pay what you want, starting at just ${this.state.min}!</div>
      <div className="sold">{this.state.numSold} bundles sold</div>
      <Clock countdown={this.state.countdown} id={this.state.id}/>
    </div>)
  }
}

export default Entry;
