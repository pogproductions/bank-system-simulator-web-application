import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<Signup></Signup>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
      <Route path="/" element={<Signup />} /> {/* default route */}
    </Routes>
  );
}

export default App;
