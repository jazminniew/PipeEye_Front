import React, { useState } from 'react';
import '../styles/ImageUpload.css';
import Sidebar from '../components/Navbar.tsx';

const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<File[]>([]); //recibir la file
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, 'aprobada' | 'reprobada' |  'en revision' | null>>({}); 
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  //funcion para subir al back
  const handleUploadToBackend = async () => {
  const imageToUpload = images[currentIndex];
  if (!imageToUpload) return;

  const formData = new FormData();
  formData.append('file', imageToUpload); //agregar imagen

  const proyectoId = 1; //falta cambiar el ID real

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

  //pasar de imagen en imagen
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files); //convierte las files en un array para poder verlas mejor
      setImages(filesArray);
      setCurrentIndex(0); //primera imagen
      setResults({}); 
    }
  };

  //pasar al siguiente
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  //volver al anterior
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClassify = (status: 'aprobada' | 'reprobada' | 'en revision') => {
    setResults((prev) => ({
      ...prev,
      [currentIndex]: status
    }));
  };

  return (   
    <div className='Body'>
      <Sidebar />
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
            <button onClick={() => handleClassify('aprobada')}>Aprobar</button>
            <button onClick={() => handleClassify('reprobada')}>Reprobar</button>
          </div>

          

          <p>Estado: {results[currentIndex] ?? 'Sin clasificar'}</p>
        </div>
      )}

      <div className="upload-section">
  <button onClick={handleUploadToBackend} disabled={uploading}>
    {uploading ? 'Subiendo' : 'Mandar al back'}
  </button>
  {uploadSuccess && <p> Imagen enviada correctamente</p>}
</div>
    </div>
    </div>
  );  
};

export default ImageUpload;
