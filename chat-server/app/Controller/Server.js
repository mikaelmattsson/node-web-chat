import * as config from '../../config/app'

import connection from '../Network/Connection'
import Client from '../Model/Client'

export default class Server {

    /**
     * Constructor.
     */
    constructor() {
        this.clientList = {};
        connection.io.on('connection', this.handleConnection.bind(this));
    }

    /**
     * New connection.
     *
     * @param socket
     */
    handleConnection(socket) {
        this.clientList[socket.id] = new Client(socket);
    }

    /**
     * Remove a client from the client list.
     *
     * @param id
     */
    removeClientFromList(id) {
        delete this.clientList[id];
    }

    /**
     * Not used. Just an example.
     */
    startSpam() {
        setInterval(function() {
            for (var id in this.connections) {
                var socket = this.connections[id];
                socket.emit('message', 'spam');
            }
        }.bind(this), 1000);
    }
}

export default new Server();
