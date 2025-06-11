import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/AnalyzeImages.module.css';
import Sidebar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AnalyzeImages: React.FC = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, 'aprobada' | 'reprobada' | 'en revision' | null>>({});
  const imageRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('imagePaths');
    if (stored) {
      setImagePaths(JSON.parse(stored));
    }
  }, []);

  const getUnclassifiedIndex = () => {
    for (let i = 0; i < imagePaths.length; i++) {
      if (!results[i]) return i;
    }
    return -1;
  };

  const handleClassify = (status: 'aprobada' | 'reprobada' | 'en revision') => {
    setResults((prev) => ({
      ...prev,
      [currentIndex]: status
    }));

    const nextIndex = getUnclassifiedIndex();
    if (nextIndex !== -1) {
      setCurrentIndex(nextIndex);
    }
  };

  const handleNext = () => {
    let next = currentIndex + 1;
    while (next < imagePaths.length && results[next]) {
      next++;
    }
    if (next < imagePaths.length) {
      setCurrentIndex(next);
    }
  };

  const handlePrev = () => {
    let prev = currentIndex - 1;
    while (prev >= 0 && results[prev]) {
      prev--;
    }
    if (prev >= 0) {
      setCurrentIndex(prev);
    }
  };

  const handleZoom = (e: React.WheelEvent) => {
    const img = imageRef.current;
    if (img) {
      const currentScale = Number(img.dataset.scale || '1');
      const newScale = e.deltaY < 0 ? currentScale * 1.1 : currentScale * 0.9;
      img.style.transform = `scale(${newScale})`;
      img.dataset.scale = String(newScale);
    }
  };

  const handleFinish = () => {
    navigate('/dashboard');
  };

  const allClassified = imagePaths.length > 0 && imagePaths.every((_, i) => results[i]);

  return (
    <div className={styles.body}>
      <Sidebar />
      <div className={styles.container}>
        {imagePaths.length > 0 && !allClassified ? (
          <>
            <div className={styles.imageWrapper} onWheel={handleZoom}>
              <img
                ref={imageRef}
                src={imagePaths[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className={styles.imagePreview}
                data-scale="1"
              />
            </div>

            <div className={styles.controls}>
              <button className={styles.reprobada} onClick={() => handleClassify('reprobada')}>Reprobar</button>
              <button className={styles.enRevision} onClick={() => handleClassify('en revision')}>En Revisión</button>
              <button className={styles.aprobada} onClick={() => handleClassify('aprobada')}>Aprobar</button>
            </div>

            <div className={styles.manualNav}>
              <button onClick={handlePrev} disabled={currentIndex === 0}>← Anterior</button>
              <button onClick={handleNext} disabled={currentIndex === imagePaths.length - 1}>Siguiente →</button>
            </div>

            <p className={styles.estado}>Estado: {results[currentIndex] ?? 'Sin clasificar'}</p>
          </>
        ) : imagePaths.length > 0 && allClassified ? (
          <div className={styles.finishSection}>
            <p>Has clasificado todas las imágenes.</p>
            <button onClick={handleFinish} className={styles.finishButton}>¿Deseás terminar?</button>
          </div>
        ) : (
          <p>No hay imágenes para analizar.</p>
        )}
      </div>
    </div>
  );
};

export default AnalyzeImages;