// components/Counter.js

import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrementClick = () => {
    // console.log('counting');
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} </h1>
        <h2> The count is: {this.state.count} </h2>
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }
}

export default Counter;
