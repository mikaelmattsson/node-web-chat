import Sender from '../Network/Sender'
import server from '../Controller/Server'

export default class Client {

    /**
     * Constructor.
     *
     * @param socket
     */
    constructor(socket) {
        this.socket = socket;

        console.log(socket.id + ' connected.');

        socket.on('disconnect', this.destroy.bind(this));
        socket.on('message', this.onMessage.bind(this));
    }

    /**
     * Message from client
     */
    onMessage(message) {
        console.log(this.socket.id + ': ' + message);
        Sender.sendMessageToEveryone(message);
    }

    /**
     * Client disconnected
     */
    destroy() {
        console.log(socket.id + ' disconnected.');
        server.removeClientFromList(this.socket.id);
    }
}