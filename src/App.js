import React, { Component } from 'react';
import './App.css';
import './Time.css';
import Block from './block';
import Time from './Time';
import Rank from './rank';

const handleStop = (count) => {
  if (count === 400) {
    if (confirm('Winnnnn!\nDo you want to start a new game?')) {
      location.reload();
    }
  }
};

class App extends Component {
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
    this.handleClick = this.handleClick.bind(this);
    this.firstClick = this.firstClick.bind(this);
    this.ArrayMapping = this.ArrayMapping.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }
  firstClick(numX, numY, TempArrayIn) {
    const TempArray = TempArrayIn;
    let bombNumsRemain = 0;
    for (let i = 0; i < 20; i += 1) {
      for (let j = 0; j < 20; j += 1) {
        const random = Math.floor(Math.random() * 1000);
        if (random % this.state.difficultyNum === 0) {
          TempArray[i][j].state = 'bomp';
          bombNumsRemain += 1;
        }
      }
    }
    for (let i = -1; i < 2; i += 1) {
      for (let j = -1; j < 2; j += 1) {
        if (numY + i >= 0 && numY + i < 20 && numX + j >= 0 && numX + j < 20) {
          if (TempArray[numY + i][numX + j].state === 'bomp') {
            TempArray[numY + i][numX + j].state = '0';
            bombNumsRemain -= 1;
          }
        }
      }
    }
    for (let i = 0; i < 20; i += 1) {
      for (let j = 0; j < 20; j += 1) {
        let count = 0;
        if (TempArray[i][j].state !== 'bomp') {
          for (let k = -1; k < 2; k += 1) {
            for (let l = -1; l < 2; l += 1) {
              if (i + k >= 0 && i + k < 20 && j + l >= 0 && j + l < 20 && TempArray[i + k][j + l].state === 'bomp') {
                count += 1;
              }
            }
          }
          TempArray[i][j].state = count.toString();
        }
      }
    }
    return [TempArray, bombNumsRemain];
  }
  handleClick(numX, numY, e, count) {
    let TempArray = this.state.BlockArray;
    let newBombNumsRemain = this.state.bombNumsRemain;
    let newStart = false;
    let newCount = count;
    if (TempArray[numY][numX].click === false) {
      newStart = true;
    }
    if (count === 0) {
      const re = (this.firstClick(numX, numY, TempArray));
      TempArray = re[0];
      newBombNumsRemain = re[1];
    }
    if (TempArray[numY][numX].click === false && TempArray[numY][numX].flag === false) {
      TempArray[numY][numX].click = true;
      newCount += 1;
      if (TempArray[numY][numX].state === 'bomp') {
        TempArray[numY][numX].state = 'bompClick';
        for (let i = 0; i < 20; i += 1) {
          for (let j = 0; j < 20; j += 1) {
            const test = TempArray[i][j];
            if (test.click === false && test.state === 'bomp' && test.flag === false) {
              TempArray[i][j].state = 'bompClick';
            }
            TempArray[i][j].click = true;
          }
        }
        newStart = false;
        alert('lose!!!');
      }
      if (TempArray[numY][numX].state === '0') {
        for (let k = -1; k <= 1; k += 1) {
          for (let l = -1; l <= 1; l += 1) {
            if (k !== 0 || l !== 0) {
              if (numY + k >= 0 && numY + k < 20 && numX + l >= 0 && numX + l < 20) {
                newCount = this.handleClick(numX + l, numY + k, e, newCount);
              }
            }
          }
        }
      }
    }
    this.setState({
      BlockArray: TempArray,
      count: newCount,
      start: newStart,
      bombNumsRemain: newBombNumsRemain,
    });
    handleStop(newCount);
    return newCount;
  }
  handleContextMenu(numX, numY, e) {
    let newBombNumsRemain = this.state.bombNumsRemain;
    e.preventDefault();
    const TempArray = this.state.BlockArray;
    if (TempArray[numY][numX].click === false) {
      TempArray[numY][numX].flag = !(TempArray[numY][numX].flag);
      if (TempArray[numY][numX].flag) {
        newBombNumsRemain -= 1;
      } else {
        newBombNumsRemain += 1;
      }
      let newCount = this.state.count;
      if (TempArray[numY][numX].state === 'bomp') {
        if (TempArray[numY][numX].flag) {
          newCount += 1;
        } else {
          newCount -= 1;
        }
      }
      this.setState({
        BlockArray: TempArray,
        count: newCount,
        bombNumsRemain: newBombNumsRemain,
      });
      handleStop(newCount);
    }
  }
  handleDifficultyChange(e) {
    const newDifficulty = e.target.value;
    let newDifficultyNum = 8;
    if (newDifficulty === 'medium') {
      newDifficultyNum = 6;
    }
    if (newDifficulty === 'hard') {
      newDifficultyNum = 4;
    }
    const TempArray = [];
    for (let i = 0; i < 20; i += 1) {
      TempArray.push([]);
      for (let j = 0; j < 20; j += 1) {
        TempArray[i].push({ state: '0', click: false, flag: false });
      }
    }
    this.setState({
      BlockArray: TempArray,
      count: 0,
      counter: 0,
      start: false,
      difficultyNum: newDifficultyNum,
    });
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
          <Rank />
        </div>
      </div>
    );
  }
}

export default App;
