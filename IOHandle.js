console.log("start");
BlockIOHandler();
console.log("\n");
UnBlockIOHandler();
console.log("end");

/**
 * block io handle function
 * @return {[type]} [description]
 */
function BlockIOHandler(){
	console.log("start BlockIOHandler");
	var fs = require("fs");
	var data = fs.readFileSync("test.txt");
	console.log("BlockIOHandler data="+data.toString());
	console.log("end BlockIOHandler");
}

/**
 * [UnBlockIOHandler description]
 */
function UnBlockIOHandler(){
	console.log("start UnBlockIOHandler");
	var fs = require("fs");
	fs.readFile("test.txt",function(err,data){
		if(err){console.error(err);}
		console.log("UnBlockIOHandler data="+data.toString());
	});
	console.log("end UnBlockIOHandler");
}