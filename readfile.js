var fs = require('fs');

/*异步读取文件信息*/
fs.readFile('file.txt', 'utf-8', function(err, data) {
	if(err) {
		console.log(err);
	}else {
		console.log(data + ' async');
	}
});
console.log('async end');

/*同步方式*/
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data + ' sync');
console.log('sync end');