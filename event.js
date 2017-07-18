var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();


/*事件循环的每一次迭代,都是一个Tick*/

/*
	如果直接event.emit('some_event')(在第一个Tick),
	因为还没有定义事件监听器(on),
	所以向event对象发送事件some_event也触发无效
*/

/*定义到在下个Tick才执行,这样触发有效*/
/*micro-task（微任务）/jobs*/
process.nextTick(function() {
	event.emit('some_event', 'haha');
});

event.on('some_event', function(string) {
	var data = fs.readFileSync('file.txt', 'utf-8');
	console.log(data);
	console.log(string);
	console.log('some_event occured');
});

/*setTimeout,setInterval属于macro-task（宏任务）/task*/
setTimeout(function() {
	event.emit('some_event');
}, 0)

/*process.nextTick(function() {
	event.emit('some_event');
});*/