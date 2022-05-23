import React from 'react';

type CalendarLeftArrowProps = {
  onClick: () => void;
};

const CalendarLeftArrow = ({ onClick }: CalendarLeftArrowProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M15.5 18L9.5 12L15.5 6"
        stroke="#090A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarLeftArrow;
