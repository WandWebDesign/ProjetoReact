import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; // Ou ./components/Home se salvou lá
import ProdutoDetalhes from './components/ProdutoDetalhes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* O :id significa que essa parte do link muda (ex: ckone, sauvage) */}
        <Route path="/produto/:id" element={<ProdutoDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;