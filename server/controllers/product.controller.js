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
    Product.find({})
        .then(products => response.json({ Products: products }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};
module.exports.findOneProduct = (request, response) =>{
    Product.findOne({_id: request.params.id})
        .then(product => response.json({Product: product}))
        .catch(err => response.json(err))
}