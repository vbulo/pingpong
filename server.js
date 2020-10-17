#!/usr/bin/env node

const http = require('http');
const port = 8080;

function ping(request, response) {
  console.log(`path: ${request.url}`);
  if ( request.url === '/ping' )
    response.end('pong!!!');
  else
    response.end('No pong for you');
}

const server = http.createServer(ping);
server.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
