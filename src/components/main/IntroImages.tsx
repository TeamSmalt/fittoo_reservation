import React from 'react';

import IntroPhoneImageA from 'assets/svg/IntroPhoneImageA';
import IntroPhoneImageB from 'assets/svg/IntroPhoneImageB';
import IntroPhoneImageC from 'assets/svg/IntroPhoneImageC';

type IntroImagesProps = {};

const IntroImages = ({}: IntroImagesProps) => {
  return (
    <div className="images">
      <IntroPhoneImageA />
      <IntroPhoneImageB />
      <IntroPhoneImageC />
    </div>
  );
};

export default IntroImages;
