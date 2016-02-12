port = process.argv[2];
var port = (process.argv[2] ? Number(process.argv[2]) : 2002);
var net = require('net');
var server = net.createServer(respond);

function respond(socket) {
    d = new Date();
    socket.end(d.toString());
}
console.log("Listening on port ", port);
server.listen(port);