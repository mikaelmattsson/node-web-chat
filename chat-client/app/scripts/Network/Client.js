import io from 'socket.io-client'

import serverEvents from '../Events/ServerEvents'

class Client{
    constructor() {
        var host = window.location.protocol + '//' + window.location.hostname;
        this.io = io.connect(host + ':4330');

        this.io.on('connect', this.onConnect.bind(this));
        this.io.on('disconnect', this.onDisconnect.bind(this));
        this.io.on('message', this.onMessage.bind(this));
    }

    onConnect() {
        console.log('connect');
    }

    onDisconnect() {
        console.log('disconnect');
    }

    onMessage(data) {
        serverEvents.emit('new_message', data);
    }

    emitMessage(message) {
        this.io.emit('message', message);
    }
}

export default new Client();
