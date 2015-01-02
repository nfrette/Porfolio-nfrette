// Load the http module to create an http server.
var http = require('http');

/*http.createServer().listen(8888);*/

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(8888);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");