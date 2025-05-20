import React from 'react';
import '../styles/login.css'; 

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form className="login-form">
        <input type="text" placeholder="Usuario/Mail" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
