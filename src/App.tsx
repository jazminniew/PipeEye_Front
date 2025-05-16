import React from 'react'
import ImageUpload from './components/ImageUpload'
import PruebaConexion from './pages/PruebaConexion';

const App: React.FC = () => {
  return (
    <div>
      <h1>PipeEye - Análisis de Radiografías</h1>
      <ImageUpload />
      <PruebaConexion />
    </div>
  )
}

export default App
