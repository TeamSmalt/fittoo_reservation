import React from 'react';

type IntroProps = {};

const Intro = ({}: IntroProps) => {
  return (
    <div className="intro">
      <div className="intro__top">
        <span className="title">Fit Too</span>
        <span className="description">
          코치와 회원이 함께 만드는
          <br />
          운동 커뮤니티 플랫폼
        </span>
      </div>
      <div className="intro__bottom">
        <span>
          핏투 서비스가 곧 시작됩니다.
          <br />
          핏투의 초기 멤버가 되어주세요!
        </span>
      </div>
    </div>
  );
};

export default Intro;
