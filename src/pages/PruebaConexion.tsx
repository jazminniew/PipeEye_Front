// src/pages/PruebaRutaTres.tsx
import React from 'react';

const PruebaRutaTres: React.FC = () => {
  const probarRuta3 = async () => {
    try {
      const response = await fetch('https://pipeeye-api.onrender.com/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nombre: 'Jaz',
          apellido: 'Niew',
          mail: 'jazminniew@gmail.com',
          empresa: 'NIEW CO',
          jerarquia: 'admin'
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert('Error: ' + errorText);
        return;
      }

      const data = await response.json();
      alert('Respuesta del backend:\n' + JSON.stringify(data, null, 2));
    } catch (error) {
      alert('Error de conexión:\n' + error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Prueba Ruta 3 - POST /usuarios/</h2>
      <button onClick={probarRuta3}>Probar conexión</button>
    </div>
  );
};

export default PruebaRutaTres;
