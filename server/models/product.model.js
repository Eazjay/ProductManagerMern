const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
		minLength: [2, "Title must be at least 2 characters long "],
    },
    price: {
        type: Number,
        required: [true, "Please enter a price."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
		minLength: [5, "Description must be at least 5 characters long "]
    }
}, {timestamps: true});

module.exports.Product = mongoose.model("Product", ProductSchema);