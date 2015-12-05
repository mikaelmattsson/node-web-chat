export default class User {

    /**
     * Constructor.
     *
     * @param socket
     */
    constructor(socket) {
        this._socket = socket;
        this.id = socket.id;
        this.currentChatRoom = null;

        console.log(this.id + ' connected.');
        socket.on('message', this.onMessage.bind(this));
    }

    /**
     * Message from client.
     *
     * @param message
     */
    onMessage(message) {
        console.log(this.id + ': ' + message);
        if (this.currentChatRoom) {
            this.currentChatRoom.sendMessage(message);
        }
    }

    /**
     * User disconnected.
     */
    destroy() {
        console.log(this.id + ' disconnected.');
    }

    /**
     * Send a package to the server.
     *
     * @param key
     * @param data
     */
    send(key, data) {
        this._socket.emit(key, data);
    }

    /**
     * Add a listener on remote user events.
     *
     * @param key
     * @param method
     */
    onReceive(key, method) {
        this._socket.on(key, method);
    }

    /**
     * Remove a listener from remote user events.
     *
     * @param key
     * @param method
     */
    removeEventListener(key, method) {
        this._socket.removeEventListener(key, method);
    }
}