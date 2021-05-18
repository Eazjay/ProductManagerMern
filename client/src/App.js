import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';
import { Router } from '@reach/router';
// import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <ProductList path="/"></ProductList>
            <ProductForm path="/product/new"></ProductForm>
            <ProductDetail path="/product/:id"></ProductDetail>
            <ProductEdit path="/product/:id/update"></ProductEdit>
        </Router>
    </div>
  );
}

export default App;
