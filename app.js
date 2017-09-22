var express = require('express');
var socket = require('socket.io');

// App setup
var port = process.env.PORT || 8080;
var app = express();
var server = app.listen(port, function(){
    console.log('You Have Made It');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});


Maharsh
Angad
