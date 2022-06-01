import React from 'react';

type ManagementWriteProps = {};

const ManagementWrite = ({}: ManagementWriteProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="10" fill="#1876FB" />
      <rect width="32" height="32" rx="10" fill="white" fillOpacity="0.5" />
      <path
        d="M15.1667 9.33344H9.33335C8.89133 9.33344 8.4674 9.50904 8.15484 9.8216C7.84228 10.1342 7.66669 10.5581 7.66669 11.0001V22.6668C7.66669 23.1088 7.84228 23.5327 8.15484 23.8453C8.4674 24.1578 8.89133 24.3334 9.33335 24.3334H21C21.442 24.3334 21.866 24.1578 22.1785 23.8453C22.4911 23.5327 22.6667 23.1088 22.6667 22.6668V16.8334M21.4167 8.08344C21.7482 7.75192 22.1978 7.56567 22.6667 7.56567C23.1355 7.56567 23.5852 7.75192 23.9167 8.08344C24.2482 8.41496 24.4345 8.8646 24.4345 9.33344C24.4345 9.80228 24.2482 10.2519 23.9167 10.5834L16 18.5001L12.6667 19.3334L13.5 16.0001L21.4167 8.08344Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ManagementWrite;
