const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(`request receive`);
    // res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Node.js server! changed now');
})

server.listen(3000, ()=>{
    console.log(`your server is running on port 3000`)
})