const products = require('../products.json');

function getProducts(req, res) {
	if (req.query.price) {
		let filtered = products.filter( val => val.price >= parseFloat(req.query.price))
		res.status(200).send(filtered);
	}
	else {
		res.status(200).send(products);
	}
}

module.exports = getProducts;