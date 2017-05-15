import React from 'react';
import './Time.css';

const Time = (props) => {
  const Props = props;
  return (
    <div>
      <div className="Time">Your Time: {Props.counter} s</div>
      <hr color="black" size="1" width="90%" />
    </div>
  );
};

export default Time;
