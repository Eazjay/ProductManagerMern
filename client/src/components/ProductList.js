import React from 'react';
import {Link} from '@reach/router';

const ProductList = (props) =>{
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
                    {props.products.map((product, index)=>{
                        return   <tr key={index}>
                            <td>{product.title}</td>
                            <td>{`$${product.price}`}</td>
                            <td>{product.description}</td>
                            <td><Link to={`/product/${product._id}`} className="btn btn-outline-primary">View</Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;