import { Route, Routes } from 'solid-app-router';
import { Component } from 'solid-js';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

const App: Component = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
