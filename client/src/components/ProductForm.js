import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = props =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then(response=>console.log("Response: ", response))
            .catch(err=>console.log("Error: ", err))
    }

    return(
        <div className="container mt-5">
            <form onSubmit={submitHandler} className="w-50 mx-auto">
                <label htmlFor="">Title</label>
                <input type="text" onChange={e => setTitle(e.target.value)} className="form-control d-inline"/>
                <label htmlFor="">Price</label>
                <input type="text" onChange={e => setPrice(e.target.value)} className="form-control d-inline" />
                <label htmlFor="">Description</label>
                <input type="text" onChange={e => setDescription(e.target.value)} className="form-control d-inline" />
                <input type="submit" className="btn btn-primary mt-3" value="Create Product" />
            </form>
        </div>
    )
}

export default ProductForm;