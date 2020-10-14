import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
  state = {
    online: true,
  }

  render() {
    const { online } = this.state;

    return (
      <div>
        <h1>descriptions</h1>
      </div>
    );
  }
};

ReactDOM.render(<Test />, document.getElementById('descriptions'));

export default Test;
