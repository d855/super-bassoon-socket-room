var express = require('express');
var app = express();
app.use(express.static('public'));

var server = require('http').createServer(app)
var io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (data) => {
        socket.send(data);
    })

    socket.on('disconnect', function() {
        console.log('User disconnected')
    })
})

server.listen(3000, function(){
    console.log('Server is running');
})