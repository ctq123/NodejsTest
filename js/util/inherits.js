/**
 * util.inherits(child,base)
 * 实现对象对原型继承的函数
 *
 * 注意：
 * 1.javascript没有提供对象继承的语言级别特性，通过原型复制来实现的prototype;
 * 2.nodejs使用util.inherits不能继承【原型构造函数内】的属性及函数，继承prototype处理过的属性
 */

var util = require("util");

function Base(){
	this.name = "base";
	this.count = 1;
	this.sayHello = function(){
		console.log("hello,"+this.name);
	}
}
Base.prototype.showName = function(){
	console.log(this.name);
}

// Base.prototype.showSayHello = this.sayHello;
Base.prototype.showSayHello = function(){
	this.sayHello;//不能实现继承基类内部的函数
	console.log(this.count);//不能实现继承基类内部的属性
}

function Child(){
	this.name = "child";
}

function main(){
	util.inherits(Child, Base);
	var objBase = new Base();
	console.log(objBase);
	objBase.showName();
	objBase.sayHello();

	var objChild = new Child();
	console.log(objChild);
	objChild.showName();
	objChild.showSayHello();

}

exports.main = main;