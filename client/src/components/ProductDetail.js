import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

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
    return (
        <div className="container mt-5">
            <Link to="/" className="text-decoration-none float-end">Dashboard</Link>
            <div className="mt-3">
                <h4>Product Title: {product.title}</h4>
                <h4>Price: {`$${product.price}`}</h4>
                <h4>Description: {product.description}</h4>
            </div>
        </div>
    )
}
export default ProductDetail;

