/*
 * This file is part of a sample chat application.
 *
 * (c) Mikael Mattsson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as config from '../config/app'
import * as lib from './libraries'

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
        //    this.io.emit('event', 'message')
        //}.bind(this), 1000);
    }

    handleConnection(socket) {
        console.log('a user connected ' + socket.id);
        this.connections[socket.id] = socket;
        socket.on('disconnect', this.handleDisconnect.bind(this));
        socket.on('event', function(message) {
            this.handleEvent(socket, message)
        }.bind(this));
    }

    handleDisconnect(socket) {
        console.log('a user disconnected');
        delete this.connections[socket.id];
    }

    handleEvent(socket, message) {
        console.log(message + ' from ' + socket.id)
        this.io.emit('message', message);
    }

}
