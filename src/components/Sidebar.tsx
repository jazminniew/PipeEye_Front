import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'; 

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>PipeEye</h2>
      <ul>
        <li className="sidebarButton"><Link to="/upload">Cargar Imagenes</Link></li>
        <li><Link to="/historial">Historial</Link></li>
        <li><Link to="/asignar">Asignar Roles</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
