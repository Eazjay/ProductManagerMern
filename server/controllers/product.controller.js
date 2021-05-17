const {Product} = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json({Product: product}))
        .catch(err => response.json(err));
}
module.exports.findProducts = (request, response) => {
    Product.find()
        .then(product => response.json({ Products: product }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};