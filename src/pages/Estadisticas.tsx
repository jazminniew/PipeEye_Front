import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Breadcrumb from '../components/breadcrumb';
import styles from '../styles/Estadisticas.module.css'; 

const Estadisticas: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.breadcrumbContainer}>
        <Breadcrumb
          items={[
            { label: 'Dashboard', to: '/dashboard' },
            { label: 'Historial', to: '/history' },
            { label: 'Estadísticas' } // Página actual sin link
          ]}
        />
      </div>

      <h1>ESTADÍSTICAS</h1>
    </div>
  );
};

export default Estadisticas;
