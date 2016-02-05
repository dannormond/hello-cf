var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from NodeJS on port '+port+' from container '+process.env.HOSTNAME+'\n'+ 'Env Test: ' + process.env.TEST + '\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});
