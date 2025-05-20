import React, { useState } from 'react';
import '../styles/ImageUpload.css';

const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, 'aprobada' | 'reprobada' | null>>({});

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files);
      setImages(filesArray);
      setCurrentIndex(0);
      setResults({}); // Reiniciamos clasificación
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClassify = (status: 'aprobada' | 'reprobada') => {
    setResults((prev) => ({
      ...prev,
      [currentIndex]: status
    }));
  };

  return (
    <div className="image-upload-container">
      <input type="file" accept="image/png" multiple onChange={handleImageChange} />

      {images.length > 0 && (
        <div className="image-viewer">
          <img src={URL.createObjectURL(images[currentIndex])} alt={`Imagen ${currentIndex + 1}`} />

          <div className="navigation">
            <button onClick={handlePrev} disabled={currentIndex === 0}>← Anterior</button>
            <button onClick={handleNext} disabled={currentIndex === images.length - 1}>Siguiente →</button>
          </div>

          <div className="classification">
            <button onClick={() => handleClassify('aprobada')}>✅ Aprobar</button>
            <button onClick={() => handleClassify('reprobada')}>❌ Reprobar</button>
          </div>

          <p>Estado: {results[currentIndex] ?? 'Sin clasificar'}</p>
        </div>
      )}
    </div>
  );  
};

export default ImageUpload;
