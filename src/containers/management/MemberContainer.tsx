import React from 'react';

import MemberCard from 'components/management/MemberCard';

type MemberContainerProps = {};

const MemberContainer = ({}: MemberContainerProps) => {
  return (
    <div className="member">
      <MemberCard />
    </div>
  );
};

export default MemberContainer;
