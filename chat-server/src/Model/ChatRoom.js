import Sender from '../Network/Sender'

export default class ChatRoom {

    /**
     * Constructor.
     */
    constructor() {
        this._users = [];
        this._messages = [];
    }

    /**
     * New user join the room.
     *
     * @param user
     */
    addUser(user) {
        this.emit('chat:userJoined', user.id);
        user.emit('chat:joinedRoom', {
            'messages': this.getMessages(10),
            'users': this.getUserList()
        });
        this._users[user.id] = user;
    }

    /**
     * New message.
     *
     * @param message
     */
    emitMessage(message) {
        this._messages.push(message);
        this.emit('chat:message', message)
    }

    /**
     * Remove user.
     *
     * @param user
     */
    removeUser(user) {
        this.emit('chat:userLeft', user.id);
        delete this._users[user.id];
    }

    /**
     * Emit to all users in the room.
     *
     * @param key
     * @param data
     */
    emit(key, data) {
        for (var id in this._users) {
            var user = this._users[id];
            user.emit(key, data);
        }
    }

    /**
     * Get last x number of messages.
     *
     * @param number
     * @returns Array
     */
    getMessages(number) {
        return this._messages.slice(Math.max(this._messages.length - number, 1));
    }

    /**
     * Get a list of user names.
     *
     * @returns Array
     */
    getUserList() {
        let userNames = [];
        for (var id in this._users) {
            var user = this._users[id];
            userNames.push(user.id);
        }
        return userNames;
    }

}


