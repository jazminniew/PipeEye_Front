import React from 'react';
import Navbar from '../components/Navbar.tsx';
import { Link } from 'react-router-dom'; 

const Analisis: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>ANALISIS</h1>
      <Link to="/cadaAnalisis">Cada estadistica (ver detalles)</Link>
    </div>
  );
};

export default Analisis;
