import React, {useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const ProductForm = props =>{
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    });
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', formInfo)
            .then(response=>{
                console.log("Response: ", response)
                navigate('/')
            })
            .catch(err=>console.log("Error: ", err))
    }
    const changeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="container mt-5">
            <Link to="/" className="text-decoration-none float-end">Dashboard</Link>
            <h1 className="text-center">Create Product</h1>
            <form onSubmit={submitHandler} className="w-50 mx-auto mt-3">
                <label htmlFor="">Title</label>
                <input type="text" name="title" onChange={changeHandler} className="form-control"/>
                <label htmlFor="" className="mt-3">Price</label>
                <input type="text"  name="price" onChange={changeHandler} className="form-control" />
                <label htmlFor="" className="mt-3">Description</label>
                <textarea name="description" id="" onChange={changeHandler} cols="30" rows="10" className="form-control" />
                <input type="submit" className="btn btn-primary mt-3" value="Create Product" />
            </form>
        </div>
    )
}
export default ProductForm;