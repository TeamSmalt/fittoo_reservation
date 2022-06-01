import React from 'react';

import LeftArrow from 'assets/svg/LeftArrow';
import { useNavigate } from 'react-router-dom';

type PrevStageProps = {
  title: string;
};

const PrevStage = ({ title }: PrevStageProps) => {
  const navigate = useNavigate();

  const onPrev = () => navigate(-1);

  return (
    <div className="prev-stage">
      <LeftArrow onClick={onPrev} />
      <span>{title}</span>
    </div>
  );
};

export default PrevStage;
