import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css'; // para estilos separados si querés

const Dashboard: React.FC = () => {
return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Bienvenido al Dashboard</h1>
        <p>Acá irán las estadísticas, últimos análisis, etc.</p>
      </div>
    </div>
);
};

export default Dashboard;
