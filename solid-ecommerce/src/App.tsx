import { Route, Routes } from 'solid-app-router';
import { Component } from 'solid-js';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductDetail } from './components/ProductDetail';

const App: Component = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
