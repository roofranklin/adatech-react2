import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductList from './Components/ProductList/ProductList';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
