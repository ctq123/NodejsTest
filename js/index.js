/**
 * nodejs 路由
 * 解析路由
 * 传递一个函数route作为参数入routerServer
 * @type {[type]}
 */
var routerServer = require("../js/server/routerServer.js");
var router = require("../js/router/router.js");

routerServer.start(router.route);