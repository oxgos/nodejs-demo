var http = require('http');
http._createServer = function(fn) {
	var server = new http.Server();
	server.on('request', fn);
	return server;
}

http._createServer(function(req, res) {
	res.writeHeader(200, {'Content-Type': 'text/html'});
	res.end('<h1>Hello World</h1>');
}).listen(3000);

console.log('HTTP server is listening at port 3000.');