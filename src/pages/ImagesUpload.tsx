import React, { useState } from 'react';
import styles from '../styles/ImageUpload.module.css';
import Navbar from '../components/Navbar.tsx';
import { useNavigate } from 'react-router-dom';

const ImagesUpload: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleUploadToBackend = async () => {
    const imageToUpload = images[0];
    if (!imageToUpload) return;

    const formData = new FormData();
    formData.append('file', imageToUpload);

    const proyectoId = 1;

    setUploading(true);
    setUploadSuccess(false);

    try {
      const response = await fetch(`https://pipeeye-api.onrender.com/upload-img/?proyecto_id=${proyectoId}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('La imagen fue subida al back:', result);
        setUploadSuccess(true);
      } else {
        const errorText = await response.text();
        console.error('La imagen no fue subida al back:', response.status, errorText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files);
      setImages(filesArray);
    }
  };

  const handleAnalyze = () => {
    if (images.length === 0) {
      alert('Primero tenés que subir imágenes para analizarlas.');
      return;
    }

    const serialized = images.map((file) => URL.createObjectURL(file));
    localStorage.setItem('imagePaths', JSON.stringify(serialized));
    navigate('/analyzeImages');
  };

  const handleRemoveImage = (index: number) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
    if (selectedIndex !== null && index === selectedIndex) {
      setSelectedIndex(null);
    }
  };

  const handleClearAll = () => {
    setImages([]);
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (   
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.dropZone}>
            <div className={styles.uploadIcon}>⬆️</div>
            <p><strong>Arrastra la imagen/carpeta</strong></p>
            <input type="file" accept="image/png" multiple onChange={handleImageChange} className={styles.fileInput} />
          </div>

          {images.length > 0 && (
            <div className={styles.previewContainer}>
              <div className={styles.previewHeader}>
                <h3>Imágenes cargadas</h3>
                <button onClick={handleClearAll}>Borrar todas</button>
              </div>
              <div className={styles.previewList}>
                {images.map((img, index) => (
                  <div key={index} className={styles.thumbnailWrapper}>
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`mini-${index}`}
                      onClick={() => setSelectedIndex(index)}
                      className={styles.thumbnail}
                    />
                    <button className={styles.deleteButton} onClick={() => handleRemoveImage(index)}>✖</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedIndex !== null && images[selectedIndex] && (
            <div className={styles.fullscreenPreview}>
              <img src={URL.createObjectURL(images[selectedIndex])} alt={`Preview ${selectedIndex}`} />
              <div className={styles.fullscreenControls}>
                <button onClick={handlePrev} disabled={selectedIndex === 0}>Anterior</button>
                <button onClick={() => handleRemoveImage(selectedIndex)}>Eliminar</button>
                <button onClick={handleNext} disabled={selectedIndex === images.length - 1}>Siguiente</button>
              </div>
              <button className={styles.closePreview} onClick={() => setSelectedIndex(null)}>✕</button>
            </div>
          )}

          <div className={styles.uploadSection}>
            <button onClick={handleUploadToBackend} disabled={uploading}>
              {uploading ? 'Subiendo' : 'Mandar al back'}
            </button>
            <button onClick={handleAnalyze} disabled={images.length === 0}>
              Analizar imágenes
            </button>
            {uploadSuccess && <p>Imagen enviada correctamente</p>}
          </div>
        </div>

        <div className={styles.rightSection}>
          <h2>Completar la siguiente<br />información</h2>

          <label>Cliente</label>
          <input type="text" placeholder="Nombre del cliente" />

          <label>Nombre del proyecto</label>
          <input type="text" placeholder="Ej: Inspección Batería YPF" />

          <label>Fecha</label>
          <input type="date" />
        </div>
      </div>
    </div>
  );
};

export default ImagesUpload;