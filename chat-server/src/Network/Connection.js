import * as config from '../../config/app'

import express from 'express'
import http from 'http'
import io from 'socket.io'

/**
 * Socket io adapter
 */
export default class Connection {

    /**
     * Constructor.
     */
    constructor() {
        var app = express();
        var conn = http.Server(app);

        this._io = io(conn);

        conn.listen(config.port, this.init.bind(this));
    }

    /**
     * Listening.
     */
    init() {
        console.log('listening on *:' + config.port);
    }

    /**
     * Send a package to the everyone.
     *
     * @param key
     * @param data
     */
    sendToAll(key, data) {
        this._io.emit(key, data);
    }

    /**
     * Add a listener to the connection.
     *
     * @param method
     */
    onNewConnection(method) {
        this._io.on('connection', method);
    }

    /**
     * Remove a listener from the connection.
     *
     * @param method
     */
    removeOnNewConnection(method) {
        this._io.removeEventListener('connection', method);
    }

}

