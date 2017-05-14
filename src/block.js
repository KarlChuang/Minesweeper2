import React, { Component } from 'react';
import './block.css';

class Block extends Component {
  render() {
    const state = this.props.state; // string
    const click = this.props.click; // bool
    const flag = this.props.flag; // flag
    const handleClick = this.props.onClick;
    const handleContextMenu = this.props.onContextMenu;
    const numX = this.props.numx;
    const numY = this.props.numy;
    return (
      <div
        className={click === true ? (((state === 'bompClick') || (flag === true && state !== 'bomp')) ? 'BlockDownFalse' : 'BlockDown') : 'Block'}
        onClick={e => handleClick(numX, numY, e)}
        onContextMenu={e => handleContextMenu(numX, numY, e)}
      >
        {
          flag === true ? (<img src="./pic/flag.png" alt="" />) : (
            click === false ? null : (
              state === 'bomp' ? (
                <img src="./pic/bomp.png" alt="" />
              ) : (
                state === '0' ? null : (
                  state === 'bompClick' ? (
                    <img src="./pic/bompClick.png" alt="" />
                  ) : (
                    <div className="BlockType">{state}</div>
                  )
                )
              )
            )
          )
        }
      </div>
    );
  }
}

export default Block;
