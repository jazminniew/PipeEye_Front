import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Empresa from '../components/Empresa';
import SearchBar from '../components/searchBar';
import styles from '../styles/History.module.css'; // creás este archivo

const History: React.FC = () => {
  // Solo usamos el array para mapear, sin pasarle props
  const empresas = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div>
      <Navbar />
        <div className={styles.wrapper}>
          <div className={styles.todo}>
            <div className={styles.topBar}>
              <SearchBar />
            </div>
            <div className={styles.gridContainer}>
              {empresas.map((id) => (
                <Empresa key={id} />
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default History;