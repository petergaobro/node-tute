const express = require('express')
const app = express();
const { products } = require('./data')

app.get('/', (req, res) => {
    // res.json(products)
    res.send('<h1>home page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    // res.json(products)
    // res.send('<h1>home page</h1><a href="/api/products">products</a>')
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does not exist')
    }
    console.log(singleProduct);
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedproducts = [...products];

    if (search) {
        sortedproducts = sortedproducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedproducts = sortedproducts.slice(0, Number(limit))
    }

    if (sortedproducts.length < 1) {
        // res.status(200).send('no products matched your search')

        // return the current situation with json format
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedproducts)
    // res.send('hello world')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000 ...');
})