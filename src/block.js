import React from 'react';
import './block.css';

const clickNameIdentify = (click, state, flag) => {
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
};

const contentIdentify = (flag, click, state) => {
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
};

const Block = (props) => {
  const Props = props;
  const state = Props.state; // string
  const click = Props.click; // bool
  const flag = Props.flag; // flag
  const handleClick = Props.onClick;
  const handleContextMenu = Props.onContextMenu;
  const numX = Props.numx;
  const numY = Props.numy;
  const name = clickNameIdentify(click, state, flag);
  const content = contentIdentify(flag, click, state);
  return (
    <button
      className={name}
      onClick={e => handleClick(numX, numY, e)}
      onContextMenu={e => handleContextMenu(numX, numY, e)}
    >
      {content}
    </button>
  );
};

export default Block;
