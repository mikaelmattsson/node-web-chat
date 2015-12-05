import * as config from '../../config/app'

import app from '../App'
import User from '../Model/User'
import ChatRoom from '../Model/ChatRoom'
import userEvent from '../Event/UserEvent'

export default class UserController {

    /**
     * Constructor.
     */
    constructor() {
        this.userList = {};
        app.connection.onNewConnection(this.handleConnection.bind(this));
    }

    /**
     * New user.
     *
     * @param socket
     */
    handleConnection(socket) {
        let user = new User(socket);
        user.onReceive('disconnect', function() {
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