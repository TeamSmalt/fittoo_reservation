import React from 'react';

import Calendar from 'components/common/Calendar';
import ScheduleCard from 'components/management/ScheduleCard';

type ScheduleContainerProps = {};

const ScheduleContainer = ({}: ScheduleContainerProps) => {
  return (
    <div className="schedule">
      <Calendar />

      <ScheduleCard />
    </div>
  );
};

export default ScheduleContainer;
