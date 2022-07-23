import { Route, Routes } from 'solid-app-router';
import { Component, lazy } from 'solid-js';

import { Header } from './components/Header';

const HomePage = lazy(() => import("./components/HomePage"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
let index = 0;
const App: Component = () => {
  console.log(`App:${index++}`);
  return (
    <div>
      <Header />
      <Routes base="/">
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
