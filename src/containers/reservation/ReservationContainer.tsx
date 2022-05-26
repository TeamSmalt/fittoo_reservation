import React from 'react';

import Calendar from 'components/common/Calendar';
import PrevStage from 'components/common/PrevStage';
import CoachCard from 'components/reservation/CoachCard';

import { useNavigate } from 'react-router-dom';
import SelectTime from 'components/reservation/SelectTime';

type ReservationContainerProps = {};

const ReservationContainer = ({}: ReservationContainerProps) => {
  const navigate = useNavigate();

  //! 이전 페이지로 이동
  const handleMovePrevState = () => navigate(-1);

  return (
    <div className="reservation">
      <PrevStage title="예약하기" onClick={handleMovePrevState} />

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
