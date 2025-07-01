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

  // modo view o edit según ruta
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
    if (isViewMode && imagenId !== undefined) return; // Bloquear navegación en view
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (isViewMode && imagenId !== undefined) return; // Bloquear navegación en view
    if (currentIndex < imagePaths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

const handleFinish = () => {
  localStorage.setItem('classifiedResults', JSON.stringify(results));

  // Simulás un ID real (en productivo usarías un ID real del backend)
  const analyzeId = '123';

  navigate(`/cada-analisis/${analyzeId}`);
};


  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  

  const hasImagenId = imagenId !== undefined && !isNaN(imagenId);
  const allClassified =
    imagePaths.length > 0 && imagePaths.every((_, i) => results[i]);

  return (
    <div className={styles.body}>
      <Sidebar />
      <div className={styles.container}>
        {imagePaths.length > 0 ? (
          <>




<div className={styles.imageWrapper}>
  {(!isViewMode || !hasImagenId) && (
    <button
      className={styles.navButton}
      onClick={handlePrev}
      disabled={currentIndex === 0}
    >
      ←
    </button>
  )}

  <img
    ref={imageRef}
    src={imagePaths[currentIndex]}
    alt={`Imagen ${currentIndex + 1}`}
    className={styles.imagePreview}
  />

  {(!isViewMode || !hasImagenId) && (
    <button
      className={styles.navButton}
      onClick={handleNext}
      disabled={currentIndex === imagePaths.length - 1}
    >
      →
    </button>
  )}
</div>




            {(!isViewMode || isEditing) && (
              <div className={styles.controls}>
                <button
                  className={styles.reprobada}
                  onClick={() => handleClassify('reprobada')}
                >
                  ❌ Reprobar
                </button>
                <button
                  className={styles.enRevision}
                  onClick={() => handleClassify('en revision')}
                >
                  ⚠️ En Revisión
                </button>
                <button
                  className={styles.aprobada}
                  onClick={() => handleClassify('aprobada')}
                >
                  ✅ Aprobar
                </button>
              </div>
            )}

            <p className={styles.estado}>
              Estado: {results[currentIndex] ?? 'Sin clasificar'}
            </p>

            {isViewMode && (
              <button
                className={styles.editButton}
                onClick={toggleEditing}
              >
                {isEditing ? '🔒 Dejar de editar' : '✏️ Editar'}
              </button>
            )}

            {allClassified && !isViewMode && (
              <button
                onClick={handleFinish}
                className={styles.finishButton}
              >
                Continuar
              </button>
            )}
          </>
        ) : (
          <p>No hay imágenes para analizar.</p>
        )}
      </div>
    </div>
  );
};

export default AnalyzeImages;
