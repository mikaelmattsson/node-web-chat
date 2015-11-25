import * as config from '../../config/app'

import express from 'express'
import http from 'http';
import io from 'socket.io'

class Connection{

    /**
     * Constructor.
     */
    constructor() {
        var app = express();
        var conn = http.Server(app);

        this.io = io(conn);

        conn.listen(config.port, this.init.bind(this));
    }

    /**
     * Listening.
     */
    init() {
        console.log('listening on *:' + config.port);
    }

}

export default new Connection();
