import React from 'react';

type RightArrowProps = {
  onClick: () => void;
};

const RightArrow = ({ onClick }: RightArrowProps) => {
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
        d="M9.5 18L15.5 12L9.5 6"
        stroke="#090A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
