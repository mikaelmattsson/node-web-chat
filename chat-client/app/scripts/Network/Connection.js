import io from 'socket.io-client'

import serverEvents from '../Events/ServerEvents'

class Connection{
    constructor() {
        var host = window.location.protocol + '//' + window.location.hostname;
        this.io = io.connect(host + ':4330');

        this.io.on('connect', this.onConnect.bind(this));
        this.io.on('disconnect', this.onDisconnect.bind(this));
    }

    onConnect() {
        console.log('connect');
    }

    onDisconnect() {
        console.log('disconnect');
    }

}

export default new Connection();
