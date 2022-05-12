import React from 'react';

import LandingIntro from 'containers/main/LandingIntro';
import LandingDetail from 'containers/main/LandingDetail';

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  return (
    <div className="main">
      <LandingIntro />
      <LandingDetail />
    </div>
  );
};

export default MainPage;
