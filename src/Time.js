import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  render() {
    return (
      <div>
        <div className="Time">Your Time: {this.props.counter} s</div>
        <hr color="black" size="1" width="90%" />
      </div>
    );
  }
}

export default Time;
