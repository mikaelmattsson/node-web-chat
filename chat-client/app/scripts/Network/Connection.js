import io from 'socket.io-client'

import serverEvents from '../Events/ServerEvents'

class Connection {
    constructor() {
        let host = window.location.protocol + '//' + window.location.hostname;
        this._io = io.connect(host + ':4330');

        this.on('connect', this.onConnect.bind(this));
        this.on('disconnect', this.onDisconnect.bind(this));
    }

    onConnect() {
        console.log('connect');
    }

    onDisconnect() {
        console.log('disconnect');
    }

    emit(key, func) {
        this._io.emit(key, func);
    }

    on(key, func) {
        this._io.on(key, func);
    }

    removeEventListener(key, func) {
        this._io.removeEventListener(key, func);
    }

}

export default new Connection();
