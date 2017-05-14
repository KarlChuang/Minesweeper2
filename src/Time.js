import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  static counterRefresh() {
    this.setState({
      counter: 0,
    });
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.counterRefresh = this.counterRefresh.bind(this);
  }
  componentWillMount() {
    this.setState({
      counter: this.props.counter,
    });
  }
  componentDidUpdate() {
    if (this.timerID === undefined) {
      this.timerID = setInterval(
        () => this.tick(this.state, this.props),
      1000);
    }
    if (this.timerID === null && this.props.start) {
      this.counterRefresh();
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
