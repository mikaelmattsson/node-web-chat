import connection from './Connection'

export default class Sender {

    static sendMessage(message) {
        console.log('Sender.sendMessage');
        connection.io.emit('message', message);
    }

}
