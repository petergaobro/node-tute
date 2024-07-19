const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('request event');
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        // blocking code !!
        for (let i = 0; i < 1000; i++) {
            for (let n = 0; n < 1000; n++) {
                console.log(`${i} ${n}`);
            }
        }
        res.end('about page!')
    }
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000 .....')
})