import React from 'react';
import './shared/css/Global.css'
import { Routes } from './routes/Routes'
import { Desktopnavigation } from './components/navigation/desktopnavigation/Desktopnavigation'


function App() {
  return (
    <Routes>
     < Desktopnavigation />
    </Routes>
  );
}

export default App;
