import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router';

const EditProduct = (props) => {
    const [productInfo, setProductInfo] = useState({
        title: "",
        price: "",
        description: ""
    })
    const [errors, setErrors] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(response=>{
            console.log(response)
            setProductInfo(response.data.Product)
        })
        .catch(err=>console.log(err))
    },[props.id])
    const updateHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${props.id}/update`, productInfo)
            .then(response=>{
                console.log(response)
                if(response.data.Product){
                    navigate('/')
                }
                else{
                    setErrors(response.data.errors)
                }
            })
            .catch(err=>console.log(err))
    }
    const changeHandler = (e)=>{
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Link to="/" className="text-decoration-none float-end">Dashboard</Link>
            <h1 className="text-center">Edit Product</h1>
            <form onSubmit={updateHandler} className="w-50 mx-auto mt-3">
                <label htmlFor="">Title</label>
                <input type="text" onChange={changeHandler} name="title" value={`${productInfo.title}`}  className="form-control"/>
                {errors.title? <p className="text-danger">{errors.title.message}</p>: ""}
                <label htmlFor="" className="mt-3">Price</label>
                <input type="text" onChange={changeHandler} name="price" value={productInfo.price} className="form-control" />
                <label htmlFor="" className="mt-3">Description</label>
                <textarea onChange={changeHandler} name="description" id=""  cols="30" rows="10" value={`${productInfo.description}`} className="form-control" />
                {errors.description? <p className="text-danger">{errors.description.message}</p>: ""}
                <input type="submit" className="btn btn-primary mt-3" value="Update Product" />
            </form>
        </div>
    )
}
export default EditProduct;
