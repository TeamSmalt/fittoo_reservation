import React from 'react';

import Phone from 'assets/svg/Phone';
import DefaultImage from 'assets/svg/DefaultImage';
import RatingStar from 'assets/svg/RatingStar';

type CoachCardProps = {};

const CoachCard = ({}: CoachCardProps) => {
  return (
    <div className="coach-card">
      <div className="coach-card__image">
        <DefaultImage />
      </div>
      <div className="coach-card__info">
        <span className="coach-card__name">성석원 코치님</span>
        <span className="coach-card__description">
          근성장 보장, 체계적인 식단관리로 확실하게 변화시켜드립니다.
        </span>
        <div className="coach-card__rate">
          <RatingStar />
          4.82(122)
        </div>
        <div className="coach-card__send">
          <a href="tel:01055879732">
            <Phone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
