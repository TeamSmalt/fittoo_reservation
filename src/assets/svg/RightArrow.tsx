import React from 'react';

type RightArrowProps = {};

const RightArrow = ({}: RightArrowProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 12.0001H19.5M19.5 12.0001L12.5 5M19.5 12.0001L12.5 19"
        stroke="#1876FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
