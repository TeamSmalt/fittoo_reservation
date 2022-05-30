import React from 'react';

type DefaultImageProps = {};

const DefaultImage = ({}: DefaultImageProps) => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="150" cy="150" r="150" fill="#E3E4E9" />
      <path
        d="M108.325 99.9916C108.325 76.9798 126.98 58.325 149.992 58.325C173.004 58.325 191.659 76.9798 191.659 99.9916V108.325C191.659 131.337 173.004 149.992 149.992 149.992C126.98 149.992 108.325 131.337 108.325 108.325V99.9916Z"
        fill="#F7F8F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.3088 255.45C52.2574 208.547 96.6185 172.912 149.996 172.912C203.368 172.912 247.726 208.54 256.681 255.436C229.488 282.951 191.729 300 149.988 300C108.254 300 70.5005 282.956 43.3088 255.45Z"
        fill="#F7F8F9"
      />
    </svg>
  );
};

export default DefaultImage;
