import React, { Component } from 'react';

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

export default Test;
