import connection from './Connection'

export default class Sender {

    static sendMessageToEveryone(message) {
        connection.io.emit('message', message);
    }
}
