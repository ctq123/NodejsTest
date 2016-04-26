//step 1:引入events模块
//step 2:创建eventEmitter对象
//step 3:绑定事件及事件的处理程序
//step 4:触发事件
//注意nodejs是javascript语法，是非编译语言（顺序问题）


/**
 * 主事件
 * [MainEventHandler description]
 */
var MainEventHandler = function main(){
	console.log("start MainEventHandler");
	var connectHandler = function connected(){
		console.log("开始连接");
		eventEmitter.emit("data_received");
	}
	eventEmitter.on("data_received", function(){
		console.log("数据接收成功");
	});
	eventEmitter.on("connection", connectHandler);
	eventEmitter.emit("connection");
	console.log("end MainEventHandler");
}

//step 1:引入events模块
var events = require("events");
//step 2:创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
//step 3:绑定事件及事件的处理程序
eventEmitter.on("mainEvent", MainEventHandler);
//step 4:触发事件
eventEmitter.emit("mainEvent");


