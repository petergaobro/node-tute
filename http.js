const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('about page!')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we cannot seem to find the page you are looking for</p>
        <a href='/'>back home</a>
        `)
})

server.listen(5000)