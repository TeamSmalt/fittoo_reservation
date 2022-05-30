import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from 'pages/SignupPage';

import ReservationPage from 'pages/reservation/ReservationPage';

function App() {
  return (
    <div className="fittoo">
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="coaches/:coachId" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
