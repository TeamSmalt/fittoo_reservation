import React, { useMemo, useState } from 'react';

import dayjs from 'dayjs';
import LeftArrow from 'assets/svg/LeftArrow';
import RightArrow from 'assets/svg/RightArrow';

type CalendarProps = {};

const days = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = ({}: CalendarProps) => {
  //! 현재 날짜
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs());

  const onChangeCurrentDate = (date: number) => setCurrentDate(dayjs().set('date', date));

  //! 현재 달
  const month = useMemo(() => currentDate.get('month') + 1, [currentDate]);

  //! 한 주의 시작과 끝
  const getDaysOfWeek = useMemo(() => {
    const dateArr = [];

    for (let i = 0; i < 7; i++) {
      const date = currentDate.day(i).format('DD');

      dateArr.push({ dayNum: parseInt(date), koDay: days[i] });
    }

    return dateArr;
  }, [currentDate]);

  //! 몇 주
  const getWeekNum = useMemo(() => Math.ceil(currentDate.get('D') / 7), [currentDate]);

  //! 이전 주, 다음 주
  const nextWeek = () => setCurrentDate(currentDate.add(7, 'day'));
  const prevWeek = () => setCurrentDate(currentDate.subtract(7, 'day'));

  return (
    <div className="calendar">
      <div className="calendar__select">
        <LeftArrow onClick={prevWeek} />

        <span>{`${month}월 ${getWeekNum}주`}</span>

        <RightArrow onClick={nextWeek} />
      </div>

      <div className="calendar__days">
        {getDaysOfWeek.map((week) => (
          <div className="calendar__day" key={week.koDay}>
            <span className="calendar__koDay">{week.koDay}</span>
            <button
              className={
                currentDate.get('date') === week.dayNum
                  ? 'calendar__selectBtn calendar--selected'
                  : 'calendar__selectBtn'
              }
              onClick={() => onChangeCurrentDate(week.dayNum)}
            >
              <span className="calendar__dayNum">{week.dayNum}</span>
              <span className="calendar__event">・</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
