import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentWillMount() {
    this.setState({
      counter: this.props.counter,
    });
    this.refreshTimer = this.refreshTimer.bind(this);
  }
  componentDidUpdate() {
    if (this.timerID === undefined) {
      this.timerID = setInterval(
        () => this.tick(this.state, this.props),
      1000);
    }
    if (this.timerID === null && this.props.start) {
      this.refreshTimer();
    }
    if (!this.props.start) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
  }
  tick() {
    this.setState(prev => ({
      counter: prev.counter + 1,
    }));
  }
  refreshTimer() {
    this.setState({
      counter: 0,
    });
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  render() {
    return (
      <div>
        <div className="Time">Your Time: {this.state.counter} s</div>
        <hr color="black" size="1" width="90%" />
      </div>
    );
  }
}

export default Time;
