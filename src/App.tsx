import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import PruebaConexion from './pages/PruebaConexion';
import Dashboard from './pages/Dashboard';
import ImagesUpload from './pages/ImagesUpload';
import History from './pages/History';
import Administrar from './pages/Administrar'; 
import Analisis from './pages/Analisis';
import Estadisticas from './pages/Estadisticas';
import CadaAnalisis from './pages/cadaAnalisis';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<ImagesUpload />} />
        <Route path="/history" element={<History />} /> 
        <Route path="/pruebaconexion" element={<PruebaConexion />} />
        <Route path="/administrar" element={<Administrar />} />
        <Route path="/Analisis" element={<Analisis />} />
        <Route path="/Estadisticas" element={<Estadisticas />} />
        <Route path="/CadaAnalisis" element={<CadaAnalisis />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
