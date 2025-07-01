import React from 'react';
import Navbar from '../components/Navbar';
import AnalisisCard from '../components/AnalisisCard';
import styles from '../styles/Analisis.module.css';

const Analisis: React.FC = () => {
  return (
    <div>
      <Navbar />
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
