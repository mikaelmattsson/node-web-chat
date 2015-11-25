import * as config from '../../config/app'

import connection from '../Network/Connection'
import User from '../Model/User'
import ChatRoom from '../Model/ChatRoom'
import userEvent from '../Event/UserEvent'

export default class ChatController {

    constructor() {
        this._mainChatRoom = new ChatRoom();

        userEvent.on('created', this.handleNewUser.bind(this));
        userEvent.on('deleted', this.handleUserDeleted.bind(this));
    }

    handleNewUser(user) {
        user.currentChatRoom = this._mainChatRoom;
        this._mainChatRoom.addUser(user);
    }

    handleUserDeleted(user) {
        user.currentChatRoom.removeUser(user);
    }

}