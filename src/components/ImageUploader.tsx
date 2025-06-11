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
          <div className={styles.icon}>⬆️</div>
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
