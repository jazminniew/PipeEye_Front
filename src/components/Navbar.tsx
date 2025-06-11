import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Topbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className="logo">
          <Link className={styles.nombreLogo} to="/dashboard">PipeEye</Link>
        </div>

        <div className={styles.conjunto}>
          <ul>
            <li className={`${styles.Btn} ${styles.uploadBtn}`}>
              <Link to="/upload">Subir Imágenes</Link>
            </li>
            <li className={`${styles.Btn} ${styles.historyBtn}`}>
              <Link to="/history">Historial</Link>
            </li>
          </ul>

          <div className={styles.porfile}>
            <img src="public/img/imgLailla.png" alt="Foto de Laila" />

            <div className={styles.infoPorfile}><p>Laila Dejtiar</p>
            <Link to="/administrar" className={styles.rol}>Administrador</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
