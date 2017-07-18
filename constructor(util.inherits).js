//引入util模块
var util = require('util');

function Human(name, age) {
	this.name = name;
	this.age = age;
	if(!Human.prototype.say) {
		Human.prototype.say = function() {
			console.log('my name is ' + this.name);
		}
	}
}

function Worker(name, age, skill) {
	//利用call继承Human对象
	Human.call(this, name, age);
	this.skill = skill;
	//原生js使Worker继承Human原型链实现
	//Object.setPrototypeOf(Worker.prototype, Human.prototype);
	if(!Worker.prototype.eat) {
		Worker.prototype.eat = function() {
			console.log('eating now');
		}
	}
}
//调用util.inherits使Worker继承Human原型链
util.inherits(Worker, Human);

var worker = new Worker('Divid', 30, 'paint');
worker.say();
worker.eat();

var people = new Human('Jack', 12);
//people.eat();