var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
	var post = '';
	req.on('data', function(chunk) {
		console.log(chunk);
		post += chunk;
	});

	req.on('end', function() {
		console.log(post);
		post = querystring.parse(post);
		console.log(post);
		res.write(post.title);
		res.write(post.text);
		res.end();
	});
}).listen(3000);