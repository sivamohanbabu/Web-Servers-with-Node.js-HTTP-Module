// methodHandlingServer.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Received a GET request\n');
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Received a POST request with data: ${body}\n`);
        });
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method not allowed\n');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
