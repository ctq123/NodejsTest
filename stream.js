/**
 * 流Stream有四种类型：
 * 1）Readable-可读操作
 * 2）Writable-可写操作
 * 3）Duplex-双层可读可写操作
 * 4）Transform-写入后读取出来
 *
 * 所有Stream对象都为EventEmitter实例,常用处理流事件
 * data-有数据可读时触发
 * end-没有数据可读时触发
 * finish-没有数据可写时触发
 * error-出现错误时触发
 */

var fs = require("fs");

function ReadStreamHandler(filename){
	var data = "";
	var readerStream = fs.createReadStream(filename);
	//设置编码
	readerStream.setEncoding("utf-8");
	//处理流事件->data,end,error
	readerStream.on("data",function(chunk){
		console.log("start to read data of "+filename);
		data += chunk;
	});
	readerStream.on("end",function(){
		console.log(data);
		console.log("end to read data of "+filename);
	});
	readerStream.on("error",function(err){
		console.error(err.stack);
	});
};

function WriteStreamHandler(filename){
	var data = "所有Stream的对象都是EventEmitter实例";
	var writerStream = fs.createWriteStream(filename);
	//设置写入编码
	writerStream.write(data,"utf-8");
	//标志文件末尾
	writerStream.end();
	//处理流事件->finish,error
	writerStream.on("finish",function(){
		console.log("finish to write "+filename);
	});
	writerStream.on("error",function(err){
		console.error(err.stack);
	});
};

/**
 * 管道流读写操作
 * @param {[type]} input  [description]
 * @param {[type]} output [description]
 */
function PipeStreamHandler(input_filename,output_filename){
	//创建可读流
	var readerStream = fs.createReadStream(input_filename);
	//创建可写流
	var writerStream = fs.createWriteStream(output_filename);
	//管道流读写操作
	readerStream.pipe(writerStream);
}

console.log("=======start=======");
WriteStreamHandler("input.txt");
PipeStreamHandler("input.txt","output.txt");
// ReadStreamHandler("input.txt");
ReadStreamHandler("output.txt");
console.log("========end========");
