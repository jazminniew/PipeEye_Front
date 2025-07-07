// src/components/Empresa.tsx
import * as React from 'react';
import styles from '../styles/Empresa.module.css';
import { Link } from 'react-router-dom';

const Empresa: React.FC = () => {
  return (
    <div className={`${styles.card} ${styles.fadeIn}`}>
      <div className={styles.header}>
        <div className={styles.icono}></div>
        <h3 className={styles.nombre}>Constructora Andina S.A.</h3>
      </div>

      <p className={styles.fecha}>Último análisis: 14/01/2024</p>

      <div className={styles.botones}>
        <Link to="/analisis" className={styles.boton}>Ver análisis</Link>
        <Link to="/Estadisticas" className={styles.botonSecundario}>Estadisticas</Link>
      </div>
    </div>
  );
};

export default Empresa;
