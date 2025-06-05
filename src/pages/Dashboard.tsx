import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/dashboard.css'; // para estilos separados si querés

const Dashboard: React.FC = () => {
return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <h1>Bienvenido a la pagina de estadisticas</h1>
        
        <div className='estadisticas'>
            <div className='caja'>Total Radiografías
              <div className='number uno'>109</div>
            </div>
            <div className='caja'>Aprobadas
              <div className='number dos'>50</div>
            </div>
            <div className='caja'>Dudosas
              <div className='number tres'>32</div>
            </div>
            <div className='caja'>Rechazadas
              <div className='number cuatro'>37</div>
            </div>
        </div>
        <div className="infoSecundaria">

        <div className='resumen'>
            <div className='caja2'>3 Criticos
            </div>
            <div className='caja2'>8 Minor
            </div>
            <div className='caja2'>2 Ninguno
            </div>
        </div>

      <div className='containerGrafico'>
      <div className='grafico'></div>
        </div>
        </div>
        

      </div>
    </div>
);
};

export default Dashboard;
