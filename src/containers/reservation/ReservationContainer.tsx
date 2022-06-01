import React from 'react';

import Calendar from 'components/common/Calendar';
import PrevStage from 'components/common/PrevStage';
import CoachCard from 'components/reservation/CoachCard';
import SelectTime from 'components/reservation/SelectTime';

type ReservationContainerProps = {};

const ReservationContainer = ({}: ReservationContainerProps) => {
  return (
    <div className="reservation">
      <PrevStage title="예약하기" />

      <CoachCard />

      <Calendar />

      <SelectTime />

      <div className="reservation__reserve">
        <button>예약하기</button>
      </div>
    </div>
  );
};

export default ReservationContainer;
