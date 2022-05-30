import React from 'react';

import Message from 'assets/svg/Message';
import Phone from 'assets/svg/Phone';

type CoachCardProps = {};

const CoachCard = ({}: CoachCardProps) => {
  return (
    <div className="coach-card">
      <div className="coach-card__image">이미지 영역</div>
      <div className="coach-card__info">
        <span className="coach-card__name">성석원 코치님</span>
        <span className="coach-card__description">
          근성장 보장, 체계적인 식단관리로 확실하게 변화시켜드립니다.
        </span>
        <div className="coach-card__rate">
          <span>💚💚💚💚💚</span>
          <span>4.82(122)</span>
        </div>
        <div className="coach-card__send">
          <a href="tel:01055879732">
            <Phone />
          </a>

          <Message />
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
