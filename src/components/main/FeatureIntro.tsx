import React, { Fragment } from 'react';

type FeatureIntroProps = { title: string; description: string; image: string };

const FeatureIntro = ({ title, description, image }: FeatureIntroProps) => {
  return (
    <div className="feature-intro">
      <img src={image} alt="" />
      <span className="title">{title}</span>
      <span className="description">
        {description.split('\n').map((txt, index) => (
          <Fragment key={index}>
            {txt}
            <br />
          </Fragment>
        ))}
      </span>
    </div>
  );
};

export default FeatureIntro;
