import React from 'react';
import axios from 'axios';
import Clock from './Clock.jsx';
import styles from '../styles/topStyledComponents.js';
import GlobalFonts from '../../../fonts/fonts.js';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      error: false,
      name: `HB:${this.props.match.params.id} - Here's a Bundle! :0`,
      firstGame: 'One Night on Mount Typhon',
      secondGame: 'Twin Star',
      thirdGame: 'Dad Tepes: Dracula at Home',
      charities: ['Walks Under Sky', 'crxssings'],
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
      );
    }
    return (
      <styles.Background>
        <GlobalFonts></GlobalFonts>
        <br></br>
        <styles.Software></styles.Software>
        <br></br>
        <br></br>
        <br></br>
        <styles.BundleLogo style={{
          backgroundImage: `url(${this.state.logoURL})`,
        }}>
          <div style={{
            opacity: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {this.state.name}
          </div>
        </styles.BundleLogo>
        <br></br>
        <styles.Name className="name">Humble Games Bundle:  {this.state.name}</styles.Name>
        <br></br>
        <br></br>
        <styles.Blurb className="blurb">
          We've teamed with {this.state.helper} to bring you our latest bundle, so that you can play your way through {this.state.firstGame}, {this.state.secondGame}, and {this.state.thirdGame}, plus several MORE! Even better, your payment will go toward {(
            this.state.charities.length > 2
            ? `${this.state.charities[0]}, ${this.state.charities[1]}, and ${this.state.charities[2]}`
            : `${this.state.charities[0]} and ${this.state.charities[1]}`
          )}.
        </styles.Blurb>
        <br></br>
        <styles.Infobar className="infobar">
          <table>
            <tbody>
              <tr>
                <td>${this.state.value} worth of awesome stuff  </td>
                <td><span> </span><styles.Dot> </styles.Dot></td>
                <td> Pay ${this.state.min} or more </td>
                <td><styles.Dot> </styles.Dot></td>
                <td> {this.state.numSold} bundles sold</td>
              </tr>
            </tbody>
          </table>
        </styles.Infobar>
        <br></br>
        <styles.Button className="get">
          <div>GET THE BUNDLE</div>
        </styles.Button>
        <br></br>
        <styles.TimeLeft>Time Left</styles.TimeLeft>
        <br></br>
        <Clock countdown={this.state.countdown} id={this.state.id}/>
        <br></br>
        <br></br>
        <styles.BellWrapper>
          <table>
            <tbody>
              <tr>
                <td>
                  <styles.Bell></styles.Bell>
                </td>
                <td>
                  <styles.Reminder>REMIND</styles.Reminder>
                </td>
              </tr>
            </tbody>
          </table>
        </styles.BellWrapper>
        <br></br>
      </styles.Background>
    );
  }
}

export default Entry;
