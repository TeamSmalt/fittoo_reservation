import React from 'react';

import ReservationPage from 'pages/reservation/ReservationPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="fittoo">
      <Routes>
        <Route path="reservation/:coachId" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
