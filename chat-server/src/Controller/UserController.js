import * as config from '../../config/app'

import connection from '../Network/Connection'
import User from '../Model/User'
import ChatRoom from '../Model/ChatRoom'
import userEvent from '../Event/UserEvent'

export default class UserController {

    /**
     * Constructor.
     */
    constructor() {
        this.userList = {};
        connection.io.on('connection', this.handleConnection.bind(this));
    }

    /**
     * New user.
     *
     * @param socket
     */
    handleConnection(socket) {
        let user = new User(socket);
        user.on('disconnect', function() {
            this.handleDisconnect(user);
        }.bind(this));
        this.userList[user.id] = user;
        userEvent.emit('created', user);
    }

    /**
     * Delete user.
     *
     * @param user
     */
    handleDisconnect(user) {
        user.destroy();
        delete this.userList[user.id];
        userEvent.emit('deleted', user);
    }

}