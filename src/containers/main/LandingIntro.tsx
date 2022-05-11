import React from 'react';

import Header from 'components/main/Header';
import Intro from 'components/main/Intro';
import IntroImages from 'components/main/IntroImages';

type LandingIntroProps = {};

const LandingIntro = ({}: LandingIntroProps) => {
  return (
    <div className="landing-intro">
      <Header />
      <div className="landing-intro__content">
        <Intro />
        <IntroImages />
      </div>
    </div>
  );
};

export default LandingIntro;
