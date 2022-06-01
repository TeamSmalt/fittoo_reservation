import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import SignupPage from 'pages/signup/SignupPage';
import ManagementPage from 'pages/management/ManagementPage';
import ReservationPage from 'pages/reservation/ReservationPage';
import ScheduleContainer from 'containers/management/ScheduleContainer';
import MemberContainer from 'containers/management/MemberContainer';

function App() {
  return (
    <div className="fittoo">
      <div className="nav">
        <Link to="login">로그인</Link>
        <Link to="signup">회원가입</Link>
        <Link to="schedules">스케줄 & 회원관리</Link>
        <Link to="coaches/1">코치 상세페이지</Link>
      </div>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route element={<ManagementPage />}>
          <Route path="schedules" element={<ScheduleContainer />} />
          <Route path="members" element={<MemberContainer />} />
        </Route>
        <Route path="coaches/:coachId" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
