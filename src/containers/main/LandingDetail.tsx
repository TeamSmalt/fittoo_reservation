import React from 'react';

import FeatureIntro from 'components/main/FeatureIntro';

import LadingDetailPhoneImage from 'assets/svg/LadingDetailPhoneImage';
import UserLink from 'components/main/UserLink';

import { featureIntroData, userLinkData } from 'pages/main/mainData';

type LandingDetailProps = {};

const LandingDetail = ({}: LandingDetailProps) => {
  return (
    <div className="landing-detail">
      <div className="landing-detail__intro">
        <span className="title">올인원 운동 플랫폼</span>
        <span className="description">
          사람들과 소통할 수 있는 커뮤니티부터
          <br />
          다양한 코치들을 발견하고 예약까지 쉽게
          <br />
          모든 사람이 쉽고 재미있게 운동할 수 있습니다.
        </span>
      </div>

      <div className="landing-detail__feature-intro">
        {featureIntroData.map((data) => (
          <FeatureIntro
            title={data.title}
            description={data.description}
            image={data.image}
            key={data.id}
          />
        ))}
      </div>

      <div className="landing-detail__image">
        <LadingDetailPhoneImage />
      </div>

      <div className="landing-detail__link">
        {userLinkData.map((data) => (
          <UserLink
            title={data.title}
            image={data.image}
            link={data.link}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingDetail;
