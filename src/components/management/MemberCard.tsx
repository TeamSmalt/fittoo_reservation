import React from 'react';

import DefaultImage from 'assets/svg/DefaultImage';
import ManagementWrite from 'assets/svg/ManagementWrite';
import Phone from 'assets/svg/Phone';
import ChatIcon from 'assets/svg/ChatIcon';

import { Link } from 'react-router-dom';

type MemberCardProps = {};

const MemberCard = ({}: MemberCardProps) => {
  return (
    <div className="member-card">
      <div className="member-card__image">
        <DefaultImage />
      </div>
      <div className="member-card__info">
        <span className="member-card__name">김용민 회원님 (총 3회 수업)</span>
        <span className="member-card__schedule">예정 수업일: 2022년 4월 25일</span>
        <span className="member-card__last">마지막 수업일: 2022년 4월 20일</span>
      </div>
      <div className="member-card__contact">
        <Link to="">
          <ManagementWrite />
        </Link>

        <a href="tel:">
          <Phone />
        </a>

        <Link to="">
          <ChatIcon />
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
