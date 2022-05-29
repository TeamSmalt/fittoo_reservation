import React from 'react';

import { allTime } from 'pages/reservation/reservationData';

type SelectTimeProps = {};

const SelectTime = ({}: SelectTimeProps) => {
  return (
    <div className="select-time">
      {allTime.map((time) => (
        <button className="select-time__time" key={time.id}>
          {time.text}
        </button>
      ))}
    </div>
  );
};

export default SelectTime;
