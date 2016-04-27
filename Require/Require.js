/**
 * nodejs模块系统
 * 模块是nodejs应用程序的基本组成部分，文件与模块一一对应
 * nodejs中存在4类模块（原生模块和3种文件模块）
 * 
 * require加载顺序：
 * 1）文件缓存区，有直接返回，否则继续2
 * 2）是否原生模块，是继续3，否则跳转5
 * 3）原生模块缓存区，有直接返回，否则继续4
 * 4）加载原生模块，并缓存原声模块，直接返回
 * 5）查询文件模块，载入文件模块，缓存文件模块，直接返回
 */

var exportsIOHandle = require("../io/IOHandle.js");
iohandle = new exportsIOHandle();
iohandle.unBlockIOHandler("txt/test.txt");
// iohandle.blockIOHandler("txt/test.txt");
