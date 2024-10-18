import './App.css'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import AddActivity from './pages/AddActivity';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/regis-page" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
