import React from 'react';
import Navbar from '../components/Navbar.tsx';
import { Link } from 'react-router-dom'; 

const cadaAnalisis: React.FC = () => {
  return (
    <div>
            <Navbar />
      <h1>ANALISIS X</h1>  
      <p>El analisis fue aprobado</p>  
      <p>editar</p>  
    </div>
  );
};

export default cadaAnalisis;
