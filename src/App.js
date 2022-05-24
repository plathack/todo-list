import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
