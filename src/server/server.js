var express = require('express');
var app = express();
var cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./Socket');
const server = require('./listen.js');
const request = require('request');
const PORT = 3000;
app.use(cors());
sockets.connect(io,PORT)
server.listen(http,PORT);

var path = require('path');
var post = require('./routes/login')(app);



// app.listen(3000, () => {
//     var d = new Date();
//     var n = d.getHours();
//     var m = d.getMinutes();

//     console.log('Server has been started at : ' + n + ':' + m);
// });