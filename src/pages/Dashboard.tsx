// src/pages/Dashboard.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Statistics from '../components/Statistics;
import styles from '../styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <div className={styles.dashboardContent}>
        <h1 className={styles.title}>Bienvenido a PipeEye.</h1>
        <p className={styles.subtitle}>
          Resumen general de todos los análisis generados en PipeEye
        </p>

        {/* Ahora solo importamos el componente Statistics */}
        <Statistics />

        <div className={styles.infoSecundaria}>
          <div className={styles.resumen}>
            <div className={styles.caja2}>3 Críticos</div>
            <div className={styles.caja2}>8 Minor</div>
            <div className={styles.caja2}>2 Ninguno</div>
          </div>

          <div className={styles.containerGrafico}>
            <div className={styles.grafico}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
