import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './views/home';
import { Route, Routes } from 'react-router-dom';
import MicroApp1 from './views/micro-app-1';
import MicroApp2 from './views/micro-app-2';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <section className="App-header">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microapp1" element={<MicroApp1 />} />
        <Route path="/microapp2" element={<MicroApp2 />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
