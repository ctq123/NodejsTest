//进入js目录使用node stream命令 url="../txt/test.txt"
// console.log("start");
// BlockIOHandler("../txt/test.txt");
// console.log("\n");
// UnBlockIOHandler("../txt/test.txt");
// console.log("end");

/**
 * block io handle function
 * @return {[type]} [description]
 */
function BlockIOHandler(filename){
	console.log("start BlockIOHandler");
	var fs = require("fs");
	var data = fs.readFileSync(filename);
	console.log("BlockIOHandler data="+data.toString());
	console.log("end BlockIOHandler");
}

/**
 * [UnBlockIOHandler description]
 */
function UnBlockIOHandler(filename){
	console.log("start UnBlockIOHandler");
	var fs = require("fs");
	fs.readFile(filename,function(err,data){
		if(err){console.error(err);}
		console.log("UnBlockIOHandler data="+data.toString());
	});
	console.log("end UnBlockIOHandler");
}

/**
 * 传递给外部使用
 * @return {[type]} [description]
 */
function exportsIOHandle(){
	this.blockIOHandler = function(filename){
		BlockIOHandler(filename);
	}
	this.unBlockIOHandler = function(filename){
		UnBlockIOHandler(filename);
	}
}

module.exports = exportsIOHandle;