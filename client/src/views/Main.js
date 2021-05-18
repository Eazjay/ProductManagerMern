import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import { Router } from '@reach/router';

const Main = () =>{
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(response=>{
                setProducts(response.data.Products)
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    },[])
    return (
        <div>
            <Router>
            {loaded && <ProductList path="/" products={products}></ProductList>}
                <ProductForm path="/product/new"></ProductForm>
                <ProductDetail path="/product/:id"></ProductDetail>
            </Router>
        </div>
    )
}
export default Main;

