// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path='/Justwravel' element={<ProductList />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
