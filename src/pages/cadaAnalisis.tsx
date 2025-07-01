import React from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/breadcrumb';
import styles from '../styles/cadaAnalisis.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CadaAnalisis: React.FC = () => {
  const { id } = useParams<{ id: string }>();
console.log('Este es el análisis ID:', id);
  const navigate = useNavigate();

  const images = [
    { src: 'public/img/imgLailla.png', estado: 'aprobado' },
    { src: 'public/img/imgLailla.png', estado: 'rechazado' },
    { src: 'public/img/imgLailla.png', estado: 'revision' },
  ];

  const handleViewDetail = (index: number) => {
    navigate(`/verDetalle/${index}`);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.breadcrumbContainer}>
        <Breadcrumb
          items={[
            { label: 'Historial', to: '/history' },
            { label: 'Análisis', to: '/analisis' },
            { label: 'Cada Análisis' },
          ]}
        />
      </div>

      <div className={styles.cardsContainer}>
        {images.map((img, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.izquierda}>
              <img src={img.src} alt={`Análisis ${i + 1}`} className={styles.icono} />
              <div className={styles.infoPrincipal}>
                <div className={styles.tituloEstado}>
                  <h4>Radiografía {i + 1}</h4>
                  <span
                    className={`${styles.estado} ${
                      img.estado === 'aprobado'
                        ? styles.aprobado
                        : img.estado === 'revision'
                        ? styles.dudoso
                        : styles.rechazado
                    }`}
                  >
                    {img.estado.toUpperCase()}
                  </span>
                </div>
                <div className={styles.subinfo}>
                  <p>Posición: X: 123, Y: 456</p>
                  <p>Defecto: Fisura</p>
                </div>
              </div>
            </div>

            <div className={styles.derecha}>
              <button className={styles.btnDetalle} onClick={() => handleViewDetail(i)}>
                🔍 Ver detalle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CadaAnalisis;
