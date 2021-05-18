import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const ProductDetail = props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(response => {
                console.log(response)
                setProduct(response.data.Product)
            })
            .catch(err=> console.log(err))
    })
    const deleteHandler = ()=>{
        axios.delete(`http://localhost:8000/api/product/${props.id}/delete`)
            .then(response=>{
                console.log("Response: ", response)
                navigate('/')
            })
            .catch(err=>console.log("Error: ", err))
    }
    return (
        <div className="container mt-5">
            <Link to="/" className="text-decoration-none float-end">Dashboard</Link>
            <div className="mt-3">
                <h4>Product Title: {product.title}</h4>
                <h4>Price: {`$${product.price}`}</h4>
                <h4>Description: {product.description}</h4>
            </div>
            <div className="w-25">
                <button onClick={deleteHandler} className="btn btn-outline-danger mt-3">Delete</button>
                <Link to={`/product/${product._id}/update`}  className="btn btn-outline-primary mt-3 float-end">Edit</Link>
            </div>
        </div>
    )
}
export default ProductDetail;

