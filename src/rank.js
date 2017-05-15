import React from 'react';
import './rank.css';

const ArrayMapping = (data) => {
  const sorting = (SortArray) => {
    const sortArray = SortArray;
    const sortDiv = [];
    for (let i = 0; i < sortArray.length - 1; i += 1) {
      for (let j = i + 1; j < sortArray.length; j += 1) {
        if (sortArray[i].time > sortArray[j].time) {
          const ss = sortArray[i];
          sortArray[i] = sortArray[j];
          sortArray[j] = ss;
        }
      }
    }
    for (let i = 0; i < sortArray.length; i += 1) {
      const sortData = sortArray[i];
      sortDiv.push(
        <div
          key={sortData.name + sortData.time.toString() + sortData.mode.toString()}
          className="RankData"
        >
          {(i + 1).toString()}. { sortData.name } { sortData.time.toString() }s
        </div>,
      );
    }
    return sortDiv;
  };
  let Hard = [];
  let Medium = [];
  let Easy = [];
  for (let i = 0; i < data.length; i += 1) {
    const Mode = data[i].mode;
    if (Mode === 1) {
      Easy.push(data[i]);
    } else if (Mode === 2) {
      Medium.push(data[i]);
    } else if (Mode === 3) {
      Hard.push(data[i]);
    }
  }
  Hard = sorting(Hard);
  Medium = sorting(Medium);
  Easy = sorting(Easy);
  return ({
    hard: Hard,
    medium: Medium,
    easy: Easy,
  });
};

const Rank = (props) => {
  const Props = props;
  const RenderData = ArrayMapping(Props.data);
  return (
    <div>
      <div className="Type">
        Easy
        {RenderData.easy}
      </div>
      <div className="Type">
        Medium
        {RenderData.medium}
      </div>
      <div className="Type">
        Hard
        {RenderData.hard}
      </div>
    </div>
  );
};

export default Rank;
