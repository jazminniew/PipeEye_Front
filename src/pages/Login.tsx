import React from "react";
import styles from "../styles/Login.module.css";
import Switch from "../components/Switch";

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSide}>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <h1>¡Qué bueno verte!</h1>
          <p>Ingresá tu correo electrónico y contraseña para iniciar sesión.</p>
          <form>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="usuario@gmail.com"
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Usuario12345!"
            />
            <div className={styles.rememberMe}>
              <Switch />
              <label>Recordarme</label>
            </div>


            <button type="button">INGRESAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
