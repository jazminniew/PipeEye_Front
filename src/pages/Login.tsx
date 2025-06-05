import React from 'react';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
  return (
    <div>
      <h1>PipeEye</h1>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
        <h2>Iniciar sesión</h2>
        <form className={styles.loginForm}>
          <input type="text" placeholder="Usuario/Mail" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Ingresar</button>
        </form>
        </div>
        </div>
      </div>
  );
};

export default Login;
