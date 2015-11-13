import io from 'socket.io-client'


export default class Client {
    constructor() {
        var host = window.location.protocol + '//' + window.location.hostname;
        this.socket = io.connect(host + ':4330');

        this.socket.on('connect', this.onConnect.bind(this));
        this.socket.on('event', this.onEvent.bind(this));
        this.socket.on('disconnect', this.onDisconnect.bind(this));
    }

    onConnect() {
        console.log('connect');
    }

    onDisconnect() {
        console.log('disconnect');
    }

    onEvent(data) {
        console.log('event');
        this.socket.emit('event', 'return ' + data)
    }
}
