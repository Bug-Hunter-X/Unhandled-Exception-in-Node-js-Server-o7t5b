const http = require('http');

const server = http.createServer((req, res) => {
  // Without proper error handling
  const data = fs.readFileSync('nonexistent.txt');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(data);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});