import React from 'react';

import LandingIntro from 'containers/main/LandingIntro';

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  return (
    <div className="main">
      <LandingIntro />
    </div>
  );
};

export default MainPage;
