import React, { Component } from 'react';
import './block.css';

class Block extends Component {
  clickNameIdentify(click, state, flag) {
    let name = '';
    if (click === true) {
      if ((state === 'bompClick') || (flag === true && state !== 'bomp')) {
        name = 'BlockDownFalse';
      } else {
        name = 'BlockDown';
      }
    } else {
      name = 'Block';
    }
    return name;
  }
  contentIdentify(flag, click, state) {
    if (flag === true) {
      return (<img src="./pic/flag.png" alt="" />);
    } else if (click === false) {
      return null;
    } else if (state === 'bomp') {
      return (<img src="./pic/bomp.png" alt="" />);
    } else if (state === '0') {
      return null;
    } else if (state === 'bompClick') {
      return (<img src="./pic/bompClick.png" alt="" />);
    } return state;
  }
  render() {
    const state = this.props.state; // string
    const click = this.props.click; // bool
    const flag = this.props.flag; // flag
    const handleClick = this.props.onClick;
    const handleContextMenu = this.props.onContextMenu;
    const numX = this.props.numx;
    const numY = this.props.numy;
    const name = this.clickNameIdentify(click, state, flag);
    const content = this.contentIdentify(flag, click, state);
    return (
      <button
        className={name}
        onClick={e => handleClick(numX, numY, e)}
        onContextMenu={e => handleContextMenu(numX, numY, e)}
      >
        {content}
      </button>
    );
  }
}

export default Block;
