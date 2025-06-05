import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import PruebaConexion from './pages/PruebaConexion';
import Dashboard from './pages/Dashboard';
import ImagesUpload from './pages/ImagesUpload';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pruebaconexion" element={<PruebaConexion />} />
        <Route path="/pruebaconexion" element={<PruebaConexion />} />
        <Route path="/upload" element={<ImagesUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
