import connection from './Connection'

export default class Sender {

    static sendMessage(message) {
        console.log('Sender.sendMessage');
        connection.emit('message', message);
    }

}
