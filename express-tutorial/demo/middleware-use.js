const express = require('express')
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
// req => middleware => res
// app.use('/api', logger)


// USE VS ROUTE
// options - our own / express / third party

// app.use([logger, authorize])

// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

// app.get('/api/items', [logger, authorize], (req, res) => {
app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000 ...');
})