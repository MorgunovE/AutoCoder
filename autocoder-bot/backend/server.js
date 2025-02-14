const http = require('http);

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Backend Service
');
}).listen(3000, () => {
  console.log('Backend server listening on port 3000');
});
