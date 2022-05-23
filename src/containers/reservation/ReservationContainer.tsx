import React from 'react';

import LeftArrow from 'assets/svg/LeftArrow';
import Phone from 'assets/svg/Phone';
import Message from 'assets/svg/Message';
import Calendar from 'components/calendar/Calendar';

type ReservationContainerProps = {};

const ReservationContainer = ({}: ReservationContainerProps) => {
  return (
    <div className="reservation">
      <div className="reservation__title">
        <LeftArrow onClick={() => console.log('hi')} />
        <span>예약하기</span>
      </div>
      <div className="reservation__coach">
        <div className="reservation__coachImage">이미지 영역</div>
        <div className="reservation__coachInfo">
          <span className="reservation__coachInfo--name">성석원 코치님</span>
          <span className="reservation__coachInfo--description">
            근성장 보장, 체계적인 식단관리로 확실하게 변화시켜드립니다.
          </span>
          <div className="reservation__coachInfo--rate">
            <span>💚💚💚💚💚</span>
            <span>4.82(122)</span>
          </div>
          <div className="reservation__coachInfo--send">
            <a href="tel:01055879732">
              <Phone />
            </a>

            <Message />
          </div>
        </div>
      </div>
      <div className="reservation__calendar">
        <Calendar />
      </div>
      <div className="reservation__time"></div>
    </div>
  );
};

export default ReservationContainer;
