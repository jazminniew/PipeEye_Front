// src/pages/History.tsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Empresa from '../components/Empresa';
import SearchBar from '../components/searchBar';

const History: React.FC = () => {
  return (
    <div>
      <Navbar/>
          <SearchBar />
      <Empresa/>
    </div>
  );
};

export default History; 
