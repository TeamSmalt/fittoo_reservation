import React from 'react';

import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import SignupPage from 'pages/signup/SignupPage';
import ManagementPage from 'pages/management/ManagementPage';
import ReservationPage from 'pages/reservation/ReservationPage';
import ScheduleContainer from 'containers/management/ScheduleContainer';
import MemberContainer from 'containers/management/MemberContainer';

function App() {
  return (
    <div className="fittoo">
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="management" element={<ManagementPage />}>
          <Route path="schedules" element={<ScheduleContainer />} />
          <Route path="members" element={<MemberContainer />} />
        </Route>
        <Route path="coaches/:coachId" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
