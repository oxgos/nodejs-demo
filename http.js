var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

http.createServer(function(req, res) {
	/*两种方法都可以,writeHead优先级较高*/
	/*res.statusCode = 200;
	res.setHeader('content-type', 'text/plain');*/
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end('Hello World,now changing,change again\n');
}).listen(port, hostname, () => {
	console.log(`服务器运行在 http://${hostname}:${port}`);
});