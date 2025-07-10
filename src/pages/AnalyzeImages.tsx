import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/AnalyzeImages.module.css';
import Sidebar from '../components/Navbar';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const AnalyzeImages: React.FC = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, 'aprobada' | 'reprobada' | 'en revision' | null>>({});
  const [isEditing, setIsEditing] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const location = useLocation();

  const isViewMode = location.pathname.startsWith('/verDetalle');
  const imagenId = params.id ? Number(params.id) : undefined;

  useEffect(() => {
    const stored = localStorage.getItem('imagePaths');
    if (stored) {
      setImagePaths(JSON.parse(stored));
      if (imagenId !== undefined && !isNaN(imagenId)) {
        setCurrentIndex(imagenId);
      }
    }
  }, [imagenId]);

  const handleClassify = (status: 'aprobada' | 'reprobada' | 'en revision') => {
    if (!isViewMode || isEditing) {
      setResults((prev) => ({
        ...prev,
        [currentIndex]: status,
      }));
    }
  };

  const handlePrev = () => {
    if (isViewMode) return;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (isViewMode) return;
    if (currentIndex < imagePaths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFinish = () => {
    localStorage.setItem('classifiedResults', JSON.stringify(results));
    navigate(`/cada-analisis/123`);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const allClassified = imagePaths.length > 0 && imagePaths.every((_, i) => results[i]);

  return (
    <div className={styles.body}>
      <Sidebar />

      <div className={styles.container}>
        <div className={styles.viewer}>
          {/* CONTENEDOR CON FLECHAS ABSOLUTAS */}
          <div className={styles.navContainer}>
            <div className={styles.imageWrapper}>
              <img
                ref={imageRef}
                src={imagePaths[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className={styles.imagePreview}
              />
              <button
                className={`${styles.navButton} ${styles.prev}`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                ←
              </button>
              <button
                className={`${styles.navButton} ${styles.next}`}
                onClick={handleNext}
                disabled={currentIndex === imagePaths.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.controls}>
            <button className={styles.reprobada} onClick={() => handleClassify('reprobada')}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 27 27" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.566629 0.666482C0.840848 0.392604 1.21257 0.23877 1.60013 0.23877C1.98769 0.23877 2.35941 0.392604 2.63363 0.666482L26.0336 24.0665C26.1773 24.2004 26.2926 24.3618 26.3725 24.5412C26.4524 24.7206 26.4954 24.9143 26.4989 25.1107C26.5023 25.307 26.4662 25.5021 26.3927 25.6842C26.3191 25.8663 26.2096 26.0317 26.0708 26.1706C25.9319 26.3095 25.7665 26.419 25.5843 26.4925C25.4022 26.5661 25.2072 26.6022 25.0108 26.5987C24.8144 26.5953 24.6208 26.5523 24.4414 26.4724C24.262 26.3924 24.1005 26.2772 23.9666 26.1335L0.566629 2.73348C0.29275 2.45926 0.138916 2.08755 0.138916 1.69998C0.138916 1.31242 0.29275 0.940702 0.566629 0.666482Z" fill="#F7F8F9"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0337 0.666482C26.3076 0.940702 26.4614 1.31242 26.4614 1.69998C26.4614 2.08755 26.3076 2.45926 26.0337 2.73348L2.63371 26.1335C2.35647 26.3918 1.98978 26.5325 1.61089 26.5258C1.23201 26.5191 0.870506 26.3656 0.602551 26.0976C0.334595 25.8297 0.181107 25.4682 0.174422 25.0893C0.167737 24.7104 0.308377 24.3437 0.566713 24.0665L23.9667 0.666482C24.2409 0.392604 24.6126 0.23877 25.0002 0.23877C25.3878 0.23877 25.7595 0.392604 26.0337 0.666482Z" fill="#F7F8F9"/>
</svg> Reprobar</button>
            <button className={styles.enRevision} onClick={() => handleClassify('en revision')}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 39 39" fill="none">
  <path d="M19.3502 2.90628C23.7246 2.90628 27.9199 4.64401 31.013 7.73719C34.1062 10.8304 35.8439 15.0256 35.8439 19.4C35.8439 23.7744 34.1062 27.9697 31.013 31.0629C27.9199 34.1561 23.7246 35.8938 19.3502 35.8938C14.9758 35.8938 10.7805 34.1561 7.68735 31.0629C4.59417 27.9697 2.85645 23.7744 2.85645 19.4C2.85645 15.0256 4.59417 10.8304 7.68735 7.73719C10.7805 4.64401 14.9758 2.90628 19.3502 2.90628ZM19.3502 33.5375C23.0997 33.5375 26.6956 32.048 29.3469 29.3968C31.9982 26.7455 33.4877 23.1495 33.4877 19.4C33.4877 15.6505 31.9982 12.0546 29.3469 9.40331C26.6956 6.75201 23.0997 5.26253 19.3502 5.26253C15.6007 5.26253 12.0048 6.75201 9.35347 9.40331C6.70218 12.0546 5.2127 15.6505 5.2127 19.4C5.2127 23.1495 6.70218 26.7455 9.35347 29.3968C12.0048 32.048 15.6007 33.5375 19.3502 33.5375ZM21.1174 27.0578C21.1174 27.5265 20.9312 27.976 20.5998 28.3074C20.2684 28.6388 19.8189 28.825 19.3502 28.825C18.8815 28.825 18.432 28.6388 18.1006 28.3074C17.7692 27.976 17.583 27.5265 17.583 27.0578C17.583 26.5892 17.7692 26.1397 18.1006 25.8083C18.432 25.4768 18.8815 25.2907 19.3502 25.2907C19.8189 25.2907 20.2684 25.4768 20.5998 25.8083C20.9312 26.1397 21.1174 26.5892 21.1174 27.0578ZM19.3502 9.97503C19.6627 9.97503 19.9623 10.0992 20.1833 10.3201C20.4042 10.541 20.5283 10.8407 20.5283 11.1532V21.7563C20.5283 22.0687 20.4042 22.3684 20.1833 22.5893C19.9623 22.8103 19.6627 22.9344 19.3502 22.9344C19.0377 22.9344 18.7381 22.8103 18.5171 22.5893C18.2962 22.3684 18.1721 22.0687 18.1721 21.7563V11.1532C18.1721 10.8407 18.2962 10.541 18.5171 10.3201C18.7381 10.0992 19.0377 9.97503 19.3502 9.97503Z" fill="white"/>
</svg> En revisión</button>
            <button className={styles.aprobada} onClick={() => handleClassify('aprobada')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 50 51" fill="none">
  <path d="M8.89062 27.7156L19.6969 38.5219L41.3094 15.3656" stroke="#F7F8F9" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Aprobar</button>
          </div>

          <p className={styles.estado}>Estado: {results[currentIndex] ?? 'Sin clasificar'}</p>

          {isViewMode && (
            <button onClick={toggleEditing} className={styles.finishButton}>
              {isEditing ? '🔒 Dejar de editar' : '✏️ Editar'}
            </button>
          )}

          {allClassified && !isViewMode && (
            <button onClick={handleFinish} className={styles.finishButton}>
              Continuar
            </button>
          )}
        </div>

        <div className={styles.tablesSection}>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>Defecto</th>
                  <th>Posición</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Fisura longitudinal</td><td>X: 123, Y: 456</td></tr>
                <tr><td>Porosidad aislada</td><td>X: 98, Y: 245</td></tr>
                <tr><td>Inclusión de escoria</td><td>X: 210, Y: 380</td></tr>
              </tbody>
            </table>
          </div>

          <div className={styles.table}>
            <h3>Información</h3>
            <table>
              <tbody>
                <tr><td>Cliente</td><td>EAN</td></tr>
                <tr><td>Proyecto</td><td>Bahía Blanca</td></tr>
                <tr><td>Fecha</td><td>29/5/2025</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeImages;
