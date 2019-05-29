const products = require('../products.json');

function getProducts(req, res) {
	res.status(200).send(products)
}

module.exports = getProducts;