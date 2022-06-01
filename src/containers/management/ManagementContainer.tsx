import React, { useMemo } from 'react';

import PrevStage from 'components/common/PrevStage';

import { NavLink, Outlet, useLocation } from 'react-router-dom';

type ManagementContainerProps = {};

const ManagementContainer = ({}: ManagementContainerProps) => {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    const path = pathname.split('/')[2];

    switch (path) {
      case 'schedules':
        return '스케줄';
      case 'members':
        return '회원관리';
      case 'records':
        return '기록';
      default:
        return '';
    }
  }, [pathname]);

  return (
    <div className="management">
      <PrevStage title={title} />
      <div className="management__nav">
        <NavLink
          to="/schedules"
          className={({ isActive }) =>
            isActive ? 'management__link select' : 'management__link'
          }
        >
          스케줄
        </NavLink>

        <NavLink
          to="/members"
          className={({ isActive }) =>
            isActive ? 'management__link select' : 'management__link'
          }
        >
          회원관리
        </NavLink>
      </div>

      <div className="management__content">
        <Outlet />
      </div>
    </div>
  );
};

export default ManagementContainer;
