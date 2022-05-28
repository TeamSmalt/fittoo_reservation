import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from 'pages/SignupPage';

function App() {
  return (
    <div className="fittoo">
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
