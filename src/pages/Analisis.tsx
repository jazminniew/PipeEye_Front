import React from 'react';
import Navbar from '../components/Navbar';
import AnalisisCard from '../components/AnalisisCard';
import Breadcrumb from '../components/breadcrumb';
import styles from '../styles/Analisis.module.css';

const Analisis: React.FC = () => {
  return (
    <div>
      <Navbar />
              <div className={styles.breadcrumbContainer}>
          <Breadcrumb
            items={[
              { label: 'Dashboard', to: '/dashboard' },
              { label: 'Historial', to: '/history' }, 
              { label: 'Análisis' }
            ]}
          />
        </div>
      <div className={styles.contenido}>
      <h1 className={styles.titulo}>Análisis</h1>


        <div className={styles.listaCards}>
          <AnalisisCard />
          <AnalisisCard />
          <AnalisisCard />
          <AnalisisCard />
          <AnalisisCard />
        </div>
      </div>
    </div>
  );
};

export default Analisis;
