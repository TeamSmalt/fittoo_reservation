import React from 'react';

import Header from 'components/main/Header';
import Intro from 'components/main/Intro';
import IntroPhoneImage from 'assets/svg/IntroPhoneImage';

type LandingIntroProps = {};

const LandingIntro = ({}: LandingIntroProps) => {
  return (
    <div className="landing-intro">
      <Header />
      <div className="landing-intro__content">
        <Intro />
        <IntroPhoneImage />
      </div>
    </div>
  );
};

export default LandingIntro;
