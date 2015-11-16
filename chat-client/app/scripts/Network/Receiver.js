import connection from './Connection'

export default class Receiver {

    static onMessage(func) {
        console.log('Receiver.onMessage');
        connection.io.on('message', func);
    }

    static removeMessageListener() {
        connection.io.removeEventListener('message', func);
    }

}
