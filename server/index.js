const express = require('express');
const app = express();
const port = 6969;
const products = require('../products.json');

app.listen(port, () => console.log(`server running on the best port, port ${port}`));

function getProducts(req, res) {
	res.status(200).send(products)
}

app.get('/api/products', getProducts)