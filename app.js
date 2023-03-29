var socketio = require("socket.io");
var express = require("express");
var app = express();
var controller = require(__dirname  + "/apps/controllers");
var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controller);
app.use("/public",express.static(__dirname + "/public"));
app.set("views",__dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/partical",express.static(__dirname + "/partical"));
var server = app.listen(3000, function(){
   console.log("server is running");
});
var io = socketio(server);
var socketcontroller =
require("./apps/controllers/chatcontroller")(io);