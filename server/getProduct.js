const products = require('../products.json');

function getProduct(req, res) {
	products.map( (val) => {
		if (req.params.id == val.id) {
			res.status(200).send(val)
		}
		else {
			res.status(500).send("Item not in list")
		}
	})
}

module.exports = getProduct;