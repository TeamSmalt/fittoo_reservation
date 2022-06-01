import MemberCard from 'components/management/MemberCard';
import React from 'react';

type MemberContainerProps = {};

const MemberContainer = ({}: MemberContainerProps) => {
  return (
    <div className="member">
      <MemberCard />
    </div>
  );
};

export default MemberContainer;
