import io from 'socket.io-client'

export default class Client {
    constructor() {
        var host = window.location.protocol + '//' + window.location.hostname;
        this.socket = io.connect(host + ':4330');

        this.socket.on('connect', this.onConnect.bind(this));
        this.socket.on('disconnect', this.onDisconnect.bind(this));
        this.socket.on('message', this.onMessage.bind(this));
    }

    onConnect() {
        console.log('connect');
    }

    onDisconnect() {
        console.log('disconnect');
    }

    onEvent(data) {
        console.log('event');
        console.log(data);
    }

    onMessage(data) {
        console.log('event');
        console.log(data);
    }

    emitMessage(message) {
        this.socket.emit('message', message)
    }
}
