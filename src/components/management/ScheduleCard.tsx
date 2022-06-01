import React from 'react';

import DefaultImage from 'assets/svg/DefaultImage';
import Phone from 'assets/svg/Phone';
import ManagementWrite from 'assets/svg/ManagementWrite';
import ChatIcon from 'assets/svg/ChatIcon';

import { Link } from 'react-router-dom';

type ScheduleCardProps = {};

const ScheduleCard = ({}: ScheduleCardProps) => {
  return (
    <div className="schedule-card">
      <div className="schedule-card__time">10:00 AM</div>
      <div className="schedule-card__user">
        <div className="schedule-card__image">
          <DefaultImage />
        </div>
        <div className="schedule-card__info">
          <div className="schedule-card__name">성석민 코치님</div>
          <div className="schedule-card__contact">
            <Link to="">
              <ManagementWrite />
            </Link>

            <a href="tel:">
              <Phone />
            </a>

            <Link to="">
              <ChatIcon />
            </Link>

            <button>예약취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
