import React from 'react';

import LeftArrow from 'assets/svg/LeftArrow';

type PrevStageProps = {
  title: string;
  onClick: () => void;
};

const PrevStage = ({ title, onClick }: PrevStageProps) => {
  return (
    <div className="prev-stage">
      <LeftArrow onClick={onClick} />
      <span>{title}</span>
    </div>
  );
};

export default PrevStage;
