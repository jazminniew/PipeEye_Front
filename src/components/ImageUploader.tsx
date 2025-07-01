import React, { useState } from 'react';
import styles from '../styles/ImageUploader.module.css';

const ImageUploader: React.FC = () => {
  const [cliente, setCliente] = useState('');
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [fecha, setFecha] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.uploadZone}>
        <div className={styles.dropArea}>
          <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="124" height="115" viewBox="0 0 124 115" fill="none">
  <path d="M42.1 81.7999C40.3125 81.7999 38.7828 81.1667 37.511 79.9004C36.2392 78.6341 35.6022 77.1099 35.6 75.328V68.8561C35.6 67.9392 35.912 67.1712 36.536 66.5521C37.16 65.9329 37.9313 65.6223 38.85 65.6201C39.7687 65.618 40.5411 65.9286 41.1673 66.5521C41.7934 67.1756 42.1043 67.9436 42.1 68.8561V75.328H81.1V68.8561C81.1 67.9392 81.412 67.1712 82.036 66.5521C82.66 65.9329 83.4313 65.6223 84.35 65.6201C85.2686 65.618 86.041 65.9286 86.6672 66.5521C87.2934 67.1756 87.6043 67.9436 87.6 68.8561V75.328C87.6 77.1078 86.964 78.6319 85.6922 79.9004C84.4204 81.1689 82.8896 81.8021 81.1 81.7999H42.1ZM58.35 42.4831L52.2562 48.5505C51.6062 49.1977 50.8349 49.5083 49.9422 49.4824C49.0496 49.4566 48.2772 49.1189 47.625 48.4696C47.0292 47.8224 46.7172 47.0674 46.689 46.2044C46.6608 45.3415 46.9728 44.5865 47.625 43.9393L59.325 32.2898C59.65 31.9662 60.0021 31.7376 60.3812 31.6038C60.7604 31.4701 61.1667 31.4021 61.6 31.4C62.0333 31.3978 62.4396 31.4657 62.8187 31.6038C63.1979 31.7419 63.55 31.9706 63.875 32.2898L75.575 43.9393C76.225 44.5865 76.537 45.3415 76.511 46.2044C76.485 47.0674 76.173 47.8224 75.575 48.4696C74.925 49.1168 74.1536 49.4544 73.261 49.4824C72.3683 49.5105 71.5959 49.1998 70.9437 48.5505L64.85 42.4831V65.6201C64.85 66.537 64.538 67.3061 63.914 67.9274C63.29 68.5487 62.5187 68.8582 61.6 68.8561C60.6813 68.8539 59.91 68.5433 59.286 67.9241C58.662 67.305 58.35 66.537 58.35 65.6201V42.4831Z" fill="#007BFF"/>
  <path d="M123.6 57C123.6 88.3697 96.0208 113.8 62 113.8C27.9793 113.8 0.400024 88.3697 0.400024 57C0.400024 25.6302 27.9793 0.199951 62 0.199951C96.0208 0.199951 123.6 25.6302 123.6 57Z" fill="#D9D9D9" fill-opacity="0.08"/>
</svg></div>
          <p><strong>Arrasta la imagen/carpeta</strong></p>
        </div>
      </div>

      <div className={styles.formZone}>
        <h2>Completar la siguiente información</h2>
        
        <label>Cliente</label>
        <input
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />

        <label>Nombre proyecto</label>
        <input
          type="text"
          value={nombreProyecto}
          onChange={(e) => setNombreProyecto(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
