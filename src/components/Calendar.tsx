import React, { useMemo, useState } from 'react';

import dayjs from 'dayjs';
import CalendarLeftArrow from 'assets/svg/CalendarLeftArrow';
import CalendarRightArrow from 'assets/svg/CalendarRightArrow';

type CalendarProps = {};

const days = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = ({}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs());

  const month = useMemo(() => currentDate.get('month') + 1, [currentDate]);

  const getDaysOfWeek = useMemo(() => {
    const dateArr = [];

    let startOfWeek = parseInt(currentDate.startOf('week').format('DD'));
    const lastDate = currentDate.daysInMonth();

    for (let i = 0; i < 7; i++) {
      if (startOfWeek > lastDate) startOfWeek = 1;

      dateArr.push({ dayNum: startOfWeek++, koDay: days[i] });
    }

    return dateArr;
  }, [currentDate]);

  const getWeekNum = useMemo(() => Math.ceil(currentDate.get('D') / 7), [currentDate]);

  const nextWeek = () => setCurrentDate(currentDate.add(7, 'day'));
  const prevWeek = () => setCurrentDate(currentDate.subtract(7, 'day'));

  return (
    <div className="calendar">
      <div className="calendar__select">
        <CalendarLeftArrow onClick={prevWeek} />

        <span>{`${month}월 ${getWeekNum}주`}</span>

        <CalendarRightArrow onClick={nextWeek} />
      </div>

      <div className="calendar__days">
        {getDaysOfWeek.map((week) => (
          <div className="calendar__day" key={week.koDay}>
            <span className="calendar__day--koDay">{week.koDay}</span>
            <span className="calendar__day--dayNum">{week.dayNum}</span>
            <span className="calendar__day--event">・</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
