
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
        this.send('chat:userJoined', user.id);
        user.send('chat:joinedRoom', {
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
    sendMessage(message) {
        this._messages.push(message);
        this.send('chat:message', message)
    }

    /**
     * Remove user.
     *
     * @param user
     */
    removeUser(user) {
        this.send('chat:userLeft', user.id);
        delete this._users[user.id];
    }

    /**
     * Emit to all users in the room.
     *
     * @param key
     * @param data
     */
    send(key, data) {
        for (var id in this._users) {
            var user = this._users[id];
            user.send(key, data);
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


