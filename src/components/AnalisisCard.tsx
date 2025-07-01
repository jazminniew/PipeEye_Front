import React from 'react';
import styles from '../styles/AnalisisCard.module.css';
import { Link } from 'react-router-dom';

const AnalisisCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.izquierda}>
        <div className={styles.icono}></div>
        <div className={styles.infoPrincipal}>
          <div className={styles.tituloEstado}>
            <h3>Tubería Principal</h3>
            <span className={`${styles.estado} ${styles.aprobado}`}>✔ Analizado</span>
          </div>
          <div className={styles.subinfo}>
            <span>📅 14/01/2024 - 14:30</span>
          </div>
        </div>
      </div>

      <div className={styles.derecha}>
        <Link to="/cadaAnalisis" className={styles.btnDetalle}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default AnalisisCard;
