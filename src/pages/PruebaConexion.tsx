// src/pages/PruebaConexion.tsx

import React, { useState } from 'react';

const PruebaConexion: React.FC = () => {
  const [mensaje, setMensaje] = useState<string>('Esperando respuesta...');
  const [error, setError] = useState<string | null>(null);

  const probarConexion = async () => {
    try {
      const response = await fetch('https://TU_BACKEND_URL/ping');
      if (!response.ok) throw new Error('Error en la respuesta del servidor');

      const data = await response.text(); // o .json() si tu backend responde en JSON
      setMensaje(`Respuesta del backend: ${data}`);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setMensaje('');
    }
  };

  return (
    <div>
      <h2>Prueba de conexión con el backend</h2>
      <button onClick={probarConexion}>Probar conexión</button>
      <p>{mensaje}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PruebaConexion;
