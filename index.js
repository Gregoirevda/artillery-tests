var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  console.log('returning html');
  res.sendFile(__dirname + '/index.html');
});

const namespacedSocket = io.of('/channel-41');

namespacedSocket.on('connection', function(socket){
  console.log('a user connected');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
