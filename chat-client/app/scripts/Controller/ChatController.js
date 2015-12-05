import connection from '../Network/Connection'

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
