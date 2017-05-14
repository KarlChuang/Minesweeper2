import React, { Component } from 'react';
import './App.css';
import './Time.css';
import Block from './block';
import Time from './Time';

class App extends Component {
  render() {
    return (
      <div>
        <Block
          state="bomp"
          click={true}
          flag={false}
          key="2" numx={1} numy={1}
          onClick={() => { console.log('Click'); }}
          onContextMenu={() => { console.log('RightClick'); }}
        />
        <Time counter={0} start={true} />
      </div>
    );
  }

  /*
  constructor(props) {
    super(props);
    const TempArray = [];
    for (let i = 0; i < 20; i += 1) {
      TempArray.push([]);
      for (let j = 0; j < 20; j += 1) {
        TempArray[i].push({ state: '0', click: false, flag: false });
      }
    }
    this.state = {
      BlockArray: TempArray,
      count: 0,
      counter: 0,
      start: false,
      difficultyNum: 8,
      bombNumsRemain: 0,
    };
    this.ArrayMapping = this.ArrayMapping.bind(this);
  }
  ArrayMapping(inputArray, numY) {
    const newArray = [];
    for (let i = 0; i < 20; i += 1) {
      newArray.splice(i, 0, (
        <Block
          state={inputArray[i].state}
          click={inputArray[i].click}
          flag={inputArray[i].flag}
          key={(i.toString())} numx={i} numy={numY}
          onClick={(numX, numY2, e) => this.handleClick(numX, numY2, e, this.state.count)}
          onContextMenu={this.handleContextMenu}
        />
      ));
    }
    return newArray;
  }
  render() {
    const line = [];
    for (let i = 0; i < 20; i += 1) {
      line.push(this.ArrayMapping(this.state.BlockArray[i], i));
    }
    return (
      <div className="App">
        <h1 className="Title">踩地雷</h1>
        <div className="div1">
          <div className="BlockLine">{line[0]}</div>
          <div className="BlockLine">{line[1]}</div>
          <div className="BlockLine">{line[2]}</div>
          <div className="BlockLine">{line[3]}</div>
          <div className="BlockLine">{line[4]}</div>
          <div className="BlockLine">{line[5]}</div>
          <div className="BlockLine">{line[6]}</div>
          <div className="BlockLine">{line[7]}</div>
          <div className="BlockLine">{line[8]}</div>
          <div className="BlockLine">{line[9]}</div>
          <div className="BlockLine">{line[10]}</div>
          <div className="BlockLine">{line[11]}</div>
          <div className="BlockLine">{line[12]}</div>
          <div className="BlockLine">{line[13]}</div>
          <div className="BlockLine">{line[14]}</div>
          <div className="BlockLine">{line[15]}</div>
          <div className="BlockLine">{line[16]}</div>
          <div className="BlockLine">{line[17]}</div>
          <div className="BlockLine">{line[18]}</div>
          <div className="BlockLine">{line[19]}</div>
        </div>
        <div className="div2">
          <div className="Time" style={{ marginTop: '5px' }}>
            Difficulty:
            <select onChange={this.handleDifficultyChange} name="Difficulty">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <hr color="black" size="1" width="90%" />
          <Time counter={this.state.counter} start={this.state.start} />
          <div className="Time">Bomb Remain: {this.state.bombNumsRemain}</div>
          <hr color="black" size="1" width="90%" />
        </div>
      </div>
    );
  }
  */
}

export default App;
