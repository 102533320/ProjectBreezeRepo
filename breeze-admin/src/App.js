import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import React from 'react';

import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import UserInfo from './pages/UserInfo';

import { useMediaQuery } from '@chakra-ui/react';
import Signup from './pages/Signup';
//import { useMediaQuery } from 'react-responsive';
import Login from './pages/Login';

import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Signup />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Users />} path="/users" />
          <Route element={<UserInfo />} path="/userinfo" />
          <Route element={<Analytics />} path="/analytics" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
