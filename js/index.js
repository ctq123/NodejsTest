/**
 * nodejs 路由
 * 解析路由
 * 访问http://127.0.0.1:8888/getuser?user=123
 * 
 * 传递一个函数route作为参数入routerServer
 * @type {[type]}
 */

//输出当前文件的绝对路径的文件名
console.log("当前文件的绝对路径为："+__filename);
//输出当前执行脚本所在目录
console.log("当前执行脚本所在目录："+__dirname);

function routeTest(){
	var routerServer = require("../js/server/routerServer.js");
	var router = require("../js/router/router.js");

	routerServer.start(router.route);
}

function timeoutTest(){
	var timeout = require("../js/timeout/timeout.js");
	timeout.setIntervalHandler();
	// timeout.setTimeoutHandler();
	// timeout.clearTimeoutHandler();
}

// routeTest();
timeoutTest();


