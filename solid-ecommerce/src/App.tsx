import { Route, Routes } from 'solid-app-router';
import { Component, createResource, createSignal } from 'solid-js';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Product } from './product';

const App: Component = () => {
  const [search, setSearch] = createSignal("");
  const [cart, setCart] = createSignal<Product[]>([]);
  const [products] = createResource<Product[]>(
    async () => {
      const res = await fetch("http://fakestoreapi.com/products");
      return await res.json();
    },
    {
      initialValue: [],
    }
  );
  return (
    <div>
      <Header
        cart={cart}
        onClearCart={() => {
          setCart([]);
        }}
        search={search}
        onSetSearch={(str) => setSearch(str)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              search={search}
              onAddToCart={(p) => setCart([...cart(), p])}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
