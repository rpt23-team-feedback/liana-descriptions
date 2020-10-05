import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
    }
  }

  render () {
    return (<div>
      <h1>setting the baseline</h1>
      <div>{(this.state.online) ? 'we\'re online' : 'we\'re offline'}</div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));