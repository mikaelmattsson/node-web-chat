import * as config from '../../config/app'
import * as lib from '../libraries'
import Events from '../Events'

export default class Server {
    constructor() {
        var app = lib.express();
        var http = lib.http.Server(app);

        this.io = lib.io(http);
        this.connections = {};

        this.io.on('connection', this.handleConnection.bind(this));
        http.listen(config.port, this.init.bind(this));
    }

    init() {
        console.log('listening on *:' + config.port);
        //setInterval(function() {
        //    for (var id in this.connections) {
        //        var socket = this.connections[id];
        //        socket.emit('event', 'spam');
        //    }
        //    //this.io.emit('event', 'message')
        //}.bind(this), 1000);
    }

    handleConnection(socket) {
        console.log('a user connected ' + socket.id);
        this.connections[socket.id] = socket;
        socket.on('disconnect', this.handleDisconnect.bind(this));
        socket.on('message', function(message) {
            Events.handleMessage(message, socket, this)
        }.bind(this));
    }

    handleDisconnect(socket) {
        console.log('a user disconnected');
        delete this.connections[socket.id];
    }

    emit(type, message){
        console.log('message: ' + message);
        this.io.emit(type, message);
    }

}
