const express = require('express');
const app = express();
const port = 6969;
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.listen(port, () => console.log(`server running on the best port, port ${port}`));

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);