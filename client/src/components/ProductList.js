import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const ProductList = props =>{
    const [products, setProducts] = useState([]);
    // const [deleteClicked, setDeleteClicked] = useState(0)
    const [deleteClicked, setDeleteClicked] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(response=>{
                console.log(response)
                setProducts(response.data.Products)
            })
            .catch(err=>console.log("Error: ", err))
    },[deleteClicked])
    const deleteHandler = (e, productId)=>{
        axios.delete(`http://localhost:8000/api/product/${productId}/delete`)
            .then(response=>{
                console.log("Response: ", response)
                // setDeleteClicked(deleteClicked+1)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err=>console.log("Error: ", err))
    }
    console.log(products)
    return(
        <div className="container mt-5">
            <Link to="/product/new" className="btn btn-outline-primary float-end">Create New Product</Link>
            <h1 className="text-center">Products</h1>
            <table className="table table-striped border mt-3">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>{
                        return   <tr key={index}>
                            <td>{product.title}</td>
                            <td>{`$${product.price}`}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/product/${product._id}`} className="text-decoration-none">View</Link>
                                <Link onClick={(e)=>deleteHandler(e, product._id)} to="" className="text-danger text-decoration-none m-3">Delete</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;